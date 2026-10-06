// Contenu public : tout ce qui est actif, trié. ?lang=en applique les traductions de la colonne "en".
function localize(rows: any[], lang: string) {
  return rows.map((r) => {
    const { en, ...rest } = r
    if (lang === 'en' && en && typeof en === 'object') {
      for (const [k, v] of Object.entries(en)) {
        const filled = Array.isArray(v) ? v.length > 0 : String(v ?? '').trim() !== ''
        if (filled) rest[k] = v
      }
    }
    return rest
  })
}

export default defineEventHandler(async (event) => {
  const lang = getQuery(event).lang === 'en' ? 'en' : 'fr'
  const [services, offers, vehicles, testimonials, faqs, destinations, partners] = await Promise.all([
    query('select * from services where active order by sort, id'),
    query('select * from offers where active order by sort, id'),
    query('select * from vehicles where active order by sort, id'),
    query('select * from testimonials where active order by sort, id'),
    query('select * from faqs where active order by sort, id'),
    query('select * from destinations where active order by sort, id'),
    query('select * from partners where active order by sort, id')
  ])
  return {
    services: localize(services, lang), offers: localize(offers, lang), vehicles: localize(vehicles, lang),
    testimonials: localize(testimonials, lang), faqs: localize(faqs, lang),
    destinations: localize(destinations, lang), partners: localize(partners, lang)
  }
})
