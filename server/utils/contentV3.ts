// Version 3 des contenus (13 octobre 2026) : accroches de services plus percutantes, listes détaillées (« Titre : détail »),
// conciergerie en service à part, langues strictement séparées (partenaires, destinations, catégories de véhicules, titre du hero).
// Appliquée une seule fois par base (marqueur « content_v3 »), ensuite tout se modifie depuis l'admin.
type Part = { subtitle: string; tagline: string; bullets: string[] }
const services: Record<string, { apart?: boolean; fr: Part; en: Part }> = {
  'transferts-aeroport': {
    fr: {
      subtitle: 'Vous atterrissez. Tout est déjà réglé.',
      tagline: "Du tarmac d'Ivato à votre porte, sans l'ombre d'une attente.",
      bullets: [
        "Accueil personnalisé à l'aéroport : votre chauffeur vous attend à l'arrivée et vous accueille par votre nom.",
        "Assistance pour vos bagages : ils sont pris en charge de l'aéroport jusqu'à votre destination.",
        "Transfert privé avec chauffeur : un véhicule confortable pour vous seul, directement jusqu'à l'hôtel, la résidence ou votre rendez-vous.",
        "Suivi de votre arrivée : nous suivons votre horaire pour être là quand vous arrivez, même si votre vol est décalé.",
        "Transfert retour : réservez dès votre arrivée, nous vous reconduisons à l'heure pour votre vol."
      ]
    },
    en: {
      subtitle: 'You land. Everything is already taken care of.',
      tagline: "From the Ivato tarmac to your door, without a moment's wait.",
      bullets: [
        'Personalised welcome at the airport: your driver is waiting at arrivals and greets you by name.',
        'Luggage assistance: it is handled from the airport all the way to your destination.',
        'Private transfer with driver: a comfortable vehicle just for you, straight to your hotel, residence or meeting.',
        'Follow-up of your arrival: we track your schedule to be there when you land, even if your flight is delayed.',
        'Return transfer: book as soon as you arrive, and we take you back in time for your flight.'
      ]
    }
  },
  'executive-mobility': {
    fr: {
      subtitle: 'Votre temps vaut plus que le trajet.',
      tagline: 'Un chauffeur dédié, un agenda respecté, zéro improvisation.',
      bullets: [
        'Chauffeur dédié : toujours le même interlocuteur, qui connaît votre programme et vos habitudes.',
        "Rendez-vous enchaînés : vous passez d'une réunion à l'autre sans perdre une minute.",
        'Accueil de vos visiteurs : vos partenaires sont reçus avec les mêmes égards que vous.',
        'Coordination de vos trajets : horaires, itinéraires et imprévus sont gérés pour vous.',
        'Disponibilité sur la durée : un véhicule à votre disposition aussi longtemps que nécessaire.'
      ]
    },
    en: {
      subtitle: 'Your time is worth more than the journey.',
      tagline: 'A dedicated driver, a schedule respected, no improvisation.',
      bullets: [
        'Dedicated driver: always the same contact, who knows your schedule and your habits.',
        'Back-to-back appointments: you move from one meeting to the next without losing a minute.',
        'Welcome of your visitors: your partners are received with the same consideration as you.',
        'Coordination of your journeys: schedules, routes and the unexpected are managed for you.',
        'Availability over time: a vehicle at your disposal for as long as you need.'
      ]
    }
  },
  'corporate-mobility': {
    fr: {
      subtitle: "Vos équipes arrivent à l'heure. Sans friction.",
      tagline: 'Un seul interlocuteur pour toute la mobilité de votre entreprise.',
      bullets: [
        'Dirigeants et collaborateurs : des déplacements organisés autour de vos agendas.',
        "Visiteurs et partenaires internationaux : un accueil soigné dès l'arrivée, à l'image de votre entreprise.",
        'Transferts ponctuels ou réguliers : une réservation simple et un niveau de service constant.',
        'Véhicules avec chauffeur : mis à disposition selon vos contraintes opérationnelles.',
        'Formules et contrats : une offre adaptée à la fréquence de vos déplacements.'
      ]
    },
    en: {
      subtitle: 'Your teams arrive on time. Without friction.',
      tagline: "One single point of contact for all of your company's mobility.",
      bullets: [
        'Executives and employees: journeys organised around your schedules.',
        "International visitors and partners: a polished welcome from the moment they arrive, in your company's image.",
        'One-off or regular transfers: simple booking and a consistent level of service.',
        'Vehicles with driver: provided to suit your operational constraints.',
        'Plans and contracts: an offer adapted to the frequency of your travel.'
      ]
    }
  },
  'evenements-protocole': {
    fr: {
      subtitle: 'Un événement réussi commence sur la route.',
      tagline: "Invités, intervenants, délégations : chacun arrive à l'heure, dans les règles de l'art.",
      bullets: [
        'Transferts des invités : des départs planifiés selon le programme de votre événement.',
        'Personnalités et délégations : une prise en charge protocolaire, discrète et ponctuelle.',
        "Horaires et itinéraires : une circulation coordonnée de la première arrivée au dernier départ.",
        'Mouvements de véhicules : chaque départ suit le déroulé de la journée.',
        "Événements privés et professionnels : mariage, séminaire, cérémonie ou tournage, le dispositif s'adapte."
      ]
    },
    en: {
      subtitle: 'A successful event starts on the road.',
      tagline: 'Guests, speakers, delegations: everyone arrives on time, by the book.',
      bullets: [
        "Guest transfers: departures planned around your event's programme.",
        'Public figures and delegations: a protocol-minded, discreet and punctual service.',
        'Schedules and routes: coordinated traffic flow from the first arrival to the last departure.',
        'Vehicle movements: every departure follows the running order of the day.',
        'Private and professional events: wedding, seminar, ceremony or shoot, the arrangements adapt.'
      ]
    }
  },
  'mise-a-disposition': {
    fr: {
      subtitle: 'Un chauffeur. Votre programme. Zéro contrainte.',
      tagline: 'Du matin au soir, voire plusieurs jours : votre véhicule vous suit.',
      bullets: [
        'Demi-journée : idéale pour quelques rendez-vous ou une découverte de la ville.',
        'Journée complète : un véhicule et un chauffeur avec vous, de la première à la dernière course.',
        "Soirée : dîner, réception ou sortie, vous rentrez l'esprit tranquille.",
        'Plusieurs jours : pour un séjour ou une mission, avec le même chauffeur du début à la fin.'
      ]
    },
    en: {
      subtitle: 'One driver. Your schedule. Zero constraints.',
      tagline: 'From morning to night, even several days: your vehicle follows you.',
      bullets: [
        'Half day: ideal for a few appointments or a discovery of the city.',
        'Full day: a vehicle and a driver with you, from the first to the last journey.',
        'Evening: dinner, reception or night out, you get home with peace of mind.',
        'Several days: for a stay or an assignment, with the same driver from start to finish.'
      ]
    }
  },
  'voyage-prive': {
    fr: {
      subtitle: "Madagascar sans mode d'emploi.",
      tagline: 'Un itinéraire à votre image, chaque étape orchestrée pour vous.',
      bullets: [
        'Circuits privés et excursions : des parcours construits autour de vos envies et de votre rythme.',
        "Transferts entre destinations : d'une étape à l'autre, la logistique ne vous concerne plus.",
        "Accueil personnalisé : vous êtes pris en charge dès l'arrivée, avec les mêmes égards à chaque étape.",
        "Réservations d'hébergement : nous coordonnons vos réservations selon vos préférences.",
        "Organisation des rendez-vous : vos rendez-vous s'intègrent naturellement à votre programme.",
        'Assistance pendant le séjour : un interlocuteur à votre écoute, selon les modalités convenues.'
      ]
    },
    en: {
      subtitle: 'Madagascar, without a script.',
      tagline: 'An itinerary in your own image, every stage orchestrated for you.',
      bullets: [
        'Private tours and excursions: routes built around your wishes and your pace.',
        'Transfers between destinations: from one stage to the next, logistics are no longer your concern.',
        'Personalised welcome: you are looked after from the moment you arrive, with the same care at every stage.',
        'Accommodation bookings: we coordinate your reservations according to your preferences.',
        'Organisation of appointments: your appointments fit naturally into your programme.',
        'Assistance during your stay: a contact who listens, on the agreed terms.'
      ]
    }
  },
  // service à part : pas de numéro, présenté dans son propre bloc
  'conciergerie-privee-vip': {
    apart: true,
    fr: {
      subtitle: 'Dites-le. Nous nous en occupons.',
      tagline: "Un interlocuteur dédié pour tout ce qui n'est pas un trajet.",
      bullets: [
        'Réservations & bonnes adresses : restaurants, tables recherchées et lieux adaptés à vos envies.',
        'Organisation du quotidien : coordination de rendez-vous, demandes pratiques et services personnalisés.',
        "Séjours & hospitalité : recherche et coordination d'hébergements, accueil et prestations complémentaires.",
        'Services à la demande : recherche de prestataires, organisation de demandes particulières et coordination des interventions.',
        'Assistance personnelle : accompagnement dans la préparation de vos journées, événements privés et besoins spécifiques.',
        'Coordination de services : mise en relation avec des partenaires sélectionnés selon la nature de votre demande.'
      ]
    },
    en: {
      subtitle: 'Say it. We take care of it.',
      tagline: "A dedicated contact for everything that isn't a journey.",
      bullets: [
        'Bookings & good addresses: restaurants, sought-after tables and venues suited to your tastes.',
        'Everyday organisation: coordination of appointments, practical requests and personalised services.',
        'Stays & hospitality: search and coordination of accommodation, welcome and additional services.',
        'On-demand services: finding providers, handling special requests and coordinating interventions.',
        'Personal assistance: help preparing your days, private events and specific needs.',
        'Service coordination: introductions to selected partners according to the nature of your request.'
      ]
    }
  }
}

