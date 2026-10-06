export default defineEventHandler(async (event) => {
  await requireAdmin(event)
  const body = await readBody(event)
  const allowed = ['phone', 'whatsapp', 'email', 'address', 'linkedin', 'instagram', 'facebook']
  for (const k of allowed) {
    if (k in body) {
      await query('insert into settings (key, value) values ($1,$2) on conflict (key) do update set value = $2', [k, String(body[k] ?? '')])
    }
  }
  return { ok: true }
})
