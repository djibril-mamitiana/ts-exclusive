// Définit (ou rétablit) l'image d'un emplacement du site : { key: 'home.hero', url: '/api/media/12.jpg' }. url vide = image par défaut.
export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const { key, url } = await readBody(event)
  if (!/^[a-z]+(\.[A-Za-z0-9]+)+$/.test(String(key || ''))) throw createError({ statusCode: 400, statusMessage: 'Emplacement invalide' })
  const u = String(url ?? '').trim()
  if (!u) {
    await query('delete from site_images where key = $1', [key]) // retour à l'image par défaut
  } else {
    if (u.length > 600 || !/^(\/[A-Za-z0-9_./%-]|https:\/\/)/.test(u)) throw createError({ statusCode: 400, statusMessage: "Adresse d'image invalide (chemin du site ou lien https)" })
    await query('insert into site_images (key, url) values ($1,$2) on conflict (key) do update set url = $2, updated_at = now()', [key, u])
  }
  return { ok: true }
})
