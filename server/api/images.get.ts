// Images des pages modifiées depuis l'admin : { "home.hero": "/api/media/12.jpg" }. Absent = image par défaut du code.
export default defineEventHandler(async () => {
  const rows = await query<{ key: string; url: string }>('select key, url from site_images')
  return Object.fromEntries(rows.map(r => [r.key, r.url]))
})
