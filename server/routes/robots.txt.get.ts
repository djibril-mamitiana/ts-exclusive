export default defineEventHandler((event) => {
  const site = String(useRuntimeConfig().public.siteUrl || '').replace(/\/$/, '')
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/admin\n\nSitemap: ${site}/sitemap.xml\n`
})
