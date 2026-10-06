import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { createServer } from 'vite';
import { getPageMetadata } from './src/seo.js';

const routes = ['/', '/services', '/contact'];
const dist = resolve('dist');
const templatePath = resolve(dist, 'index.html');
const template = await readFile(templatePath, 'utf8');

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function updateAttribute(html, selector, attribute, value) {
  const pattern = new RegExp(`<${selector}[^>]*>`);
  return html.replace(pattern, (tag) => tag.replace(new RegExp(`${attribute}="[^"]*"`), `${attribute}="${escapeHtml(value)}"`));
}

const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
});

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

  for (const route of routes) {
    const page = getPageMetadata(route);
    const canonicalUrl = `https://green-core-kcnq.vercel.app${route}`;
    let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);

    html = updateAttribute(html, 'meta name="description"', 'content', page.description);
    html = updateAttribute(html, 'meta property="og:title"', 'content', page.title);
    html = updateAttribute(html, 'meta property="og:description"', 'content', page.description);
    html = updateAttribute(html, 'meta property="og:url"', 'content', canonicalUrl);
    html = updateAttribute(html, 'link rel="canonical"', 'href', canonicalUrl);

    const markup = render(route);
    if (!html.includes('<div id="root"></div>')) throw new Error('Could not find the app root in dist/index.html');
    html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

    const outputPath = route === '/' ? templatePath : resolve(dist, route.slice(1), 'index.html');
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
    console.log(`Prerendered ${route} -> ${outputPath}`);
  }
} finally {
  await vite.close();
}
