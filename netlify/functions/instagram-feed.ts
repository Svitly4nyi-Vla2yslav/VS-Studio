interface HandlerEvent {
  httpMethod: string;
  queryStringParameters?: Record<string, string | undefined>;
}

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url?: string;
  permalink?: string;
  thumbnail_url?: string;
  timestamp?: string;
  username?: string;
  like_count?: number;
  comments_count?: number;
}

interface InstagramCollection {
  data?: InstagramMedia[];
  paging?: {
    cursors?: { after?: string };
    next?: string;
  };
}

interface InstagramProfile {
  id: string;
  username?: string;
  profile_picture_url?: string;
}

const jsonHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
};

const respond = (statusCode: number, body: unknown, cacheControl = 'no-store') => ({
  statusCode,
  headers: { ...jsonHeaders, 'Cache-Control': cacheControl },
  body: JSON.stringify(body),
});

const fetchInstagramJson = async <T>(url: URL, token: string): Promise<T> => {
  url.searchParams.set('access_token', token);

  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(8000),
  });
  const payload = (await response.json()) as T & { error?: { message?: string; code?: number } };

  if (!response.ok || payload.error) {
    const message = payload.error?.message ?? `Instagram API returned ${response.status}`;
    throw new Error(message);
  }

  return payload;
};

export const handler = async (event: HandlerEvent) => {
  if (event.httpMethod === 'OPTIONS') return respond(200, { ok: true });
  if (event.httpMethod !== 'GET') return respond(405, { ok: false, error: 'Method not allowed' });

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID || 'me';
  const apiVersion = process.env.INSTAGRAM_API_VERSION || 'v26.0';
  const requestedCursor = event.queryStringParameters?.after?.trim();
  const after = requestedCursor && requestedCursor.length <= 500 ? requestedCursor : undefined;

  if (!token) {
    console.error('Instagram feed is missing INSTAGRAM_ACCESS_TOKEN.');
    return respond(503, { ok: false, configured: false, posts: [], stories: [] });
  }

  const baseUrl = `https://graph.instagram.com/${apiVersion}`;
  const profileUrl = new URL(`${baseUrl}/${userId}`);
  profileUrl.searchParams.set('fields', 'id,username,profile_picture_url');

  const postsUrl = new URL(`${baseUrl}/${userId}/media`);
  postsUrl.searchParams.set(
    'fields',
    'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username,like_count,comments_count'
  );
  postsUrl.searchParams.set('limit', '100');
  if (after) postsUrl.searchParams.set('after', after);

  const storiesUrl = new URL(`${baseUrl}/${userId}/stories`);
  storiesUrl.searchParams.set(
    'fields',
    'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username'
  );
  storiesUrl.searchParams.set('limit', '12');

  try {
    const [profile, posts, stories] = await Promise.all([
      fetchInstagramJson<InstagramProfile>(profileUrl, token),
      fetchInstagramJson<InstagramCollection>(postsUrl, token),
      fetchInstagramJson<InstagramCollection>(storiesUrl, token).catch(error => {
        console.warn('Instagram stories could not be loaded.', error);
        return { data: [] } as InstagramCollection;
      }),
    ]);

    return respond(
      200,
      {
        ok: true,
        configured: true,
        profile,
        posts: posts.data ?? [],
        stories: stories.data ?? [],
        nextCursor: posts.paging?.next ? posts.paging.cursors?.after ?? null : null,
        fetchedAt: new Date().toISOString(),
      },
      'public, max-age=300, s-maxage=900, stale-while-revalidate=3600'
    );
  } catch (error) {
    console.error('Instagram feed request failed.', error);
    return respond(502, { ok: false, configured: true, posts: [], stories: [] });
  }
};

