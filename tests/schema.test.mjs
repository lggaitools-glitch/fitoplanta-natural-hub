import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createServer } from 'vite';

test('JSON-LD is present in HTML, honest about authors, and never invents product ratings or credentials', async () => {
  const server = await createServer({ envFile: false, server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    const { render } = await server.ssrLoadModule('/src/entry-server.tsx');
    const { articles } = await server.ssrLoadModule('/src/data/articles.ts');
    const parse = html => [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    for (const article of articles) {
      const { html, head } = await render(`/artigos/${article.slug}`);
      const schema = parse(html).find(s => s['@type'] === 'Article');
      assert.ok(schema, 'Article schema must be server rendered');
      assert.equal(schema.author.name, article.author);
      if (article.author !== 'Marta Leni') assert.equal(schema.author.url, undefined);
      assert.equal(schema.dateModified, undefined, 'publication is not evidence of review');
      assert.match(head, /property="og:type" content="article"/);
      assert.ok(!html.includes('[/') && !html.includes('[saúde feminina natural]'));
    }
    const product = parse((await render('/produtos/valeriana-beneficios-melhores-marcas')).html);
    assert.ok(product.some(s => s['@type'] === 'WebPage'));
    assert.doesNotMatch(JSON.stringify(product), /aggregateRating|ratingCount|"brand"|"@type":"Product"/);
    const person = parse((await render('/sobre')).html).find(s => s['@type'] === 'Person');
    assert.ok(person);
    assert.doesNotMatch(JSON.stringify(person), /hasCredential|alumniOf|Mestrado|UFSCar/);
  } finally { await server.close(); }
});
