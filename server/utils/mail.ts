import nodemailer from 'nodemailer'

// Envoi d'emails via SMTP. Si SMTP_HOST n'est pas configuré, rien n'est envoyé (le devis est quand même enregistré).
export function mailerReady() {
  const c = useRuntimeConfig()
  return !!(c.smtpHost && c.smtpUser && c.smtpPass)
}

export async function sendMail(opts: { to: string; subject: string; html: string; replyTo?: string }) {
  if (!mailerReady()) return false
  const c = useRuntimeConfig()
  const transport = nodemailer.createTransport({
    host: c.smtpHost, port: Number(c.smtpPort) || 587, secure: Number(c.smtpPort) === 465,
    auth: { user: c.smtpUser, pass: c.smtpPass }
  })
  await transport.sendMail({ from: c.mailFrom || `TS EXCLUSIVE <${c.smtpUser}>`, ...opts })
  return true
}

export const esc = (s: any) =>
  String(s ?? '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch] as string))

export function layout(title: string, body: string) {
  return `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#33465c">
  <div style="background:#0c2646;color:#fff;padding:20px 24px;font-size:20px;font-weight:bold">TS EXCLUSIVE</div>
  <div style="padding:24px;border:1px solid #dbe3ec;border-top:0"><h2 style="color:#0e2340;margin-top:0">${title}</h2>${body}</div></div>`
}
