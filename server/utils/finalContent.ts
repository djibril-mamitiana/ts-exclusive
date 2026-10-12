// Contenus finaux fournis par le client (« contenus Site final.docx ») : les 7 services, en français et en anglais.
// Les paragraphes de "description" sont séparés par une ligne vide. Appliqués une seule fois par base (voir applyFinalContent),
// ensuite tout se modifie depuis l'admin (Services).
type Svc = {
  title: string; subtitle: string; tagline: string; description: string
  bullets_title: string; bullets: string[]; note: string; closing: string; cta: string
}

export const finalServices: { slug: string; icon: string; fr: Svc; en: Svc }[] = [
  {
    slug: 'transferts-aeroport', icon: 'plane',
    fr: {
      title: 'Transferts Aéroportuaires',
      subtitle: 'Votre arrivée, orchestrée avec soin.',
      tagline: '',
      description: "Dès votre arrivée à Madagascar, profitez d'une prise en charge privée pensée pour votre confort et votre tranquillité d'esprit.\n\nDe l'accueil à l'aéroport d'Ivato à votre transfert vers l'hôtel, la résidence ou votre lieu de rendez-vous, TS EXCLUSIVE veille à la fluidité de votre arrivée et au bon déroulement de votre déplacement.",
      bullets_title: 'Votre expérience comprend :',
      bullets: ["Accueil personnalisé à l'aéroport", 'Assistance pour vos bagages', 'Transfert privé avec chauffeur', 'Suivi de votre arrivée', 'Organisation de votre transfert retour'],
      note: '',
      closing: 'TS EXCLUSIVE — Le confort commence dès votre arrivée.',
      cta: 'Organiser mon transfert'
    },
    en: {
      title: 'Airport Transfers',
      subtitle: 'Your arrival, orchestrated with care.',
      tagline: '',
      description: 'From the moment you arrive in Madagascar, enjoy a private welcome designed for your comfort and peace of mind.\n\nFrom the welcome at Ivato airport to your transfer to the hotel, residence or meeting place, TS EXCLUSIVE ensures a smooth arrival and a seamless journey.',
      bullets_title: 'Your experience includes:',
      bullets: ['Personalised welcome at the airport', 'Luggage assistance', 'Private transfer with driver', 'Follow-up of your arrival', 'Organisation of your return transfer'],
      note: '',
      closing: 'TS EXCLUSIVE — Comfort starts the moment you arrive.',
      cta: 'Organise my transfer'
    }
  },
  {
    slug: 'executive-mobility', icon: 'car',
    fr: {
      title: 'Mobilité Exécutive',
      subtitle: 'La mobilité au service de vos exigences.',
      tagline: 'Votre agenda est notre feuille de route.',
      description: "Pour les dirigeants, cadres supérieurs et personnalités, chaque déplacement mérite une organisation à la hauteur des enjeux.\n\nTS EXCLUSIVE vous propose une mobilité exécutive personnalisée, associant chauffeur dédié, confort à bord et coordination de vos déplacements. De vos rendez-vous professionnels à vos engagements privés, vous bénéficiez d'une solution adaptée à votre rythme et à votre programme.",
      bullets_title: 'Nos solutions :',
      bullets: ['Chauffeur dédié selon votre programme', 'Déplacements professionnels et rendez-vous multiples', 'Accueil de vos visiteurs et partenaires', 'Coordination de vos trajets', 'Mise à disposition sur la durée convenue'],
      note: '',
      closing: "Vous vous concentrez sur l'essentiel. Nous prenons en charge vos déplacements.",
      cta: 'Organiser mon arrivée / mes déplacements'
    },
    en: {
      title: 'Executive Mobility',
      subtitle: 'Mobility at the service of your requirements.',
      tagline: 'Your schedule is our roadmap.',
      description: 'For executives, senior managers and public figures, every journey deserves an organisation equal to what is at stake.\n\nTS EXCLUSIVE offers a personalised executive mobility service, combining a dedicated driver, comfort on board and coordination of your journeys. From your business appointments to your private commitments, you benefit from a solution adapted to your pace and your schedule.',
      bullets_title: 'Our solutions:',
      bullets: ['Dedicated driver according to your schedule', 'Business travel and multiple appointments', 'Welcome of your visitors and partners', 'Coordination of your journeys', 'Chauffeur provision for the agreed duration'],
      note: '',
      closing: 'You focus on what matters. We take care of your journeys.',
      cta: 'Organise my arrival / my journeys'
    }
  },
  {
    slug: 'corporate-mobility', icon: 'briefcase',
    fr: {
      title: 'Solutions de Mobilité pour Entreprises',
      subtitle: 'Un partenaire de mobilité pour votre organisation',
      tagline: 'La mobilité professionnelle, pensée pour votre entreprise.',
      description: "Dirigeants en déplacement, collaborateurs en mission, visiteurs internationaux ou délégations : TS EXCLUSIVE accompagne les entreprises dans l'organisation de leurs besoins de transport.\n\nNous élaborons des solutions adaptées à vos contraintes opérationnelles, à la fréquence de vos déplacements et au niveau de service attendu. Transferts ponctuels, mise à disposition ou collaboration récurrente : vous disposez d'un interlocuteur pour coordonner vos besoins de mobilité.",
      bullets_title: 'Nos solutions corporate :',
      bullets: ['Transport de dirigeants et collaborateurs', 'Accueil de visiteurs et partenaires internationaux', 'Transferts professionnels ponctuels ou réguliers', 'Mise à disposition de véhicules avec chauffeur', "Formules et contrats adaptés aux besoins de l'entreprise"],
      note: '',
      closing: 'Une mobilité maîtrisée pour des journées professionnelles plus fluides.',
      cta: 'Demander une offre corporate'
    },
    en: {
      title: 'Mobility Solutions for Companies',
      subtitle: 'A mobility partner for your organisation',
      tagline: 'Business mobility, designed for your company.',
      description: 'Executives on the move, employees on assignment, international visitors or delegations: TS EXCLUSIVE supports companies in organising their transport needs.\n\nWe design solutions adapted to your operational constraints, the frequency of your travel and the level of service you expect. One-off transfers, chauffeur provision or an ongoing partnership: you have a single point of contact to coordinate your mobility needs.',
      bullets_title: 'Our corporate solutions:',
      bullets: ['Transport of executives and employees', 'Welcome of international visitors and partners', 'One-off or regular business transfers', 'Vehicles provided with a driver', "Plans and contracts adapted to the company's needs"],
      note: '',
      closing: 'Well-managed mobility for smoother working days.',
      cta: 'Request a corporate offer'
    }
  },
  {
    slug: 'evenements-protocole', icon: 'people',
    fr: {
      title: 'Mobilité Événementielle & Protocole',
      subtitle: 'Au service de vos événements les plus exigeants',
      tagline: 'Une logistique de transport à la hauteur de votre événement.',
      description: "Lors d'un événement, la qualité de l'accueil se joue aussi dans les détails. TS EXCLUSIVE organise les déplacements de vos invités, intervenants, délégations et personnalités avec attention, discrétion et rigueur.\n\nMariage, conférence, séminaire, cérémonie officielle, réception privée ou production audiovisuelle : nous adaptons le dispositif de transport au format de votre événement et aux exigences de votre organisation.",
      bullets_title: 'Notre accompagnement :',
      bullets: ['Organisation des transferts des invités', 'Transport des personnalités et délégations', 'Coordination des horaires et itinéraires', 'Gestion des mouvements de véhicules selon le programme', 'Solutions de transport adaptées aux événements privés et professionnels'],
      note: '',
      closing: 'Vous recevez. Nous coordonnons les déplacements.',
      cta: 'Préparer la mobilité de mon événement'
    },
    en: {
      title: 'Event Mobility & Protocol',
      subtitle: 'At the service of your most demanding events',
      tagline: 'Transport logistics worthy of your event.',
      description: 'At an event, the quality of the welcome also lies in the details. TS EXCLUSIVE organises the journeys of your guests, speakers, delegations and public figures with care, discretion and rigour.\n\nWedding, conference, seminar, official ceremony, private reception or audiovisual production: we adapt the transport arrangements to the format of your event and the requirements of your organisation.',
      bullets_title: 'Our support:',
      bullets: ['Organisation of guest transfers', 'Transport of public figures and delegations', 'Coordination of schedules and routes', 'Management of vehicle movements according to the programme', 'Transport solutions suited to private and professional events'],
      note: '',
      closing: 'You host. We coordinate the journeys.',
      cta: 'Prepare the mobility for my event'
    }
  },
  {
    slug: 'mise-a-disposition', icon: 'key',
    fr: {
      title: 'Mise à disposition de véhicule',
      subtitle: 'Votre temps, votre programme, votre mobilité.',
      tagline: 'Un véhicule avec chauffeur, disponible selon votre rythme.',
      description: "Pour une demi-journée, une journée complète, une soirée ou plusieurs jours, bénéficiez d'une solution de transport privée organisée autour de votre programme.\n\nRendez-vous successifs, déplacements personnels, visites professionnelles ou séjour à Madagascar : votre véhicule et votre chauffeur sont mis à disposition selon les modalités définies ensemble, pour vous offrir davantage de souplesse et de sérénité.",
      bullets_title: 'Choisissez votre formule :',
      bullets: ['Demi-journée', 'Journée complète', 'Soirée', 'Plusieurs jours'],
      note: '',
      closing: 'Moins de contraintes logistiques. Plus de liberté dans votre programme.',
      cta: 'Choisir ma formule'
    },
    en: {
      title: 'Vehicle & Driver on Demand',
      subtitle: 'Your time, your schedule, your mobility.',
      tagline: 'A vehicle with a driver, available at your pace.',
      description: 'For half a day, a full day, an evening or several days, enjoy a private transport solution organised around your schedule.\n\nSuccessive appointments, personal journeys, business visits or a stay in Madagascar: your vehicle and driver are provided on the terms we define together, to give you more flexibility and peace of mind.',
      bullets_title: 'Choose your plan:',
      bullets: ['Half day', 'Full day', 'Evening', 'Several days'],
      note: '',
      closing: 'Fewer logistical constraints. More freedom in your schedule.',
      cta: 'Choose my plan'
    }
  },
  {
    slug: 'voyage-prive', icon: 'compass',
    fr: {
      title: 'Voyage Privé',
      subtitle: 'Madagascar, à votre rythme et selon vos envies.',
      tagline: 'Découvrez Madagascar autrement.',
      description: "Parce qu'un séjour réussi ne se résume pas aux destinations visitées, TS EXCLUSIVE vous accompagne dans l'organisation de vos déplacements et de votre expérience sur place.\n\nVoyage privé, excursion, circuit personnalisé ou séjour professionnel : nous coordonnons vos transferts et vous accompagnons dans l'organisation des différentes étapes de votre programme.\n\nEn plus de vous mener à destination, notre service de conciergerie vous permet également de centraliser vos demandes liées à l'hébergement et à vos rendez-vous, selon vos besoins et les prestations convenues.",
      bullets_title: 'Votre accompagnement peut inclure :',
      bullets: ['Circuits privés et excursions', 'Transferts entre destinations', 'Accueil personnalisé', "Coordination des réservations d'hébergement", 'Organisation des rendez-vous', 'Assistance pendant le séjour, selon les modalités convenues'],
      note: '',
      closing: "Vous profitez de votre séjour. Nous vous aidons à en orchestrer les détails.",
      cta: 'Créer mon expérience sur mesure'
    },
    en: {
      title: 'Private Travel',
      subtitle: 'Madagascar, at your pace and to your liking.',
      tagline: 'Discover Madagascar differently.',
      description: 'Because a successful stay is more than the destinations you visit, TS EXCLUSIVE supports you in organising your journeys and your experience on the ground.\n\nPrivate trip, excursion, tailor-made circuit or business stay: we coordinate your transfers and support you in organising the different stages of your programme.\n\nIn addition to taking you to your destination, our concierge service also lets you centralise your requests for accommodation and appointments, according to your needs and the services agreed.',
      bullets_title: 'Your support may include:',
      bullets: ['Private tours and excursions', 'Transfers between destinations', 'Personalised welcome', 'Coordination of accommodation bookings', 'Organisation of appointments', 'Assistance during your stay, on the agreed terms'],
      note: '',
      closing: 'You enjoy your stay. We help you orchestrate the details.',
      cta: 'Create my tailor-made experience'
    }
  },
  {
    slug: 'conciergerie-privee-vip', icon: 'diamond',
    fr: {
      title: 'Conciergerie Privée VIP',
      subtitle: 'Des solutions pensées pour vous.',
      tagline: '',
      description: "Parce que votre temps est précieux et que certaines demandes méritent une attention particulière, TS EXCLUSIVE vous propose en plus de la mobilité, un service de conciergerie privée conçu autour de vos besoins, de vos préférences et de votre rythme de vie.\n\nQue vous soyez résident, dirigeant, voyageur ou de passage à Madagascar, nous vous accompagnons dans l'organisation de vos demandes personnelles et professionnelles, en coordonnant les prestations adaptées à vos attentes.\n\nNotre rôle : vous simplifier la vie, anticiper vos besoins lorsque cela est possible et vous permettre de profiter pleinement de votre temps, avec un interlocuteur dédié à vos demandes.",
      bullets_title: 'Nos services de conciergerie peuvent inclure :',
      bullets: [
        'Réservations & bonnes adresses : restaurants, tables recherchées et lieux adaptés à vos envies.',
        'Organisation du quotidien : coordination de rendez-vous, demandes pratiques et services personnalisés.',
        "Séjours & hospitalité : recherche et coordination d'hébergements, accueil et prestations complémentaires.",
        'Services à la demande : recherche de prestataires, organisation de demandes particulières et coordination des interventions.',
        'Assistance personnelle : accompagnement dans la préparation de vos journées, événements privés et besoins spécifiques.',
        'Coordination de services : mise en relation avec des partenaires sélectionnés selon la nature de votre demande.'
      ],
      note: 'Chaque demande est étudiée individuellement afin de vous proposer une réponse adaptée, dans le respect de vos préférences, de votre confidentialité et des disponibilités de nos partenaires.',
      closing: "TS EXCLUSIVE — Vous formulez vos envies. Nous orchestrons les solutions.\nDécouvrez nos offres parmi tant d'autres : offres installation, offres vie quotidienne…",
      cta: 'Répondre à mes besoins'
    },
    en: {
      title: 'Private VIP Concierge',
      subtitle: 'Solutions designed for you.',
      tagline: '',
      description: 'Because your time is precious and some requests deserve particular attention, TS EXCLUSIVE offers, in addition to mobility, a private concierge service built around your needs, your preferences and your lifestyle.\n\nWhether you are a resident, an executive, a traveller or just passing through Madagascar, we help you organise your personal and professional requests, coordinating the services that match your expectations.\n\nOur role: to make your life simpler, anticipate your needs where possible and let you make the most of your time, with a dedicated contact for your requests.',
      bullets_title: 'Our concierge services may include:',
      bullets: [
        'Bookings & good addresses: restaurants, sought-after tables and venues suited to your tastes.',
        'Everyday organisation: coordination of appointments, practical requests and personalised services.',
        'Stays & hospitality: search and coordination of accommodation, welcome and additional services.',
        'On-demand services: finding providers, handling special requests and coordinating interventions.',
        'Personal assistance: help preparing your days, private events and specific needs.',
        'Service coordination: introductions to selected partners according to the nature of your request.'
      ],
      note: 'Each request is reviewed individually so that we can offer a suitable response, respecting your preferences, your confidentiality and the availability of our partners.',
      closing: 'TS EXCLUSIVE — You express your wishes. We orchestrate the solutions.\nDiscover our offers, among many others: settling-in offers, everyday-life offers…',
      cta: 'Respond to my needs'
    }
  }
]

