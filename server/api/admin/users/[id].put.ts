// Modification d'un compte : un admin gère tout le monde, chacun peut changer son propre mot de passe
export default defineEventHandler(async (event) => {
  const me = await requireAdmin(event)
  const id = Number(getRouterParam(event, 'id'))
  if (me.role !== 'admin' && me.id !== id) throw createError({ statusCode: 403, statusMessage: 'Accès refusé' })
  const { name, role, password } = await readBody(event)
  if (password) {
    if (String(password).length < 8) throw createError({ statusCode: 400, statusMessage: 'Mot de passe : 8 caractères minimum' })
    await query('update users set password_hash = $1 where id = $2', [hashPassword(String(password)), id])
  }
  if (me.role === 'admin') {
    if (name != null) await query('update users set name = $1 where id = $2', [String(name), id])
    if (role && me.id !== id) await query('update users set role = $1 where id = $2', [role === 'admin' ? 'admin' : 'editor', id])
  }
  return { ok: true }
})
