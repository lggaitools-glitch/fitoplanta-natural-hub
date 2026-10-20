/// <reference types="node" />
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { PassThrough } from 'node:stream';
import App from './App';
import { HeadContext, metadataTags, type PageMetadata } from './lib/seo';
export { routes } from './routes';

export function render(url: string): Promise<{ html: string; head: string }> {
  const context: { metadata?: PageMetadata } = {};
  return new Promise((resolve, reject) => {
    const body = new PassThrough();
    const chunks: Buffer[] = [];
    body.on('data', chunk => chunks.push(Buffer.from(chunk)));
    body.on('error', reject);
    body.on('end', () => {
      if (!context.metadata) return reject(new Error(`Missing metadata: ${url}`));
      resolve({ html: Buffer.concat(chunks).toString(), head: metadataTags(context.metadata) });
    });
    const stream = renderToPipeableStream(
      <HeadContext.Provider value={context}><StaticRouter location={url}><App /></StaticRouter></HeadContext.Provider>,
      { onAllReady() { stream.pipe(body); }, onError: reject, onShellError: reject },
    );
  });
}
