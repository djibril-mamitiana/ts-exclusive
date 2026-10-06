export default defineEventHandler(async (event) => {
  const b = await readBody(event)
  const clean = (v: any, max = 500) => String(v ?? '').trim().slice(0, max)
  if (b.website) return { ok: true } // champ piège anti-spam
  const name = clean(b.name, 120)
  const email = clean(b.email, 160)
  const phone = clean(b.phone, 40)
  const lang = b.lang === 'en' ? 'en' : 'fr'
  if (!name || (!email && !phone)) {
    throw createError({ statusCode: 400, statusMessage: lang === 'en' ? 'Name and email or phone required' : 'Nom et email ou téléphone requis' })
  }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: lang === 'en' ? 'Invalid email' : 'Email invalide' })
  }
  const num = (v: any) => (v !== '' && v != null && Number.isFinite(Number(v)) ? Number(v) : null)
  const services = Array.isArray(b.services) ? b.services.map((s: any) => clean(s, 80)).slice(0, 10) : []
  const q = {
    name, company: clean(b.company, 120), email, phone, whatsapp: clean(b.whatsapp, 40),
    trip_date: clean(b.trip_date, 20), trip_time: clean(b.trip_time, 10), pickup: clean(b.pickup, 160), dropoff: clean(b.dropoff, 160),
    passengers: num(b.passengers), bags: num(b.bags), message: clean(b.message, 2000)
  }
  await query(
    `insert into quotes (name, company, email, phone, whatsapp, trip_date, trip_time, pickup, dropoff, passengers, bags, services, message)
     values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
    [q.name, q.company, q.email, q.phone, q.whatsapp, q.trip_date, q.trip_time, q.pickup, q.dropoff, q.passengers, q.bags, JSON.stringify(services), q.message]
  )

  // Emails (facultatifs, ne bloquent jamais l'enregistrement)
  try {
    const cfg = useRuntimeConfig()
    const settingsRows = await query<{ key: string; value: string }>("select key, value from settings where key = 'email'")
    const team = cfg.mailTo || settingsRows[0]?.value
    if (team) {
      await sendMail({
        to: team, replyTo: email || undefined, subject: `Nouvelle demande de devis : ${name}`,
        html: layout('Nouvelle demande de devis', `<table cellpadding="6" style="font-size:14px">
          <tr><td><b>Nom</b></td><td>${esc(q.name)} ${esc(q.company)}</td></tr>
          <tr><td><b>Email</b></td><td>${esc(q.email)}</td></tr>
          <tr><td><b>Téléphone</b></td><td>${esc(q.phone)} ${esc(q.whatsapp)}</td></tr>
          <tr><td><b>Trajet</b></td><td>${esc(q.pickup)} → ${esc(q.dropoff)}<br>${esc(q.trip_date)} ${esc(q.trip_time)}</td></tr>
          <tr><td><b>Passagers / bagages</b></td><td>${esc(q.passengers)} / ${esc(q.bags)}</td></tr>
          <tr><td><b>Services</b></td><td>${esc(services.join(', '))}</td></tr>
          <tr><td><b>Message</b></td><td>${esc(q.message).replace(/\n/g, '<br>')}</td></tr></table>`)
      })
    }
    if (email) {
      const en = lang === 'en'
      await sendMail({
        to: email, subject: en ? 'We received your request | TS EXCLUSIVE' : 'Nous avons bien reçu votre demande | TS EXCLUSIVE',
        html: layout(en ? 'Request received' : 'Demande reçue', en
          ? `<p>Hello ${esc(name)},</p><p>Thank you for your request. Our team will get back to you very shortly with a tailored proposal.</p><p>TS EXCLUSIVE · Executive &amp; Private Mobility</p>`
          : `<p>Bonjour ${esc(name)},</p><p>Merci pour votre demande. Notre équipe revient vers vous très rapidement avec une proposition adaptée.</p><p>TS EXCLUSIVE · Executive &amp; Private Mobility</p>`)
      })
    }
  } catch (e) {
    console.error('[mail] envoi impossible', e)
  }
  return { ok: true }
})
