export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  await query('delete from media where id = $1', [Number(getRouterParam(event, 'id'))])
  return { ok: true }
})
