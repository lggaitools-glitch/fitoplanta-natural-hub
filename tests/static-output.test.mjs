import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, existsSync } from 'node:fs';

test('build emits clean static routes, sitemap and a real non-SPA 404 contract', () => {
  const config = JSON.parse(readFileSync('vercel.json', 'utf8'));
  assert.equal(config.cleanUrls, true, 'Vercel must serve built route HTML');
  assert.equal(config.trailingSlash, false);
  assert.ok(!config.rewrites?.some(r => r.source === '/(.*)'), 'no catchall 200 rewrite');
  assert.ok(existsSync('dist/routes.json'), 'build-generated inventory');
  const routes = JSON.parse(readFileSync('dist/routes.json', 'utf8'));
  const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  assert.deepEqual(locs.sort(), routes.map(r => `https://fitoplantamed.com${r}`).sort());
  assert.doesNotMatch(sitemap, /lastmod|changefreq|priority/, 'no unverified modification dates');
  for (const route of routes) {
    const html = readFileSync(`dist${route === '/' ? '/index' : route}.html`, 'utf8');
    assert.match(html, /<h1\b/);
    assert.doesNotMatch(html, /Carregando\.\.\./);
    assert.ok(html.includes(`href="https://fitoplantamed.com${route}"`));
    assert.equal((html.match(/<title>/g) || []).length, 1);
    for (const match of html.matchAll(/(?:src|content)="(\/(?:articles|products|brand)\/[^"<>]+|\/og-image.jpg)"/g)) {
      assert.ok(existsSync(`dist${match[1]}`), `${route}: ${match[1]}`);
    }
  }
  assert.match(readFileSync('dist/404.html', 'utf8'), /noindex,follow/);
});
