// Supprime une image. Les emplacements qui ont une image par défaut (pages, services) y reviennent ;
// une image encore utilisée par un véhicule ou une destination doit d'abord être remplacée.
export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const id = Number(getRouterParam(event, 'id'))
  const re = `^/api/media/${id}([^0-9]|$)`
  const [fixed] = await query(`select (select count(*)::int from vehicles where image ~ $1) as v, (select count(*)::int from destinations where image ~ $1) as d`, [re])
  if (fixed.v || fixed.d) {
    throw createError({ statusCode: 409, statusMessage: 'Cette image est encore utilisée par un véhicule ou une destination : remplacez-la d\'abord.' })
  }
  await query('delete from site_images where url ~ $1', [re])
  await query("update services set image = '' where image ~ $1", [re])
  await query('delete from media where id = $1', [id])
  return { ok: true }
})
