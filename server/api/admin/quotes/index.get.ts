export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const { status } = getQuery(event)
  if (status) return await query('select * from quotes where status = $1 order by created_at desc', [String(status)])
  return await query('select * from quotes order by created_at desc')
})
