export const GET = async () => {
  return new Response(
    `User-agent: *
    Allow: /
    Sitemap: https://skipit.ro/sitemap.xml
    `,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
};
