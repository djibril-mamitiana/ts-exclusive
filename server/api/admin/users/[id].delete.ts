export default defineEventHandler(async (event) => {
  const me = await requireAdmin(event)
  if (me.role !== 'admin') throw createError({ statusCode: 403, statusMessage: 'Réservé aux administrateurs' })
  const id = Number(getRouterParam(event, 'id'))
  if (id === me.id) throw createError({ statusCode: 400, statusMessage: 'Vous ne pouvez pas supprimer votre propre compte' })
  await query('delete from users where id = $1', [id])
  return { ok: true }
})
