import { createServer } from 'vite';
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { dirname } from 'node:path';

const template = await readFile('dist/index.html', 'utf8');
const server = await createServer({ envFile: false, server: { middlewareMode: true, hmr: false }, appType: 'custom' });
try {
  const { render, routes } = await server.ssrLoadModule('/src/entry-server.tsx');
  if (new Set(routes).size !== routes.length) throw new Error('Duplicate route');
  for (const route of [...routes, '/404']) {
    if (!/^\/(?:[a-z0-9-]+\/?)*$/.test(route)) throw new Error(`Invalid route ${route}`);
    const { html, head } = await render(route);
    if (!html.includes('<h1') || html.includes('Carregando...')) throw new Error(`Incomplete render: ${route}`);
    const output = template.replace('<!--page-head-->', () => head).replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
    // A missing local published image fails the build instead of shipping a broken OG preview.
    for (const match of output.matchAll(/(?:src|content)="((?:https:\/\/fitoplantamed.com)?\/(?:articles\/|products\/|brand\/|og-image)[^"<>]+)"/g)) {
      const path = match[1].replace('https://fitoplantamed.com', '');
      await access(`dist${path}`);
    }
    const file = `dist${route === '/' ? '/index' : route}.html`;
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, output);
  }
  // Deliberately omit lastmod: publication dates and deploy times are not review dates.
  await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(route => `  <url><loc>https://fitoplantamed.com${route}</loc></url>`).join('\n') + '\n</urlset>\n');
  await writeFile('dist/routes.json', JSON.stringify(routes, null, 2) + '\n');
  console.log(`Prerendered ${routes.length} valid routes + 404; generated sitemap without unverified lastmod.`);
} finally { await server.close(); }
