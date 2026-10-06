// Textes du site modifiés depuis l'admin : { "home.lead": { fr, en } }. Absent = texte par défaut du code.
export default defineEventHandler(async () => {
  const rows = await query<{ key: string; fr: string; en: string }>('select key, fr, en from texts')
  return Object.fromEntries(rows.map(r => [r.key, { fr: r.fr, en: r.en }]))
})
