// Deliberately small Markdown subset: raw HTML is always text, never executable.
// Escaping precedes formatting; only local anchors/paths and HTTPS/HTTP links survive.
export const escapeHtml = (text: string): string => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const generateSlug = (text: string): string => text.toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');

function inline(text: string): string {
  return escapeHtml(text)
    .replace(/\[([^\]\n]+)\]\(([^\s)]+)\)/g, (_, label: string, href: string) => {
      const safe = /^(?:https?:\/\/|\/(?!\/)|#)/i.test(href) && !/\\|&(?:quot|#39|lt|gt);/i.test(href);
      return safe ? `<a href="${href}">${label}</a>` : label;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
}

export function formatContent(content: string): string {
  const output: string[] = [];
  let paragraph: string[] = [];
  let list: 'ul' | 'ol' | undefined;
  const flush = () => {
    if (paragraph.length) output.push(`<p>${paragraph.join('\n')}</p>`);
    paragraph = [];
    if (list) output.push(`</${list}>`);
    list = undefined;
  };
  for (const line of content.split('\n')) {
    const heading = line.match(/^(#{2,4}) (.+)$/);
    const item = line.match(/^(-|\d+\.) (.*)$/);
    if (heading) {
      flush();
      const level = heading[1].length;
      output.push(`<h${level} id="${generateSlug(heading[2])}">${inline(heading[2])}</h${level}>`);
    } else if (item) {
      const kind = item[1] === '-' ? 'ul' : 'ol';
      if (list !== kind) { flush(); list = kind; output.push(`<${kind}>`); }
      output.push(`<li>${inline(item[2])}</li>`);
    } else if (!line.trim() || line === '---') {
      flush();
      if (line === '---') output.push('<hr>');
    } else {
      if (list) flush();
      paragraph.push(inline(line));
    }
  }
  flush();
  return output.join('');
}
