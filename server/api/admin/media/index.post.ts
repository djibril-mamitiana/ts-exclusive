const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']

export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const parts = await readMultipartFormData(event)
  const file = parts?.find(p => p.name === 'file' && p.filename)
  if (!file) throw createError({ statusCode: 400, statusMessage: 'Aucun fichier' })
  const mime = file.type || ''
  if (!allowed.includes(mime)) throw createError({ statusCode: 400, statusMessage: 'Format non accepté (JPG, PNG, WEBP, GIF, SVG)' })
  if (file.data.length > 5 * 1024 * 1024) throw createError({ statusCode: 400, statusMessage: 'Fichier trop lourd (5 Mo maximum)' })
  const [row] = await query('insert into media (name, mime, data, size) values ($1,$2,$3,$4) returning id',
    [file.filename, mime, file.data, file.data.length])
  return { id: row.id, url: `/api/media/${row.id}` }
})
