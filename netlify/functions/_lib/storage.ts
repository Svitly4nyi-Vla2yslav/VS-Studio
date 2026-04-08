import { createSign } from 'node:crypto';

interface PersistResult {
  provider: 'firestore' | 'supabase' | 'none';
  stored: boolean;
  id?: string | null;
}

const toFirestoreFields = (value: unknown): Record<string, unknown> => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, entry]) => [key, toFirestoreValue(entry)])
  );
};

const toFirestoreValue = (value: unknown): Record<string, unknown> => {
  if (value === null || value === undefined) return { nullValue: null };
  if (typeof value === 'string') return { stringValue: value };
  if (typeof value === 'boolean') return { booleanValue: value };
  if (typeof value === 'number') return Number.isInteger(value) ? { integerValue: value } : { doubleValue: value };
  if (Array.isArray(value)) return { arrayValue: { values: value.map(item => toFirestoreValue(item)) } };
  if (typeof value === 'object') return { mapValue: { fields: toFirestoreFields(value) } };
  return { stringValue: String(value) };
};

const createGoogleAccessToken = async () => {
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    return null;
  }

  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(
    JSON.stringify({
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/datastore',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    })
  ).toString('base64url');
  const unsignedToken = `${header}.${payload}`;
  const signature = createSign('RSA-SHA256').update(unsignedToken).sign(privateKey, 'base64url');

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsignedToken}.${signature}`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create Google access token: ${response.status}`);
  }

  const json = (await response.json()) as { access_token: string };
  return json.access_token;
};

const persistToFirestore = async (collection: string, record: Record<string, unknown>): Promise<PersistResult> => {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  if (!projectId) {
    return { provider: 'none', stored: false };
  }

  const accessToken = await createGoogleAccessToken();
  if (!accessToken) {
    return { provider: 'none', stored: false };
  }

  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: toFirestoreFields(record) }),
    }
  );

  if (!response.ok) {
    throw new Error(`Firestore storage failed with status ${response.status}`);
  }

  const json = (await response.json()) as { name?: string };
  return { provider: 'firestore', stored: true, id: json.name?.split('/').pop() ?? null };
};

const persistToSupabase = async (table: string, record: Record<string, unknown>): Promise<PersistResult> => {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return { provider: 'none', stored: false };
  }

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    throw new Error(`Supabase storage failed with status ${response.status}`);
  }

  const json = (await response.json()) as Array<{ id?: string | number }>;
  return {
    provider: 'supabase',
    stored: true,
    id: json[0]?.id ? String(json[0].id) : null,
  };
};

export const persistRecord = async (collection: string, table: string, record: Record<string, unknown>) => {
  const firestoreResult = await persistToFirestore(collection, record);
  if (firestoreResult.stored) return firestoreResult;

  const supabaseResult = await persistToSupabase(table, record);
  if (supabaseResult.stored) return supabaseResult;

  return { provider: 'none', stored: false, id: null };
};
