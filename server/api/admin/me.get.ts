export default defineEventHandler(async (event) => {
  const s = await getAdminSession(event)
  return s ? { id: s.id, email: s.email, name: s.name, role: s.role } : null
})
