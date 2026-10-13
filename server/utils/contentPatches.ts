// Petites corrections de contenu appliquées une seule fois chacune (marqueur par correction dans la table « migrations »).
// Elles passent après les contenus de départ, donc elles s'appliquent aussi sur une base neuve.
const patches: { key: string; steps: [string, any[]?][] }[] = [
  {
    // langue française : plus de mots anglais dans les textes affichés
    key: 'patch_fr_1',
    steps: [
      ["update vehicles set category = 'SUV haut de gamme' where category = 'SUV premium'"],
      ["update services set cta = 'Demander une offre entreprise' where slug = 'corporate-mobility' and cta = 'Demander une offre corporate'"],
      ["update services set bullets_title = 'Nos solutions pour entreprises :' where slug = 'corporate-mobility' and bullets_title = 'Nos solutions corporate :'"]
    ]
  },
  {
    key: 'patch_fr_2',
    steps: [
      ["update faqs set answer = replace(answer, 'abonnement corporate', 'abonnement entreprise') where answer like '%abonnement corporate%'"]
    ]
  }
]

export async function applyContentPatches() {
  await query('create table if not exists migrations (key text primary key, at timestamptz default now())')
  for (const p of patches) {
    const done = await query('select 1 from migrations where key = $1', [p.key])
    if (done.length) continue
    for (const [sql, params] of p.steps) await query(sql, params || [])
    await query('insert into migrations (key) values ($1) on conflict do nothing', [p.key])
    console.log(`[init-db] correction ${p.key} appliquée`)
  }
}
