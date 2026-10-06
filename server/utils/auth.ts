import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto'
import { SignJWT, jwtVerify } from 'jose'
import type { H3Event } from 'h3'

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const test = scryptSync(password, salt, 64)
  const real = Buffer.from(hash, 'hex')
  return real.length === test.length && timingSafeEqual(real, test)
}

const key = () => new TextEncoder().encode(useRuntimeConfig().authSecret)

export async function signSession(user: { id: number; email: string; role: string; name: string }) {
  return await new SignJWT({ ...user })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(key())
}

export async function getAdminSession(event: H3Event) {
  const token = getCookie(event, 'ts_session')
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, key())
    return payload as unknown as { id: number; email: string; role: string; name: string }
  } catch {
    return null
  }
}

export async function requireAdmin(event: H3Event) {
  const session = await getAdminSession(event)
  if (!session) throw createError({ statusCode: 401, statusMessage: 'Non autorisé' })
  return session
}
