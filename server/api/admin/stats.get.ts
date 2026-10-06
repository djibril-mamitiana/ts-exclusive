export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const byStatus = await query('select status, count(*)::int as n from quotes group by status')
  const [t] = await query(`select count(*)::int as total,
    count(*) filter (where created_at > now() - interval '7 days')::int as week from quotes`)
  const [v] = await query('select count(*)::int as n from vehicles where active')
  const recent = await query('select id, name, company, status, created_at, services from quotes order by created_at desc limit 6')
  return { byStatus, total: t.total, week: t.week, vehicles: v.n, recent }
})
