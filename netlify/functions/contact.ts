import { Resend } from 'resend';

type HandlerHeaders = Record<string, string>;

interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers?: Record<string, string | undefined>;
}

interface HandlerResponse {
  statusCode: number;
  headers: HandlerHeaders;
  body: string;
}

interface ContactPayload {
  name: string;
  business: string;
  email: string;
  message: string;
  website?: string;
}

const jsonHeaders: HandlerHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const jsonResponse = (statusCode: number, body: Record<string, string | boolean>): HandlerResponse => ({
  statusCode,
  headers: jsonHeaders,
  body: JSON.stringify(body),
});

const getHeader = (headers: HandlerEvent['headers'], name: string): string => {
  if (!headers) return '';

  const match = Object.entries(headers).find(([key]) => key.toLowerCase() === name.toLowerCase());
  return match?.[1]?.trim() ?? '';
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const normalizeMultilineText = (value: string): string => value.replace(/\r\n/g, '\n').trim();

const toMultilineHtml = (value: string): string => escapeHtml(normalizeMultilineText(value)).replace(/\n/g, '<br />');

const isContactPayload = (value: unknown): value is ContactPayload => {
  if (!value || typeof value !== 'object') return false;

  const payload = value as Record<string, unknown>;
  return (
    typeof payload.name === 'string' &&
    typeof payload.business === 'string' &&
    typeof payload.email === 'string' &&
    typeof payload.message === 'string' &&
    (typeof payload.website === 'string' || typeof payload.website === 'undefined')
  );
};

const buildInternalEmail = (payload: ContactPayload, metadata: { submittedAt: string; userAgent: string; ipAddress: string }) => {
  const safeName = escapeHtml(payload.name);
  const safeBusiness = escapeHtml(payload.business);
  const safeEmail = escapeHtml(payload.email);
  const safeUserAgent = escapeHtml(metadata.userAgent || '-');
  const safeIp = escapeHtml(metadata.ipAddress || '-');

  return {
    subject: 'Neue Anfrage \u00fcber das Kontaktformular \u2013 VS Web Studio',
    html: `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
        <h2 style="margin-bottom:16px;">Neue Anfrage \u00fcber das Kontaktformular</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:6px 0;font-weight:700;">Name</td><td style="padding:6px 0;">${safeName}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700;">Business</td><td style="padding:6px 0;">${safeBusiness}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700;">E-Mail</td><td style="padding:6px 0;">${safeEmail}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700;vertical-align:top;">Message</td><td style="padding:6px 0;">${toMultilineHtml(payload.message)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700;">Submission date</td><td style="padding:6px 0;">${escapeHtml(metadata.submittedAt)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700;">User-Agent</td><td style="padding:6px 0;">${safeUserAgent}</td></tr>
          <tr><td style="padding:6px 0;font-weight:700;">IP</td><td style="padding:6px 0;">${safeIp}</td></tr>
        </table>
      </div>
    `,
    text: [
      'Neue Anfrage \u00fcber das Kontaktformular',
      '',
      `Name: ${payload.name}`,
      `Business: ${payload.business}`,
      `E-Mail: ${payload.email}`,
      `Message: ${normalizeMultilineText(payload.message)}`,
      `Submission date: ${metadata.submittedAt}`,
      `User-Agent: ${metadata.userAgent || '-'}`,
      `IP: ${metadata.ipAddress || '-'}`,
    ].join('\n'),
  };
};

const buildAutoReplyEmail = (payload: ContactPayload) => {
  const safeName = escapeHtml(payload.name);
  const safeBusiness = escapeHtml(payload.business);

  return {
    subject: 'Ihre Anfrage wurde erhalten \u2013 VS Web Studio',
    html: `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
        <p>Hallo ${safeName},</p>
        <p>vielen Dank f\u00fcr Ihre Anfrage.<br />Wir haben Ihre Nachricht erhalten und pr\u00fcfen Ihr Projekt.<br />In der Regel melden wir uns innerhalb von 1\u20132 Stunden zur\u00fcck.</p>
        <p><strong>Zusammenfassung Ihrer Anfrage:</strong></p>
        <p style="margin:0;">Unternehmen: ${safeBusiness}</p>
        <p style="margin-top:8px;">Nachricht:<br />${toMultilineHtml(payload.message)}</p>
        <p>Beste Gr\u00fc\u00dfe<br />VS Web Studio</p>
      </div>
    `,
    text: [
      `Hallo ${payload.name},`,
      '',
      'vielen Dank f\u00fcr Ihre Anfrage.',
      'Wir haben Ihre Nachricht erhalten und pr\u00fcfen Ihr Projekt.',
      'In der Regel melden wir uns innerhalb von 1\u20132 Stunden zur\u00fcck.',
      '',
      'Zusammenfassung Ihrer Anfrage:',
      `Unternehmen: ${payload.business}`,
      `Nachricht: ${normalizeMultilineText(payload.message)}`,
      '',
      'Beste Gr\u00fc\u00dfe',
      'VS Web Studio',
    ].join('\n'),
  };
};

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(200, { ok: true });
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { ok: false, error: 'Method not allowed' });
  }

  if (!event.body) {
    return jsonResponse(400, { ok: false, error: 'Invalid request body' });
  }

  let parsedBody: unknown;

  try {
    parsedBody = JSON.parse(event.body);
  } catch {
    return jsonResponse(400, { ok: false, error: 'Invalid JSON body' });
  }

  if (!isContactPayload(parsedBody)) {
    return jsonResponse(400, { ok: false, error: 'Invalid request payload' });
  }

  const payload: ContactPayload = {
    name: parsedBody.name.trim(),
    business: parsedBody.business.trim(),
    email: parsedBody.email.trim(),
    message: parsedBody.message.trim(),
    website: parsedBody.website?.trim(),
  };

  if (payload.website) {
    return jsonResponse(200, { ok: true });
  }

  if (!payload.name || !payload.business || !payload.email || !payload.message) {
    return jsonResponse(400, { ok: false, error: 'Missing required fields' });
  }

  if (!emailPattern.test(payload.email)) {
    return jsonResponse(400, { ok: false, error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const replyTo = process.env.CONTACT_REPLY_TO;

  if (!apiKey || !toEmail || !fromEmail || !replyTo) {
    console.error('Contact function is missing required environment variables.');
    return jsonResponse(500, { ok: false, error: 'Server misconfiguration' });
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toLocaleString('de-DE', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Berlin',
  });
  const userAgent = getHeader(event.headers, 'user-agent');
  const forwardedIp = getHeader(event.headers, 'x-forwarded-for');
  const netlifyIp = getHeader(event.headers, 'x-nf-client-connection-ip');
  const ipAddress = netlifyIp || forwardedIp.split(',')[0]?.trim() || '';

  const internalEmail = buildInternalEmail(payload, { submittedAt, userAgent, ipAddress });
  const autoReplyEmail = buildAutoReplyEmail(payload);

  try {
    console.log('Contact form send started.', {
      internalTo: toEmail,
      autoReplyTo: payload.email,
      replyTo,
    });

    const [internalResult, autoReplyResult] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo,
        subject: internalEmail.subject,
        html: internalEmail.html,
        text: internalEmail.text,
      }),
      resend.emails.send({
        from: fromEmail,
        to: payload.email,
        replyTo,
        subject: autoReplyEmail.subject,
        html: autoReplyEmail.html,
        text: autoReplyEmail.text,
      }),
    ]);

    console.log('Resend responses received.', {
      internalEmailId: internalResult.data?.id ?? null,
      autoReplyEmailId: autoReplyResult.data?.id ?? null,
      internalError: internalResult.error?.message ?? null,
      autoReplyError: autoReplyResult.error?.message ?? null,
    });

    if (internalResult.error || autoReplyResult.error) {
      console.error('Resend email delivery failed.', {
        internalError: internalResult.error?.message,
        autoReplyError: autoReplyResult.error?.message,
      });
      return jsonResponse(500, { ok: false, error: 'Email delivery failed' });
    }

    return jsonResponse(200, { ok: true });
  } catch (error) {
    console.error('Unexpected error while sending contact emails.', error);
    return jsonResponse(500, { ok: false, error: 'Internal server error' });
  }
};
