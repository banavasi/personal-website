export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  // @ts-ignore - env is available in Cloudflare Pages
  const env = locals?.runtime?.env || {};
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const subject = data.get('subject');
  const message = data.get('message');
  const url = data.get('url');

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }

  // Get environment variables
  // In Cloudflare Pages, env vars are passed via the `env` object in the context
  // But locally or in other adapters, they might be in import.meta.env
  const NOCODB_URL = env?.NOCODB_URL || import.meta.env.NOCODB_URL;
  const NOCODB_API_TOKEN = env?.NOCODB_API_TOKEN || import.meta.env.NOCODB_API_TOKEN;
  const NOCODB_TABLE_ID = env?.NOCODB_TABLE_ID || import.meta.env.NOCODB_TABLE_ID;

  if (!NOCODB_URL || !NOCODB_API_TOKEN || !NOCODB_TABLE_ID) {
    console.error('Missing NocoDB configuration');
    return new Response(
      JSON.stringify({
        message: 'Server configuration error',
      }),
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `${NOCODB_URL}/api/v2/tables/${NOCODB_TABLE_ID}/records`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': NOCODB_API_TOKEN,
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Subject: subject,
          Message: message,
          URL: url,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('NocoDB Error:', errorData);
      throw new Error('Failed to submit to NocoDB');
    }

    return new Response(
      JSON.stringify({
        message: 'Success',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Submission Error:', error);
    return new Response(
      JSON.stringify({
        message: 'Failed to send message',
      }),
      { status: 500 }
    );
  }
};
