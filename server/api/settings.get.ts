export default defineEventHandler(async () => {
  const rows = await query<{ key: string; value: string }>('select key, value from settings')
  return Object.fromEntries(rows.map(r => [r.key, r.value]))
})
