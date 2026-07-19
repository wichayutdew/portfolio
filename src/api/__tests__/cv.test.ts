import { describe, test, expect, mock, beforeEach, afterEach } from 'bun:test';

// Mock @vercel/blob before importing the handler
const mockGet = mock(() => Promise.resolve(null));
mock.module('@vercel/blob', () => ({
  get: mockGet,
}));

import cvHandler from '../cv';

beforeEach(() => {
  mockGet.mockClear();
});

afterEach(() => {
  mockGet.mockReset();
});

describe('CV API handler', () => {
  test('returns 404 when blob is not found (null)', async () => {
    mockGet.mockResolvedValueOnce(null);

    const res = await cvHandler();
    expect(res).toBeInstanceOf(Response);
    expect(res.status).toBe(404);
    expect(await res.text()).toBe('CV not found');
    expect(mockGet).toHaveBeenCalledWith('cv.pdf', { access: 'public' });
  });

  test('returns 404 when status code is not 200', async () => {
    mockGet.mockResolvedValueOnce({ statusCode: 404 });

    const res = await cvHandler();
    expect(res.status).toBe(404);
    expect(await res.text()).toBe('CV not found');
  });

  test('streams PDF content with correct headers on success', async () => {
    const stream = new ReadableStream();
    mockGet.mockResolvedValueOnce({
      statusCode: 200,
      stream,
      blob: {
        contentType: 'application/pdf',
        url: 'https://example.com/cv.pdf',
      },
    });

    const res = await cvHandler();

    expect(res.status).toBe(200);
    expect(res.body).toBe(stream);
    expect(res.headers.get('Content-Type')).toBe('application/pdf');
    expect(res.headers.get('Content-Disposition')).toBe(
      'inline; filename="cv.pdf"',
    );
    expect(res.headers.get('Cache-Control')).toBe('public, max-age=3600');
  });

  test('falls back to application/pdf when contentType is null', async () => {
    const stream = new ReadableStream();
    mockGet.mockResolvedValueOnce({
      statusCode: 200,
      stream,
      blob: {
        contentType: null,
        url: 'https://example.com/cv.pdf',
      },
    });

    const res = await cvHandler();

    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toBe('application/pdf');
  });

  test('always calls get with cv.pdf and public access', async () => {
    mockGet.mockResolvedValueOnce({ statusCode: 404 });

    await cvHandler();

    expect(mockGet).toHaveBeenCalledTimes(1);
    expect(mockGet).toHaveBeenCalledWith('cv.pdf', { access: 'public' });
  });
});
