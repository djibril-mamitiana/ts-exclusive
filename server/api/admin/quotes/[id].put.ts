export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const id = Number(getRouterParam(event, 'id'))
  const { status, notes } = await readBody(event)
  if (status && !quoteStatuses.includes(status)) throw createError({ statusCode: 400, statusMessage: 'Statut invalide' })
  await query('update quotes set status = coalesce($1, status), notes = coalesce($2, notes) where id = $3', [status ?? null, notes ?? null, id])
  return { ok: true }
})
