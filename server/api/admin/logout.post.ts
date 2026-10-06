export default defineEventHandler((event) => {
  deleteCookie(event, 'ts_session', { path: '/' })
  return { ok: true }
})
