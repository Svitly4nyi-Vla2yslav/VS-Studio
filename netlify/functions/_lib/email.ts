import { Resend } from 'resend';

export interface EmailPayload {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

/** Екранує HTML-спецсимволи в користувацькому тексті перед вставленням у лист. */
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/**
 * Формує HTML-лист із заголовка та пар «підпис — значення».
 * Усі динамічні значення екрануються, а переноси рядків у значеннях стають `<br />`.
 */
export const createKeyValueEmailHtml = (title: string, fields: Record<string, string>) => `
  <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
    <h2 style="margin-bottom:16px;">${escapeHtml(title)}</h2>
    <table style="width:100%;border-collapse:collapse;">
      ${Object.entries(fields)
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 0;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;">${escapeHtml(
              value
            ).replace(/\n/g, '<br />')}</td></tr>`
        )
        .join('')}
    </table>
  </div>
`;

/**
 * Надсилає сповіщення через Resend і повертає ідентифікатор листа.
 * Без `RESEND_API_KEY` або адреси відправника безпечно повідомляє про пропуск;
 * помилку провайдера перетворює на виняток для обробки викликачем.
 */
export const sendNotificationEmail = async (payload: EmailPayload) => {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'anfrage@vs-web-studio.de';
  const defaultReplyTo = process.env.CONTACT_REPLY_TO;

  if (!apiKey || !fromEmail) {
    return { sent: false, skipped: true };
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: payload.replyTo || defaultReplyTo,
    subject: payload.subject,
    html: payload.html,
    text: payload.text,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return { sent: true, id: result.data?.id ?? null };
};

/**
 * Резервує контракт Telegram-сповіщення, але поки завжди повертає `skipped`.
 * Функція не виконує мережевих запитів навіть за наявності змінних середовища.
 */
export const sendTelegramPlaceholder = async (_message: string) => {
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    return { sent: false, skipped: true };
  }

  // TODO v1.1: activate Telegram notifications once the preferred destination and formatting are confirmed.
  return { sent: false, skipped: true };
};
