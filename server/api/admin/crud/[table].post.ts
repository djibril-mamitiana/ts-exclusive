export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const name = getRouterParam(event, 'table') || ''
  const t = adminTables[name]
  if (!t) throw createError({ statusCode: 404 })
  const body = await readBody(event)
  const cols = t.cols.filter(c => c in body)
  const vals = cols.map(c => (t.json?.includes(c) ? JSON.stringify(body[c]) : body[c]))
  const [row] = await query(
    `insert into ${name} (${cols.join(',')}) values (${cols.map((_, i) => '$' + (i + 1)).join(',')}) returning *`, vals)
  return row
})
