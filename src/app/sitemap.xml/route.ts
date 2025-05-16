import { type NextRequest } from 'next/server';
import api from '@/lib/api';
import { IUser } from '@/interfaces/IUser';

async function getUsers(): Promise<IUser[]> {
  try {
    const response = await api.get('/users');

    return response.data ?? [];
  } catch {
    return [];
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: NextRequest) => {
  const baseUrl = 'https://skipit.ro';
  const users = await getUsers();

  const urls = [
    '',
    ...users.map((user) => `user/${user.id}/resume`),
    ...users.map((user) => `username/${user.username}/resume`),
    // Add more routes here
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => {
      return `<url><loc>${baseUrl}/${url}</loc></url>`;
    })
    .join('\n')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
