// Sert une image stockée en base (téléversée depuis l'admin)
export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const [m] = await query('select mime, data from media where id = $1', [id])
  if (!m) throw createError({ statusCode: 404 })
  setHeader(event, 'Content-Type', m.mime)
  setHeader(event, 'Cache-Control', 'public, max-age=31536000, immutable')
  return m.data
})
