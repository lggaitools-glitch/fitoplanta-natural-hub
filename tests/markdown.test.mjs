import assert from 'node:assert/strict';
import { test } from 'node:test';
import { existsSync } from 'node:fs';
import { createServer } from 'vite';

test('article Markdown renders internal/external links and rejects executable HTML/URLs on server and client', async () => {
  assert.ok(existsSync('src/lib/markdown.ts'), 'An SSR-safe sanitized Markdown renderer is required');
  const server = await createServer({ envFile: false, server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    const { formatContent } = await server.ssrLoadModule('/src/lib/markdown.ts');
    const html = formatContent('## Saúde\n\nLeia [saúde feminina natural](/bem-estar/saude-feminina-natural) e [estudo](https://example.org/study).\n\n- **Item**\n- Outro');
    assert.match(html, /<a href="\/bem-estar\/saude-feminina-natural">saúde feminina natural<\/a>/);
    assert.match(html, /href="https:\/\/example.org\/study"/);
    assert.match(html, /<h2 id="saude">Saúde<\/h2>/);
    assert.match(html, /<ul><li><strong>Item<\/strong><\/li><li>Outro<\/li><\/ul>/);
    for (const input of ['[x](javascript:alert(1))', '[x](data:text/html;base64,aaa)', '[x](//evil.example)', '[x](https://ok.test/" onmouseover="alert)', '<img src=x onerror=alert(1)>', '<script>alert(1)</script>']) {
      const result = formatContent(input);
      assert.doesNotMatch(result, /<script|<img|href="(?:javascript:|data:|\/\/)|" onmouseover=/);
    }
  } finally { await server.close(); }
});
