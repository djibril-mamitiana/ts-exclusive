// Destinations et partenaires de départ (insérés une seule fois, ensuite gérés depuis l'admin)
const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=72`

export async function seedDestinationsAndPartners() {
  const [{ count: nd }] = await query('select count(*)::int as count from destinations')
  if (!nd) {
    const rows = [
      ['antananarivo', 'Antananarivo', img('photo-1624272909636-4995421e37e7'), 'Private transfers. Executive mobility. City & business.',
        { description: 'Transferts privés. Mobilité executive. Ville et affaires.' }],
      ['nosy-be', 'Nosy Be', img('photo-1672841828459-bc913fdcd995'), 'Private transfers. Executive mobility. Island experiences.',
        { description: 'Transferts privés. Mobilité executive. Expériences insulaires.' }],
      ['morondava', 'Morondava', img('photo-1564198729838-cb82ee0c733c'), 'Private transfers. Executive mobility. Baobab alley & sunsets.',
        { description: 'Transferts privés. Mobilité executive. Allée des baobabs et couchers de soleil.' }],
      ['antsirabe', 'Antsirabe', img('photo-1699622595982-42fb5bb9ad22'), 'Private transfers. Executive mobility. Highlands & thermal town.',
        { description: 'Transferts privés. Mobilité executive. Hautes terres et ville thermale.' }]
    ] as const
    let i = 0
    for (const [slug, name, image, descEn, fr] of rows) {
      // le texte de base (colonne description) est en français, la traduction anglaise va dans "en"
      await query('insert into destinations (slug, name, image, description, sort, en) values ($1,$2,$3,$4,$5,$6)',
        [slug, name, image, fr.description, ++i, JSON.stringify({ description: descEn })])
    }
  }
  const [{ count: np }] = await query('select count(*)::int as count from partners')
  if (!np) {
    const names = ['Hotels & Resorts', 'Travel agencies', 'DMCs', 'Corporates', 'Event agencies', 'International organizations', 'Institutions', 'Private clients']
    let i = 0
    for (const n of names) await query('insert into partners (name, sort) values ($1,$2)', [n, ++i])
  }
}
