// Crée les tables au démarrage et insère le contenu de départ (une seule fois)
export default defineNitroPlugin(async () => {
  try {
    await query(`
      create table if not exists users (
        id serial primary key, email text unique not null, name text not null default '',
        password_hash text not null, role text not null default 'admin', created_at timestamptz default now()
      );
      create table if not exists settings (key text primary key, value text not null default '');
      create table if not exists services (
        id serial primary key, slug text unique not null, title text not null, subtitle text default '',
        description text default '', bullets jsonb default '[]', icon text default 'car', image text default '',
        sort int default 0, active boolean default true
      );
      create table if not exists offers (
        id serial primary key, name text not null, price text default '', target text default '',
        options jsonb default '[]', highlight boolean default false, sort int default 0, active boolean default true
      );
      create table if not exists vehicles (
        id serial primary key, name text not null, category text default '', tagline text default '',
        description text default '', passengers int default 4, bags int default 2, usage text default '',
        image text default '', sort int default 0, active boolean default true
      );
      create table if not exists testimonials (
        id serial primary key, name text not null, role text default '', org text default '',
        quote text not null, sort int default 0, active boolean default true
      );
      create table if not exists faqs (
        id serial primary key, question text not null, answer text default '', sort int default 0, active boolean default true
      );
      create table if not exists quotes (
        id serial primary key, created_at timestamptz default now(), status text default 'Nouveau',
        name text not null, company text default '', email text default '', phone text default '', whatsapp text default '',
        trip_date text default '', trip_time text default '', pickup text default '', dropoff text default '',
        passengers int, bags int, services jsonb default '[]', message text default '', notes text default ''
      );
    `)

    // Traductions anglaises (colonne "en") et médiathèque
    for (const t of ['services', 'offers', 'vehicles', 'testimonials', 'faqs']) {
      await query(`alter table ${t} add column if not exists en jsonb default '{}'::jsonb`)
    }
    await query('alter table vehicles add column if not exists dark_bg boolean default false')
    await query("update vehicles set dark_bg = true where image in ('/img/fleet/prado.jpg', '/img/fleet/hilux.jpg') and dark_bg = false and id <= 6")
    await query("update vehicles set image = replace(image, '.png', '.jpg') where image in ('/img/fleet/prado.png', '/img/fleet/hilux.png')")
    await query(`create table if not exists media (
      id serial primary key, name text not null, mime text not null, data bytea not null, size int not null, created_at timestamptz default now()
    )`)

    const config = useRuntimeConfig()
    const [{ count: users }] = await query('select count(*)::int as count from users')
    if (!users && config.adminEmail && config.adminPassword) {
      await query('insert into users (email, name, password_hash, role) values ($1,$2,$3,$4)', [
        config.adminEmail, 'Administrateur', hashPassword(config.adminPassword), 'admin'
      ])
    }

    const [{ count: seeded }] = await query('select count(*)::int as count from services')
    if (seeded) { await applySeedTranslations(); return }

    const settings: Record<string, string> = {
      phone: '+261 34 90 706 65',
      whatsapp: '261349070665',
      email: 'antlyg@gmail.com',
      address: 'Mandrosoa Ambohijatovo, Antananarivo 101, Lot II C 114 H',
      linkedin: '', instagram: '', facebook: ''
    }
    for (const [k, v] of Object.entries(settings)) {
      await query('insert into settings (key, value) values ($1,$2) on conflict do nothing', [k, v])
    }

    const services = [
      ['transferts-aeroport', 'Transferts aéroportuaires', 'Une prise en charge fluide dès votre arrivée.',
        "Votre arrivée à Madagascar commence dans le confort. Nous assurons vos transferts avec chauffeur entre l'aéroport international d'Ivato, votre hôtel, votre résidence ou tout autre lieu de destination.",
        ["Accueil à l'aéroport", 'Transfert privé', 'Assistance bagages', "Suivi de l'arrivée", 'Transfert hôtel', 'Transfert retour'], 'plane'],
      ['executive-mobility', 'Executive Mobility', 'Pour dirigeants, cadres et personnalités.',
        "Un chauffeur, un véhicule et une organisation adaptés à votre agenda. Votre mobilité professionnelle, notre responsabilité.",
        ['Mise à disposition', 'Déplacements professionnels', 'Rendez-vous multiples', 'Accueil des visiteurs', 'Chauffeur dédié', 'Coordination des déplacements'], 'car'],
      ['corporate-mobility', 'Corporate Mobility', 'Des solutions adaptées à vos missions professionnelles.',
        "Dirigeants, collaborateurs, visiteurs internationaux, consultants ou délégations : des solutions de transport fiables et flexibles pour les entreprises.",
        ['Mise à disposition de chauffeur', 'Transferts réguliers', 'Transport de dirigeants', 'Accueil de collaborateurs et visiteurs', 'Abonnements corporate', 'Contrats de transport récurrents'], 'briefcase'],
      ['evenements-protocole', 'Événements & Protocole', 'Transport et coordination pour vos événements.',
        "Mariage, conférence, cérémonie, événement institutionnel ou soirée privée : nous assurons le transport de vos invités et personnalités avec professionnalisme et discrétion.",
        ['Mariages', 'Conférences et séminaires', 'Cérémonies', 'Événements institutionnels', 'Événements privés', 'Tournages et productions'], 'people'],
      ['mise-a-disposition', 'Mise à disposition', 'Votre véhicule avec chauffeur, selon votre programme.',
        "Besoin d'un véhicule pendant quelques heures, une journée ou plusieurs jours ? Choisissez la formule adaptée à votre agenda. Votre chauffeur reste à votre disposition selon les modalités définies à la réservation.",
        ['Demi-journée', 'Journée complète', 'Soirée', 'Plusieurs jours'], 'key'],
      ['tourisme-conciergerie', 'Tourisme & Conciergerie VIP', "Plus qu'un déplacement, un accompagnement personnalisé.",
        "Circuits privés, excursions et transferts entre destinations, avec un service de conciergerie pour les dirigeants, personnalités et voyageurs internationaux.",
        ['Circuits privés', 'Excursions', 'Transferts entre destinations', 'Accueil personnalisé', "Coordination de l'hébergement et des rendez-vous", 'Assistance pendant le séjour'], 'compass']
    ]
    let i = 0
    for (const [slug, title, subtitle, description, bullets, icon] of services) {
      await query('insert into services (slug,title,subtitle,description,bullets,icon,sort) values ($1,$2,$3,$4,$5,$6,$7)',
        [slug, title, subtitle, description, JSON.stringify(bullets), icon, ++i])
    }

    const offers = [
      ['Longue route', '250 000 Ar / jour', 'Entreprises, expatriés, grands projets routiers, organismes internationaux, ONG',
        ['Plusieurs mois', 'Kilométrage illimité', 'Assurance complète', 'Assistance 24/7', 'GPS', 'Remplacement en cas de panne', 'Chauffeur expérimenté'], false],
      ['Mobilité', '300 000 Ar / jour', 'Touristes nationaux et internationaux, ONG sur le terrain, projets de terrain, particuliers',
        ['Courte durée : jour, week-end ou semaine', "Livraison à l'hôtel ou à l'aéroport", 'Assurance complète', 'Assistance 24/7', 'GPS', "Suggestions d'itinéraires", 'Chauffeur expérimenté'], true],
      ['Prestige', '400 000 Ar / jour', 'VIP, particuliers',
        ['Pack sur mesure', 'Véhicules haut de gamme', 'Assistance 24/7', 'GPS', 'Accessoires personnalisés', 'Avec ou sans chauffeur', 'Chauffeur expérimenté'], false]
    ]
    i = 0
    for (const [name, price, target, options, highlight] of offers) {
      await query('insert into offers (name,price,target,options,highlight,sort) values ($1,$2,$3,$4,$5,$6)',
        [name, price, target, JSON.stringify(options), highlight, ++i])
    }

    const vehicles = [
      ['Toyota Prado TLX', 'Premium SUV', 'Puissance. Élégance. Confiance absolue.', "Alliance de robustesse légendaire et de raffinement moderne : le SUV idéal pour les familles exigeantes, les professionnels et les explorateurs.", 7, 4, 'Familles, longues distances, personnalités', '/img/fleet/prado.jpg'],
      ['Ford Everest XLT', 'Premium SUV', 'Puissant, confortable, prêt pour l\'aventure.', 'Moteur diesel puissant et économique, spacieux et confortable : parfait pour les longs trajets, les voyages en famille et les excursions.', 7, 4, 'Voyages en famille, excursions touristiques', '/img/fleet/everest.jpg'],
      ['Jeep Wrangler Rubicon', '4×4 / Field Mobility', 'Dominateur des routes, roi des sentiers.', "Moteur V6 3,6 L, transmission 4×4 et boîte Rock-Trac pour le tout-terrain, avec une conduite raffinée.", 4, 2, 'Aventure, tout-terrain, séjours privés', '/img/fleet/wrangler.jpg'],
      ['Toyota Land Cruiser 76', '4×4 / Field Mobility', "L'alliance parfaite entre prestige et robustesse.", "Idéal pour les déplacements VIP, les missions professionnelles et les circuits haut de gamme, sur toutes les routes de Madagascar.", 5, 4, 'Missions terrain, circuits, VIP', '/img/fleet/landcruiser.jpg'],
      ['Toyota Hilux 2.4GD Comfort', '4×4 / Field Mobility', 'Double Cab 6-MT 4x4', "Robuste par nature, fiable par excellence : performance, confort et durabilité sur tous les terrains.", 5, 3, 'Projets de terrain, ONG, missions', '/img/fleet/hilux.jpg'],
      ['Toyota Hilux 2.7L Standard', '4×4 / Field Mobility', 'Double Cab 5-MT 4x4', "Moteur essence puissant et transmission manuelle précise : équilibre entre performance, simplicité et endurance.", 5, 3, 'Projets de terrain, ONG, missions', '/img/fleet/hilux.jpg']
    ]
    i = 0
    for (const [name, category, tagline, description, passengers, bags, usage, image] of vehicles) {
      await query('insert into vehicles (name,category,tagline,description,passengers,bags,usage,image,sort) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
        [name, category, tagline, description, passengers, bags, usage, image, ++i])
    }

    const faqs = [
      ['Comment réserver un véhicule avec chauffeur ?', "Remplissez la demande de devis en ligne ou écrivez-nous sur WhatsApp. Nous confirmons la disponibilité, le tarif et l'identité du chauffeur."],
      ["Proposez-vous des transferts depuis l'aéroport ?", "Oui. Nous assurons l'accueil à l'aéroport d'Ivato, l'assistance bagages et le transfert vers votre hôtel ou votre résidence, ainsi que le retour."],
      ['Peut-on réserver un véhicule pour plusieurs jours ?', "Oui. La mise à disposition existe en demi-journée, journée complète, soirée ou sur plusieurs jours, et même plusieurs mois avec l'offre Longue route."],
      ['Proposez-vous des contrats pour entreprises ?', "Oui : à la demande, mise à disposition, abonnement corporate et contrat annuel, avec facturation adaptée."],
      ['Pouvez-vous gérer une délégation ?', "Oui. Nous coordonnons véhicules, horaires, itinéraires et accueil pour les délégations et visiteurs internationaux."],
      ['Travaillez-vous avec les hôtels ?', "Oui, nous sommes partenaires d'hôtels et d'agences. Contactez-nous pour devenir partenaire."],
      ['Quels moyens de paiement acceptez-vous ?', "Le paiement s'effectue au départ, avec une caution remboursable pour les locations. Une facturation mensuelle est possible pour les entreprises sous contrat."],
      ['Peut-on demander un chauffeur anglophone ?', "Oui, précisez-le dans votre demande et nous affectons un chauffeur parlant anglais selon disponibilité."]
    ]
    i = 0
    for (const [question, answer] of faqs) {
      await query('insert into faqs (question,answer,sort) values ($1,$2,$3)', [question, answer, ++i])
    }
    await applySeedTranslations()
    console.log('[init-db] base initialisée')
  } catch (e) {
    console.error('[init-db] erreur', e)
  }
})
