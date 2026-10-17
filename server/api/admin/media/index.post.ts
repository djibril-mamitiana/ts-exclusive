// Les photos sont stockées en base. Vercel limite le corps d'une requête à 4,5 Mo : l'admin réduit les grandes photos avant l'envoi.
const allowed: Record<string, string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/svg+xml': 'svg' }
const MAX = 4 * 1024 * 1024

export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const parts = await readMultipartFormData(event)
  const file = parts?.find(p => p.name === 'file' && p.filename)
  if (!file) throw createError({ statusCode: 400, statusMessage: 'Aucun fichier' })
  const mime = file.type || ''
  const ext = allowed[mime]
  if (!ext) throw createError({ statusCode: 400, statusMessage: 'Format non accepté (JPG, PNG, WEBP, GIF, SVG)' })
  if (file.data.length > MAX) throw createError({ statusCode: 400, statusMessage: 'Fichier trop lourd (4 Mo maximum)' })
  const [row] = await query('insert into media (name, mime, data, size) values ($1,$2,$3,$4) returning id',
    [file.filename, mime, file.data, file.data.length])
  // l'extension dans l'adresse permet au site de reconnaître un détourage (PNG / WEBP transparent)
  return { id: row.id, url: `/api/media/${row.id}.${ext}` }
})
