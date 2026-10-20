import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createServer } from 'vite';

test('portal does not claim manufacturing/shipping guarantees; generic affiliate CTAs disclose destination', async () => {
  const server = await createServer({ envFile: false, server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    const { render, routes } = await server.ssrLoadModule('/src/entry-server.tsx');
    const home = (await render('/')).html;
    assert.doesNotMatch(home, /Enviamos para todo|Segurança Garantida|Fórmulas desenvolvidas|concentração garantida|Mais Lidos|analisa dezenas/i);
    for (const route of routes) {
      const { html } = await render(route);
      for (const link of html.matchAll(/<a\b([^>]*href="https:\/\/lmdee.link\/[^>]+)>([\s\S]*?)<\/a>/g)) {
        assert.match(link[1], /rel="[^"]*sponsored/, route);
        assert.match(link[2], /Visitar loja parceira/, route);
        assert.doesNotMatch(link[2], /Comprar|Ver Preço/, route);
      }
      assert.doesNotMatch(html, /limite de US\$50 para isenção/);
    }
    assert.match((await render('/guias/melhor-valeriana')).html, /não aponta para um produto específico/);
  } finally { await server.close(); }
});
