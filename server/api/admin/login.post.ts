// Limite simple contre les essais en rafale : 10 échecs par adresse IP toutes les 10 minutes (mémoire de l'instance)
const attempts = new Map<string, { n: number; t: number }>()
const WINDOW = 10 * 60 * 1000
const MAX = 10

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'local'
  const now = Date.now()
  const rec = attempts.get(ip)
  if (rec && now - rec.t < WINDOW && rec.n >= MAX) {
    throw createError({ statusCode: 429, statusMessage: 'Trop de tentatives, réessayez dans quelques minutes' })
  }

  const { email, password } = await readBody(event)
  const [user] = await query('select * from users where lower(email) = lower($1)', [String(email || '')])
  if (!user || !verifyPassword(String(password || ''), user.password_hash)) {
    const cur = rec && now - rec.t < WINDOW ? rec : { n: 0, t: now }
    attempts.set(ip, { n: cur.n + 1, t: cur.t })
    throw createError({ statusCode: 401, statusMessage: 'Identifiants incorrects' })
  }
  attempts.delete(ip)
  const token = await signSession({ id: user.id, email: user.email, role: user.role, name: user.name })
  setCookie(event, 'ts_session', token, { httpOnly: true, sameSite: 'lax', secure: !import.meta.dev, path: '/', maxAge: 60 * 60 * 24 * 7 })
  return { ok: true }
})
