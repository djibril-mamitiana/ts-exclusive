export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const { key, fr, en } = await readBody(event)
  if (!/^[a-z]+(\.[A-Za-z0-9]+)+$/.test(String(key || ''))) throw createError({ statusCode: 400, statusMessage: 'Clé invalide' })
  const f = String(fr ?? '').trim().slice(0, 600)
  const e = String(en ?? '').trim().slice(0, 600)
  if (!f && !e) {
    await query('delete from texts where key = $1', [key]) // retour au texte par défaut
  } else {
    await query('insert into texts (key, fr, en) values ($1,$2,$3) on conflict (key) do update set fr = $2, en = $3', [key, f, e])
  }
  return { ok: true }
})
