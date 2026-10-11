export type HandlerHeaders = Record<string, string>;

export interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers?: Record<string, string | undefined>;
  queryStringParameters?: Record<string, string>;
  rawQuery?: string;
}

export interface HandlerResponse {
  statusCode: number;
  headers: HandlerHeaders;
  body: string;
}

export const jsonHeaders: HandlerHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
};

/** Серіалізує довільне тіло у JSON і повертає Netlify-відповідь зі спільними CORS/Content-Type заголовками. */
export const jsonResponse = (statusCode: number, body: unknown): HandlerResponse => ({
  statusCode,
  headers: jsonHeaders,
  body: JSON.stringify(body),
});

/** Знаходить HTTP-заголовок без урахування регістру, обрізає пробіли та повертає порожній рядок, якщо його немає. */
export const getHeader = (headers: HandlerEvent['headers'], name: string) => {
  if (!headers) return '';
  const entry = Object.entries(headers).find(([key]) => key.toLowerCase() === name.toLowerCase());
  return entry?.[1]?.trim() ?? '';
};

/**
 * Розбирає непорожнє тіло як JSON і типізує результат для викликувача.
 * Для відсутнього тіла повертає `null`, а синтаксичну помилку JSON не перехоплює.
 */
export const parseJsonBody = <T>(body: string | null): T | null => {
  if (!body) return null;
  return JSON.parse(body) as T;
};
