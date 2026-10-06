export default defineEventHandler(async (event) => {
  const me = await requireAdmin(event)
  if (me.role !== 'admin') throw createError({ statusCode: 403, statusMessage: 'Réservé aux administrateurs' })
  return await query('select id, email, name, role, created_at from users order by id')
})
