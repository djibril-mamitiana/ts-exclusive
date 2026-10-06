export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const rows = await query('select * from quotes order by created_at desc')
  const cols = ['id', 'created_at', 'status', 'name', 'company', 'email', 'phone', 'whatsapp', 'trip_date', 'trip_time', 'pickup', 'dropoff', 'passengers', 'bags', 'services', 'message', 'notes']
  const esc = (v: any) => {
    const s = v instanceof Date ? v.toISOString() : typeof v === 'object' && v !== null ? JSON.stringify(v) : String(v ?? '')
    return '"' + s.replace(/"/g, '""') + '"'
  }
  const csv = [cols.join(','), ...rows.map(r => cols.map(c => esc(r[c])).join(','))].join('\n')
  setHeader(event, 'Content-Type', 'text/csv; charset=utf-8')
  setHeader(event, 'Content-Disposition', 'attachment; filename="demandes-devis.csv"')
  return '﻿' + csv
})
