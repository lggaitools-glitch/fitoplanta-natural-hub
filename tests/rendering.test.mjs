import assert from 'node:assert/strict';
import { test } from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import { createServer } from 'vite';

test('every content route renders complete HTML and route-specific metadata before JavaScript', async () => {
  assert.ok(existsSync('src/entry-server.tsx'), 'Build-time React rendering entry is required');
  const server = await createServer({ envFile: false, server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    const { render, routes } = await server.ssrLoadModule('/src/entry-server.tsx');
    assert.equal(new Set(routes).size, routes.length);
    const oldRoutes = [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>https:\/\/fitoplantamed.com([^<]*)<\/loc>/g)].map(m => m[1] || '/');
    assert.deepEqual([...routes].sort(), oldRoutes.sort(), 'preserve existing published routes');
    for (const route of routes) {
      const { html, head } = await render(route);
      assert.match(html, /<h1\b/, route);
      assert.doesNotMatch(html, /Carregando\.\.\.|Página não encontrada/, route);
      assert.match(head, /<title>.+<\/title>/, route);
      assert.ok(head.includes(`href="https://fitoplantamed.com${route}"`), route);
      assert.match(head, /name="description" content="[^"]+"/, route);
      assert.doesNotMatch(head, /noindex|hreflang/);
    }
    for (const route of ['/absent', '/artigos/absent', '/produtos/absent', '/plantas-medicinais/absent', '/plantas-medicinais/valeriana/absent', '/fitoterapia/absent', '/suplementos-naturais/absent', '/guias/absent', '/bem-estar/absent']) {
      const { html, head } = await render(route);
      assert.match(html, /Página não encontrada/, route);
      assert.match(head, /noindex,follow/, route);
    }
    const normalized = await render('/sobre/');
    assert.match(normalized.head, /href="https:\/\/fitoplantamed.com\/sobre"/);
  } finally { await server.close(); }
});
