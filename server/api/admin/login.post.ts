export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  const [user] = await query('select * from users where lower(email) = lower($1)', [String(email || '')])
  if (!user || !verifyPassword(String(password || ''), user.password_hash)) {
    throw createError({ statusCode: 401, statusMessage: 'Identifiants incorrects' })
  }
  const token = await signSession({ id: user.id, email: user.email, role: user.role, name: user.name })
  setCookie(event, 'ts_session', token, { httpOnly: true, sameSite: 'lax', secure: !import.meta.dev, path: '/', maxAge: 60 * 60 * 24 * 7 })
  return { ok: true }
})
