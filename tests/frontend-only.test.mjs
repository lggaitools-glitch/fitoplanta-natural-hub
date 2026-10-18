import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';

// Deliberately override local .env credentials: these pages must work without a backend.
process.env.VITE_SUPABASE_URL = '';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY = '';
process.env.VITE_SUPABASE_PROJECT_ID = '';

test('contact works without Supabase and offers honest email/WhatsApp alternatives', async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  try {
    const { default: Contact } = await server.ssrLoadModule('/src/pages/Contact.tsx');
    const html = renderToStaticMarkup(React.createElement(StaticRouter, { location: '/contato' }, React.createElement(Contact)));
    assert.match(html, /formulário online está temporariamente indisponível/i);
    assert.match(html, /href="mailto:fito\.planta\.med@gmail\.com"/);
    assert.match(html, /https:\/\/wa\.me\/5511992014584\?text=/);
    assert.doesNotMatch(html, /<form\b|Solicitar via Formulário|Mensagem enviada com sucesso/);
    const { default: About } = await server.ssrLoadModule('/src/pages/About.tsx');
    const aboutHtml = renderToStaticMarkup(React.createElement(StaticRouter, { location: '/sobre' }, React.createElement(About)));
    for (const page of [html, aboutHtml]) {
      assert.match(page, /href="mailto:fito\.planta\.med@gmail\.com\?subject=Agendamento/);
      assert.match(page, /Solicitar por E-mail/);
      assert.match(page, /https:\/\/wa\.me\/5511992014584\?text=/);
      assert.doesNotMatch(page, /Solicitar via Formulário/);
    }
    const modules = [...server.moduleGraph.idToModuleMap.keys()];
    assert.ok(!modules.some(id => /supabase/i.test(id)), 'Contact must not import the Supabase client');
  } finally {
    await server.close();
  }
});
