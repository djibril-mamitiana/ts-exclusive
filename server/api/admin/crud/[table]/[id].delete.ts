export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const name = getRouterParam(event, 'table') || ''
  if (!adminTables[name]) throw createError({ statusCode: 404 })
  await query(`delete from ${name} where id = $1`, [Number(getRouterParam(event, 'id'))])
  return { ok: true }
})
