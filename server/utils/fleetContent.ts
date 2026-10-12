// Flotte finale du client : 4 véhicules avec photos détourées (public/img/fleet/*-cut.webp) et textes corrigés, en français et en anglais.
// Appliquée une seule fois par base (marqueur « fleet_v3 »). Les anciens véhicules sont masqués, pas supprimés : ils se réactivent depuis l'admin.
const fleet = [
  {
    match: ['Toyota Prado TLX'], image: '/img/fleet/prado-cut.webp', dark_bg: false, passengers: 7, bags: 4, sort: 1,
    fr: {
      name: 'Toyota Prado TLX', category: 'Premium SUV', tagline: 'Puissance. Élégance. Confiance absolue.',
      description: "Le Toyota Prado incarne l'alliance parfaite entre robustesse légendaire et raffinement moderne. Conçu pour dominer tous les terrains tout en offrant un confort exceptionnel, il s'impose comme le SUV idéal pour les familles exigeantes, les professionnels et les explorateurs.",
      usage: 'Familles, longues distances, personnalités'
    },
    en: {
      category: 'Premium SUV', tagline: 'Power. Elegance. Absolute confidence.',
      description: 'The Toyota Prado embodies the perfect alliance of legendary robustness and modern refinement. Built to master every terrain while offering exceptional comfort, it is the ideal SUV for demanding families, professionals and explorers.',
      usage: 'Families, long distances, public figures'
    }
  },
  {
    match: ['Jeep Wrangler Rubicon'], image: '/img/fleet/wrangler-cut.webp', dark_bg: true, passengers: 4, bags: 2, sort: 2,
    fr: {
      name: 'Jeep Wrangler Rubicon', category: '4×4 / Field Mobility', tagline: 'Dominateur des routes • Roi des sentiers',
      description: "Symbole d'aventure inébranlable. Équipé d'un moteur V6 3,6 L puissant, d'une transmission 4×4 robuste et d'une boîte Rock-Trac spécialisée pour le tout-terrain, il repousse les limites tout en offrant une conduite raffinée.",
      usage: 'Aventure, tout-terrain, séjours privés'
    },
    en: {
      category: '4×4 / Field Mobility', tagline: 'Master of the roads • King of the trails',
      description: 'A symbol of unshakeable adventure. Fitted with a powerful 3.6 L V6 engine, a robust 4×4 transmission and a Rock-Trac gearbox designed for off-road driving, it pushes the limits while delivering a refined drive.',
      usage: 'Adventure, off-road, private stays'
    }
  },
  {
    // la Hilux « 2.4GD Comfort » devient la Hilux Double Cab Executive
    match: ['Toyota Hilux Double Cab Executive', 'Toyota Hilux 2.4GD Comfort'], image: '/img/fleet/hilux-cut.webp', dark_bg: true, passengers: 5, bags: 3, sort: 3,
    fr: {
      name: 'Toyota Hilux Double Cab Executive', category: '4×4 / Field Mobility', tagline: 'Robuste par nature • Fiable par excellence',
      description: "Allie puissance, confort et durabilité. Construit pour performer sur tous les terrains, il offre une expérience de conduite sereine, sécurisée et parfaitement maîtrisée.",
      usage: 'Projets de terrain, ONG, missions'
    },
    en: {
      category: '4×4 / Field Mobility', tagline: 'Robust by nature • Reliable by excellence',
      description: 'Combining power, comfort and durability. Built to perform on every terrain, it delivers a calm, safe and perfectly controlled driving experience.',
      usage: 'Field projects, NGOs, missions'
    }
  },
  {
    match: ['Nissan Terra'], image: '/img/fleet/terra-cut.webp', dark_bg: true, passengers: 7, bags: 3, sort: 4,
    fr: {
      name: 'Nissan Terra', category: 'Premium SUV', tagline: 'Caractère. Raffinement. Assurance.',
      description: "Le Nissan Terra conjugue design imposant, performances robustes et confort haut de gamme. Son habitacle spacieux et raffiné, ses équipements intelligents et sa polyvalence remarquable offrent une expérience de voyage alliant sérénité et plaisir. Aussi à l'aise en ville que sur les routes exigeantes, il accompagne avec élégance les déplacements professionnels.",
      usage: 'Déplacements professionnels, familles, ville et routes exigeantes'
    },
    en: {
      category: 'Premium SUV', tagline: 'Character. Refinement. Assurance.',
      description: 'The Nissan Terra combines imposing design, robust performance and high-end comfort. Its spacious, refined cabin, smart equipment and remarkable versatility deliver a travel experience that blends serenity and pleasure. Equally at ease in the city and on demanding roads, it accompanies business journeys with elegance.',
      usage: 'Business travel, families, city and demanding roads'
    }
  }
]

export async function applyFleetContent() {
  await query('create table if not exists migrations (key text primary key, at timestamptz default now())')
  const done = await query("select 1 from migrations where key = 'fleet_v3'")
  if (done.length) return
  for (const v of fleet) {
    const found = await query('select id from vehicles where name = any($1) order by id limit 1', [v.match])
    const f = v.fr
    const cols = [f.name, f.category, f.tagline, f.description, v.passengers, v.bags, f.usage, v.image, v.dark_bg, v.sort, JSON.stringify(v.en)]
    if (found.length) {
      await query(
        `update vehicles set name=$1, category=$2, tagline=$3, description=$4, passengers=$5, bags=$6, usage=$7, image=$8, dark_bg=$9, sort=$10, en=$11, active=true where id=$12`,
        [...cols, found[0].id])
    } else {
      await query(
        `insert into vehicles (name, category, tagline, description, passengers, bags, usage, image, dark_bg, sort, en) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`, cols)
    }
  }
  // anciens véhicules : masqués (réactivables depuis l'admin), placés après les nouveaux
  await query("update vehicles set active = false, sort = sort + 10 where name in ('Ford Everest XLT', 'Toyota Land Cruiser 76', 'Toyota Hilux 2.7L Standard') and active")
  await query("insert into migrations (key) values ('fleet_v3') on conflict do nothing")
  console.log('[init-db] flotte finale appliquée (4 véhicules)')
}