// partenaires : nom français + traduction anglaise (ancien nom, en anglais, comme clé)
const partners: Record<string, { fr: string; en: string }> = {
  'Hotels & Resorts': { fr: 'Hôtels et resorts', en: 'Hotels & resorts' },
  'Travel agencies': { fr: 'Agences de voyage', en: 'Travel agencies' },
  DMCs: { fr: 'Agences réceptives', en: 'DMCs' },
  Corporates: { fr: 'Entreprises', en: 'Corporates' },
  'Event agencies': { fr: 'Agences événementielles', en: 'Event agencies' },
  'International organizations': { fr: 'Organisations internationales', en: 'International organisations' },
  Institutions: { fr: 'Institutions', en: 'Institutions' },
  'Private clients': { fr: 'Clients privés', en: 'Private clients' }
}

export async function applyContentV3() {
  await query('create table if not exists migrations (key text primary key, at timestamptz default now())')
  await query('alter table services add column if not exists apart boolean default false')
  const done = await query("select 1 from migrations where key = 'content_v3'")
  if (done.length) return

  for (const [slug, s] of Object.entries(services)) {
    await query(
      `update services set subtitle = $1, tagline = $2, bullets = $3, apart = $4, en = coalesce(en, '{}'::jsonb) || $5::jsonb where slug = $6`,
      [s.fr.subtitle, s.fr.tagline, JSON.stringify(s.fr.bullets), !!s.apart, JSON.stringify(s.en), slug]
    )
  }

  for (const [old, p] of Object.entries(partners)) {
    await query('update partners set name = $1, en = $2::jsonb where name = $3', [p.fr, JSON.stringify({ name: p.en }), old])
  }

  await query("update destinations set description = replace(description, 'executive', 'exécutive') where description like '%executive%'")

  await query("update vehicles set category = 'SUV premium', en = coalesce(en, '{}'::jsonb) || '{\"category\":\"Premium SUV\"}'::jsonb where category in ('Premium SUV', 'SUV premium')")
  await query("update vehicles set category = '4×4 / Mobilité tout-terrain', en = coalesce(en, '{}'::jsonb) || '{\"category\":\"4×4 / Field mobility\"}'::jsonb where category in ('4×4 / Field Mobility', '4×4 / Mobilité tout-terrain')")

  // titre du hero modifié dans l'admin : version française
  await query("update texts set fr = 'Au-delà' where key = 'home.title1' and fr = 'Beyond'")
  await query("update texts set fr = 'du transport' where key = 'home.title2' and fr = 'Transportation'")

  await query("insert into migrations (key) values ('content_v3') on conflict do nothing")
  console.log('[init-db] contenus v3 appliqués (services, partenaires, langues)')
}
