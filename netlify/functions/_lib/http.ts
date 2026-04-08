export type HandlerHeaders = Record<string, string>;

export interface HandlerEvent {
  httpMethod: string;
  body: string | null;
  headers?: Record<string, string | undefined>;
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

export const jsonResponse = (statusCode: number, body: unknown): HandlerResponse => ({
  statusCode,
  headers: jsonHeaders,
  body: JSON.stringify(body),
});

export const getHeader = (headers: HandlerEvent['headers'], name: string) => {
  if (!headers) return '';
  const entry = Object.entries(headers).find(([key]) => key.toLowerCase() === name.toLowerCase());
  return entry?.[1]?.trim() ?? '';
};

export const parseJsonBody = <T>(body: string | null): T | null => {
  if (!body) return null;
  return JSON.parse(body) as T;
};
