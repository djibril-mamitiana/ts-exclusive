export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const name = getRouterParam(event, 'table') || ''
  const t = adminTables[name]
  if (!t) throw createError({ statusCode: 404 })
  const body = await readBody(event)
  const cols = t.cols.filter(c => c in body)
  if (!cols.length) return { ok: true }
  const vals = cols.map(c => (t.json?.includes(c) ? JSON.stringify(body[c]) : body[c]))
  await query(`update ${name} set ${cols.map((c, i) => `${c} = $${i + 1}`).join(', ')} where id = $${cols.length + 1}`,
    [...vals, Number(getRouterParam(event, 'id'))])
  return { ok: true }
})
