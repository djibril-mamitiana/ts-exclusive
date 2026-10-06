export default defineEventHandler(async (event) => {
  const me = await requireAdmin(event)
  if (me.role !== 'admin') throw createError({ statusCode: 403, statusMessage: 'Réservé aux administrateurs' })
  const { email, name, password, role } = await readBody(event)
  if (!/^\S+@\S+\.\S+$/.test(String(email || ''))) throw createError({ statusCode: 400, statusMessage: 'Email invalide' })
  if (String(password || '').length < 8) throw createError({ statusCode: 400, statusMessage: 'Mot de passe : 8 caractères minimum' })
  const r = role === 'admin' ? 'admin' : 'editor'
  try {
    await query('insert into users (email, name, password_hash, role) values ($1,$2,$3,$4)', [String(email).toLowerCase(), String(name || ''), hashPassword(String(password)), r])
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Cet email existe déjà' })
  }
  return { ok: true }
})
