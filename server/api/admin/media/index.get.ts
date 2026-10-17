const ext: Record<string, string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/svg+xml': 'svg' }

// Liste des images téléversées, avec le nombre d'emplacements du site qui les utilisent
export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const rows = await query(`
    select m.id, m.name, m.mime, m.size, m.created_at,
      (select count(*)::int from site_images s where s.url ~ ('^/api/media/' || m.id || '([^0-9]|$)'))
      + (select count(*)::int from services s where s.image ~ ('^/api/media/' || m.id || '([^0-9]|$)'))
      + (select count(*)::int from vehicles v where v.image ~ ('^/api/media/' || m.id || '([^0-9]|$)'))
      + (select count(*)::int from destinations d where d.image ~ ('^/api/media/' || m.id || '([^0-9]|$)')) as uses
    from media m order by m.id desc`)
  return rows.map(r => ({ ...r, url: `/api/media/${r.id}.${ext[r.mime] || 'jpg'}` }))
})
