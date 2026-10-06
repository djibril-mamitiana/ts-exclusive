export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const name = getRouterParam(event, 'table') || ''
  const t = adminTables[name]
  if (!t) throw createError({ statusCode: 404 })
  return await query(`select * from ${name} order by ${t.order}`)
})
