export default defineEventHandler(async (event) => {
  const site = String(useRuntimeConfig().public.siteUrl || '').replace(/\/$/, '')
  const services = await query<{ slug: string }>('select slug from services where active order by sort')
  const paths = ['/', '/services', '/flotte', '/corporate', '/hospitality', '/evenements', '/a-propos', '/tarifs', '/contact',
    ...services.map(s => `/services/${s.slug}`)]
  const url = (p: string) => {
    const fr = site + p
    const en = site + '/en' + (p === '/' ? '' : p)
    return `<url><loc>${fr}</loc><xhtml:link rel="alternate" hreflang="fr" href="${fr}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/></url>
<url><loc>${en}</loc><xhtml:link rel="alternate" hreflang="fr" href="${fr}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/></url>`
  }
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paths.map(url).join('\n')}
</urlset>`
})
