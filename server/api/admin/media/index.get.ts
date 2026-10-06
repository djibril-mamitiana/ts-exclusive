export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const rows = await query('select id, name, mime, size, created_at from media order by id desc')
  return rows.map(r => ({ ...r, url: `/api/media/${r.id}` }))
})
