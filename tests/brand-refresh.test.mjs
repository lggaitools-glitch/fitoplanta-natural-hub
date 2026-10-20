import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';

test('header and footer use readable, original-art botanical lockups', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    for (const name of ['Header', 'Footer']) {
      const module = await server.ssrLoadModule(`/src/components/layout/${name}.tsx`);
      const html = renderToStaticMarkup(React.createElement(StaticRouter, {}, React.createElement(module[name])));
      assert.match(html, /brand-wordmark\.webp/);
      assert.match(html, /brand-emblem\.webp/);
      assert.doesNotMatch(html, /assets\/logo\.png/);
      assert.match(html, /FitoPlantaMed/);
    }
  } finally { await server.close(); }
});

test('brand metadata resolves to real optimized assets', () => {
  for (const asset of ['brand/brand-logo.webp', 'brand/brand-emblem.webp', 'brand/brand-wordmark.webp', 'og-image.jpg', 'apple-touch-icon.png', 'favicon.png', 'favicon.ico']) {
    assert.ok(existsSync(new URL(`../public/${asset}`, import.meta.url)), asset);
  }
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /apple-touch-icon/);
  assert.match(html, /https:\/\/fitoplantamed.com\/og-image.jpg/);
  for (const schema of ['OrganizationSchema', 'ArticleSchema']) {
    assert.match(readFileSync(new URL(`../src/components/seo/${schema}.tsx`, import.meta.url), 'utf8'), /brand\/brand-logo.webp/);
  }
});

test('Marta uses her supplied portrait with face-safe framing and structured image', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    for (const path of ['/src/pages/About.tsx', '/src/pages/Contact.tsx']) {
      const { default: Page } = await server.ssrLoadModule(path);
      const html = renderToStaticMarkup(React.createElement(StaticRouter, {}, React.createElement(Page)));
      assert.match(html, /marta-leni.webp/);
      assert.match(html, /alt="Marta Leni"/);
      assert.match(html, /portrait/);
    }
    assert.match(readFileSync(new URL('../src/components/seo/PersonSchema.tsx', import.meta.url), 'utf8'), /brand\/marta-leni.webp/);
  } finally { await server.close(); }
});

test('botanical theme uses cream/forest tokens, accessible motion and a visible original-art hero', async () => {
  const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8');
  assert.match(css, /--background: 45 43% 97%/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
  const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    const { Hero } = await server.ssrLoadModule('/src/components/home/Hero.tsx');
    const html = renderToStaticMarkup(React.createElement(StaticRouter, {}, React.createElement(Hero)));
    assert.match(html, /brand-emblem.webp/);
    assert.doesNotMatch(html, /assets\/logo.png|hidden lg:flex/);
    for (const link of ['/artigos', '/produtos', '/fitoterapia', '/plantas-medicinais', '/guias']) assert.ok(html.includes(`href="${link}"`));
  } finally { await server.close(); }
});

test('navigation exposes accessible expanded states and separate submenu controls', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
  try {
    const { Header } = await server.ssrLoadModule('/src/components/layout/Header.tsx');
    const html = renderToStaticMarkup(React.createElement(StaticRouter, {}, React.createElement(Header)));
    assert.match(html, /aria-controls="site-navigation"/);
    assert.match(html, /aria-expanded="false"/);
    assert.match(html, /aria-label="Submenu Fitoterapia"/);
    assert.match(html, /aria-current="page"/);
  } finally { await server.close(); }
});
