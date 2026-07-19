import { get } from '@vercel/blob';

export const runtime = 'edge';

export default async function cvHandler() {
  const result = await get('cv.pdf', { access: 'public' });
  if (!result || result.statusCode !== 200) {
    return new Response('CV not found', { status: 404 });
  }
  return new Response(result.stream, {
    headers: {
      'Content-Type': result.blob.contentType ?? 'application/pdf',
      'Content-Disposition': 'inline; filename="cv.pdf"',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