// Applique les contenus finaux une seule fois (marqueur dans la table "migrations"), sans toucher aux images ni à l'état actif.
export async function applyFinalContent() {
  await query('create table if not exists migrations (key text primary key, at timestamptz default now())')
  const done = await query("select 1 from migrations where key = 'content_v2'")
  if (done.length) return
  // l'ancien service « Tourisme & Conciergerie VIP » devient « Voyage Privé » (même ligne, donc même image)
  await query("update services set slug = 'voyage-prive' where slug = 'tourisme-conciergerie' and not exists (select 1 from services where slug = 'voyage-prive')")
  let sort = 0
  for (const s of finalServices) {
    sort++
    const f = s.fr
    await query(
      `insert into services (slug, icon, sort, title, subtitle, tagline, description, bullets, bullets_title, note, closing, cta, en)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
       on conflict (slug) do update set icon = excluded.icon, sort = excluded.sort, title = excluded.title, subtitle = excluded.subtitle,
         tagline = excluded.tagline, description = excluded.description, bullets = excluded.bullets, bullets_title = excluded.bullets_title,
         note = excluded.note, closing = excluded.closing, cta = excluded.cta, en = excluded.en`,
      [s.slug, s.icon, sort, f.title, f.subtitle, f.tagline, f.description, JSON.stringify(f.bullets), f.bullets_title, f.note, f.closing, f.cta, JSON.stringify(s.en)]
    )
  }
  await query("insert into migrations (key) values ('content_v2') on conflict do nothing")
  console.log('[init-db] contenus finaux appliqués (services)')
}
