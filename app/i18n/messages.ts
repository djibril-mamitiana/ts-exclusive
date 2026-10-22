// Textes statiques du site (FR / EN). Règle : en français, tout est en français ; en anglais, tout est en anglais.
// Seuls restent identiques le nom TS EXCLUSIVE et les mots malgaches (« Tonga soa », « Misaotra »).
// Les contenus gérés depuis l'admin (services, flotte, offres, FAQ...) sont traduits en base (colonne "en").

const fr = {
  nav: { services: 'Services', fleet: 'Flotte', experiences: 'Expériences', destinations: 'Destinations', contact: 'Contact', menu: 'Menu', close: 'Fermer', quote: 'Demander un devis' },
  menu: {
    services: 'Services', fleet: 'Flotte', experiences: 'Expériences', destinations: 'Destinations',
    fleetItems: ['SUV haut de gamme', '4×4 / Mobilité tout-terrain', 'Toute la flotte'],
    experienceItems: ["L'expérience TS", 'Entreprises', 'Hôtellerie', 'Événements', 'À propos', 'Tarifs'],
    follow: 'Contact'
  },
  common: {
    discover: 'Découvrir', explore: 'Explorer le véhicule', quote: 'Demander un devis', contactUs: 'Nous contacter', requestAvailability: 'Demander la disponibilité',
    passengers: 'Passagers', bags: 'Bagages', included: 'Inclus', otherServices: 'Autres services', all: 'Tous',
    view: 'Voir', zoom: 'Zoom', prev: 'Précédent', next: 'Suivant', heroAlt: 'Véhicule de direction TS EXCLUSIVE', partnersAria: 'Partenaires', logoAlt: 'TS EXCLUSIVE',
    waText: 'Bonjour TS EXCLUSIVE, je souhaite un devis.',
    notFound: 'Page introuvable', notFoundText: "Cette page n'existe pas ou a été déplacée.", backHome: "Retour à l'accueil"
  },
  footer: {
    tagline: 'Mobilité privée et exécutive', place: 'Madagascar', navigate: 'Navigation', contact: 'Contact',
    services: 'Services', fleet: 'Flotte', destinations: 'Destinations', contactLink: 'Contact', pricing: 'Tarifs',
    rights: 'Tous droits réservés.', admin: 'Administration', top: 'Haut de page'
  },
  home: {
    seoTitle: 'TS EXCLUSIVE | Mobilité exécutive et privée à Madagascar',
    seoDesc: 'Mobilité privée et exécutive à Madagascar : transferts aéroportuaires, solutions pour entreprises, événements, voyage privé et conciergerie privée VIP.',
    lead: "Des déplacements privés aux missions exécutives, des transferts aéroportuaires aux expériences sur mesure, TS EXCLUSIVE vous accompagne à Madagascar avec une attention particulière portée à votre temps, votre confort et vos exigences.",
    greet: 'Tonga soa, bienvenue',
    statLabels: ['Véhicules', 'Passagers max', 'Assistance', 'Ar / jour dès'],
    faqLabel: 'FAQ', faqTitle: 'Questions fréquentes', testiLabel: 'Témoignages', testiTitle: 'Ils nous font confiance.',
    pillars: [
      { icon: 'shield', t: 'Discrétion', d: 'Un service respectueux de votre confidentialité.' },
      { icon: 'clock', t: 'Maîtrise du temps', d: 'Une organisation adaptée à votre programme.' },
      { icon: 'user', t: 'Attention personnalisée', d: 'Une réponse adaptée à vos besoins.' }
    ],
    title1: 'Au-delà', title2: 'du transport',
    aboutText: "TS EXCLUSIVE est née d'une ambition : proposer une expérience de mobilité et d'accompagnement où chaque détail compte.",
    servicesLabel: 'Ce que nous faisons pour vous', servicesTitle: 'Chaque trajet, sur mesure.', apartLabel: 'Un service à part',
    viewOffer: 'Voir les offres', blockLabel: 'Votre mobilité, notre engagement', fleetName: 'Notre flotte', aboutName: 'À propos', more: 'Lire la suite', callUs: 'Appelez-nous',
    fleetLabel: 'La flotte', fleetTitle: 'La flotte', fleetAll: 'Toute la flotte',
    destLabel: 'Destinations', destTitle1: 'Madagascar,', destTitle2: 'en mouvement.', destCta: 'Voir les destinations',
    expLabel: "L'expérience TS", expTitle: 'Pas seulement un transport.',
    exp: [
      ['Arrivée privée', "Votre voyage commence avant de quitter l'aéroport."],
      ['Mobilité exécutive', 'Traversez Madagascar en toute discrétion.'],
      ['Assistance personnelle', 'Chaque détail, selon votre agenda.'],
      ['Événements privés', 'Une mobilité pensée autour de votre événement.']
    ],
    trustLabel: 'Nos partenaires',
    finalTitle1: 'Où que vous alliez.', finalTitle2: 'Nous nous occupons du trajet.', quote: 'Demander un devis', contact: 'Nous contacter', thanks: 'Misaotra, merci de votre confiance.', board: 'Votre chauffeur vous attend'
  },
  destinations: {
    seoTitle: 'Destinations | TS EXCLUSIVE', label: 'Destinations', title1: 'Madagascar,', title2: 'en mouvement.', sub: 'Une mobilité vers chaque destination.',
    cta: 'Demander un devis'
  },
  services: {
    seoTitle: 'Services | TS EXCLUSIVE', label: 'Services', title: 'Services', sub: 'Une mobilité pensée pour chaque besoin.',
    learn: 'Découvrir le service', apartIntro: 'Au-delà de la mobilité',
    offersLabel: 'Offres', offersTitle: 'Nos offres', offersNote: 'Prix de départ, devis final selon véhicule, distance, durée, kilométrage, carburant et niveau de prestation.',
    conditionsLabel: 'Conditions', conditions: 'Paiement au départ avec caution remboursable · assurance de base incluse · assistance 24/7.',
    airportSteps: ['Aéroport', 'Accueil', 'Bagages', 'Véhicule', 'Hôtel'], airportLabel: 'Arrivée privée', finalTitle: 'Réservez ce service.'
  },
  fleet: { seoTitle: 'Flotte | TS EXCLUSIVE', label: 'La flotte', title: 'La flotte', sub: 'Des véhicules récents et parfaitement entretenus.', finalTitle: 'Un véhicule précis en tête ?' },
  corporate: {
    seoTitle: 'Entreprises | TS EXCLUSIVE', label: 'Entreprises', title: 'Mobilité pour entreprises', sub: 'La mobilité professionnelle, en toute sérénité.',
    whoLabel: 'Pour', who: ['Dirigeants', 'Collaborateurs', 'Partenaires', 'Consultants', 'Visiteurs internationaux', 'Délégations'],
    formulasLabel: 'Formules', formulas: [['À la demande', 'Réservation ponctuelle'], ['Dédié', 'Véhicule + chauffeur'], ['Contrat', 'Abonnement ou contrat annuel'], ['Exécutif', 'Mobilité des dirigeants']],
    perksLabel: 'Avantages', perks: ['Priorité de réservation', 'Facturation adaptée', 'Chauffeur professionnel', 'Confidentialité'],
    cta: 'Parler à un conseiller', finalTitle: 'Parlons de votre mobilité.'
  },
  hospitality: {
    seoTitle: 'Hôtellerie | TS EXCLUSIVE', label: 'Hôtellerie', title: "Au-delà de l'hôtel", sub: "Une expérience cohérente dès l'arrivée de vos clients.",
    itemsLabel: 'Pour vos clients', items: ['Transfert aéroport', 'Chauffeur privé', 'Excursions', 'Transferts professionnels', 'Événements', 'Clients VIP et dirigeants'],
    partnerLabel: 'Partenaire de mobilité', partnerTitle: 'Devenez partenaire TS EXCLUSIVE',
    cta: 'Devenir partenaire', finalTitle: 'Travaillons ensemble.'
  },
  events: {
    seoTitle: 'Événements et protocole | TS EXCLUSIVE', label: 'Événements et protocole', title: 'Un événement. Un plan de mobilité.', sub: 'Un interlocuteur unique pour vos invités.',
    forLabel: 'Nous intervenons pour', for: ['Mariages', 'Conférences et séminaires', 'Événements institutionnels', 'Événements privés', 'Tournages et productions'],
    planLabel: 'Avant chaque prestation', plan: ['Horaires', 'Lieux de prise en charge', 'Itinéraires', 'Nombre de véhicules', 'Besoins particuliers', 'Coordination'],
    cta: 'Planifier mon événement', finalTitle: 'Votre événement, notre mobilité.'
  },
  about: {
    seoTitle: 'À propos | TS EXCLUSIVE', label: 'TS EXCLUSIVE', title: "Bien plus qu'un déplacement.", sub: 'Une attention à chaque instant.',
    paragraphs: [
      "TS EXCLUSIVE est née d'une ambition : proposer une expérience de mobilité et d'accompagnement où chaque détail compte.",
      "Nous réunissons transport privé, mobilité exécutive, solutions pour entreprises, coordination événementielle et conciergerie privée au sein d'une même approche : comprendre vos besoins, anticiper les contraintes et orchestrer des solutions adaptées à vos exigences.",
      "Au-delà de la prestation, nous cultivons une relation fondée sur la confiance, la discrétion et l'attention portée à chaque client."
    ],
    commitment: "Notre engagement : faire de chaque interaction une expérience à la hauteur de vos attentes.",
    closing: "TS EXCLUSIVE, c'est une autre manière de penser le service : plus attentive, plus personnalisée et résolument tournée vers vos besoins.",
    valuesLabel: 'Nos valeurs',
    careLabel: 'Chaque véhicule', care: ['Nettoyage quotidien', 'Contrôle mécanique', 'Climatisation vérifiée', 'Documents à jour', 'Assurance appropriée'],
    finalTitle: "Vivez l'expérience TS EXCLUSIVE."
  },
  pricing: {
    seoTitle: 'Tarifs | TS EXCLUSIVE', label: 'Tarifs', title: 'Tarifs', sub: 'Des prestations haut de gamme, une tarification transparente.',
    termsLabel: 'Conditions de location',
    terms: [['Documents', "Passeport ou carte d'identité"], ['Paiement', 'Au départ + caution remboursable'], ['Assurance', 'Base incluse, option haut de gamme'], ['Kilométrage', 'Limité ou illimité selon accord'], ['Carburant', 'Même niveau au retour'], ['Restitution', 'Véhicule propre, inspection au retour'], ['Assistance', '24/7 en cas de panne'], ['Utilisation', "Pas d'usage abusif ni hors zones autorisées"]],
    finalTitle: 'Un devis personnalisé.'
  },
  contact: {
    seoTitle: 'Contact | TS EXCLUSIVE', label: 'Contact', title: 'Organisez votre trajet.', sub: 'Dites-nous où et quand.',
    phone: 'Téléphone', email: 'Email', address: 'Adresse', whatsapp: 'WhatsApp', writeWa: 'Écrire sur WhatsApp'
  },
  form: {
    infoLegend: 'Vous', name: 'Nom *', company: 'Entreprise', email: 'Email', phone: 'Téléphone', whatsapp: 'WhatsApp', whatsappHint: 'Si différent',
    tripLegend: 'Votre trajet', date: 'Date', time: 'Heure', pickup: 'Départ', dropoff: 'Destination', passengers: 'Passagers', bags: 'Bagages',
    serviceLegend: 'Service', services: ['Transfert aéroportuaire', 'Mobilité exécutive', 'Entreprises', 'Événement', 'Mise à disposition', 'Voyage privé', 'Conciergerie VIP'],
    message: 'Message', messageHint: 'Précisions, chauffeur anglophone…', send: 'Envoyer', sending: 'Envoi…', vehicle: 'Véhicule souhaité',
    okTitle: 'Demande envoyée', okText: 'Merci {name}. Nous revenons vers vous très rapidement.',
    err: "Envoi impossible. Réessayez ou écrivez-nous sur WhatsApp."
  }
}

const en: typeof fr = {
  nav: { services: 'Services', fleet: 'Fleet', experiences: 'Experiences', destinations: 'Destinations', contact: 'Contact', menu: 'Menu', close: 'Close', quote: 'Request a quote' },
  menu: {
    services: 'Services', fleet: 'Fleet', experiences: 'Experiences', destinations: 'Destinations',
    fleetItems: ['Premium SUV', '4×4 / Field mobility', 'Entire fleet'],
    experienceItems: ['The TS experience', 'Corporate', 'Hospitality', 'Events', 'About', 'Pricing'],
    follow: 'Contact'
  },
  common: {
    discover: 'Discover', explore: 'Explore vehicle', quote: 'Request a quote', contactUs: 'Contact us', requestAvailability: 'Check availability',
    passengers: 'Passengers', bags: 'Bags', included: 'Included', otherServices: 'Other services', all: 'All',
    view: 'View', zoom: 'Zoom', prev: 'Previous', next: 'Next', heroAlt: 'TS EXCLUSIVE executive vehicle', partnersAria: 'Partners', logoAlt: 'TS EXCLUSIVE',
    waText: 'Hello TS EXCLUSIVE, I would like a quote.',
    notFound: 'Page not found', notFoundText: 'This page does not exist or has moved.', backHome: 'Back to home'
  },
  footer: {
    tagline: 'Private and executive mobility', place: 'Madagascar', navigate: 'Navigation', contact: 'Contact',
    services: 'Services', fleet: 'Fleet', destinations: 'Destinations', contactLink: 'Contact', pricing: 'Pricing',
    rights: 'All rights reserved.', admin: 'Administration', top: 'Back to top'
  },
  home: {
    seoTitle: 'TS EXCLUSIVE | Executive & Private Mobility in Madagascar',
    seoDesc: 'Private and executive mobility in Madagascar: airport transfers, solutions for companies, events, private travel and private VIP concierge.',
    lead: 'From private journeys to executive missions, from airport transfers to tailor-made experiences, TS EXCLUSIVE supports you in Madagascar, with particular attention to your time, your comfort and your requirements.',
    greet: 'Tonga soa, welcome',
    statLabels: ['Vehicles', 'Max passengers', 'Support', 'Ar / day from'],
    faqLabel: 'FAQ', faqTitle: 'Frequently asked questions', testiLabel: 'Testimonials', testiTitle: 'Trusted by professionals.',
    pillars: [
      { icon: 'shield', t: 'Discretion', d: 'A service that respects your confidentiality.' },
      { icon: 'clock', t: 'Time management', d: 'An organisation adapted to your schedule.' },
      { icon: 'user', t: 'Personal attention', d: 'A response tailored to your needs.' }
    ],
    title1: 'Beyond', title2: 'Transportation',
    aboutText: 'TS EXCLUSIVE was born from an ambition: to offer a mobility and support experience where every detail counts.',
    servicesLabel: 'What we can do for you', servicesTitle: 'Every journey, tailored.', apartLabel: 'A service of its own',
    viewOffer: 'View offers', blockLabel: 'Your mobility, our commitment', fleetName: 'Our fleet', aboutName: 'About', more: 'Read more', callUs: 'Call us',
    fleetLabel: 'The fleet', fleetTitle: 'The fleet', fleetAll: 'Entire fleet',
    destLabel: 'Destinations', destTitle1: 'Madagascar', destTitle2: 'in motion.', destCta: 'View destinations',
    expLabel: 'The TS experience', expTitle: 'Not just transportation.',
    exp: [
      ['Private arrival', 'Your journey begins before you leave the airport.'],
      ['Executive mobility', 'Move through Madagascar with complete discretion.'],
      ['Personal assistance', 'Every detail handled around your schedule.'],
      ['Private events', 'Mobility designed around your event.']
    ],
    trustLabel: 'Our partners',
    finalTitle1: 'Wherever you go.', finalTitle2: 'We take care of the journey.', quote: 'Request a quote', contact: 'Contact us', thanks: 'Misaotra, thank you for your trust.', board: 'Your driver is waiting for you'
  },
  destinations: {
    seoTitle: 'Destinations | TS EXCLUSIVE', label: 'Destinations', title1: 'Madagascar', title2: 'in motion.', sub: 'Mobility to every destination.',
    cta: 'Request a quote'
  },
  services: {
    seoTitle: 'Services | TS EXCLUSIVE', label: 'Services', title: 'Services', sub: 'Mobility designed for every need.',
    learn: 'Discover the service', apartIntro: 'Beyond mobility',
    offersLabel: 'Offers', offersTitle: 'Our offers', offersNote: 'Starting prices. Final quote depends on vehicle, distance, duration, mileage, fuel and service level.',
    conditionsLabel: 'Terms', conditions: 'Payment at departure with refundable deposit · basic insurance included · 24/7 assistance.',
    airportSteps: ['Airport', 'Welcome', 'Luggage', 'Vehicle', 'Hotel'], airportLabel: 'Private arrival', finalTitle: 'Book this service.'
  },
  fleet: { seoTitle: 'Fleet | TS EXCLUSIVE', label: 'The fleet', title: 'The fleet', sub: 'Recent, perfectly maintained vehicles.', finalTitle: 'A specific vehicle in mind?' },
  corporate: {
    seoTitle: 'Corporate | TS EXCLUSIVE', label: 'Corporate', title: 'Corporate mobility', sub: 'Business mobility, with peace of mind.',
    whoLabel: 'For', who: ['Executives', 'Employees', 'Partners', 'Consultants', 'International visitors', 'Delegations'],
    formulasLabel: 'Plans', formulas: [['On demand', 'One-off booking'], ['Dedicated', 'Vehicle + driver'], ['Contract', 'Subscription or annual contract'], ['Executive', 'Executive mobility management']],
    perksLabel: 'Advantages', perks: ['Booking priority', 'Adapted invoicing', 'Professional driver', 'Confidentiality'],
    cta: 'Talk to an advisor', finalTitle: 'Let us talk about your mobility.'
  },
  hospitality: {
    seoTitle: 'Hospitality | TS EXCLUSIVE', label: 'Hospitality', title: 'Beyond the hotel', sub: 'A consistent experience from the moment your guests arrive.',
    itemsLabel: 'For your guests', items: ['Airport transfer', 'Private driver', 'Excursions', 'Business transfers', 'Events', 'VIP and executive guests'],
    partnerLabel: 'Mobility partner', partnerTitle: 'Become a TS EXCLUSIVE partner',
    cta: 'Become a partner', finalTitle: "Let's work together."
  },
  events: {
    seoTitle: 'Events & Protocol | TS EXCLUSIVE', label: 'Events & Protocol', title: 'One event. One mobility plan.', sub: 'A single point of contact for your guests.',
    forLabel: 'We take care of', for: ['Weddings', 'Conferences & seminars', 'Institutional events', 'Private events', 'Film shoots & productions'],
    planLabel: 'Before each service', plan: ['Schedules', 'Pick-up locations', 'Routes', 'Number of vehicles', 'Special requirements', 'Coordination'],
    cta: 'Plan my event', finalTitle: 'Your event, our mobility.'
  },
  about: {
    seoTitle: 'About | TS EXCLUSIVE', label: 'TS EXCLUSIVE', title: 'Much more than a journey.', sub: 'Attention at every moment.',
    paragraphs: [
      'TS EXCLUSIVE was born from an ambition: to offer a mobility and support experience where every detail counts.',
      'We bring together private transport, executive mobility, solutions for companies, event coordination and private concierge services in a single approach: understanding your needs, anticipating constraints and orchestrating solutions adapted to your requirements.',
      'Beyond the service itself, we nurture a relationship built on trust, discretion and attention to every client.'
    ],
    commitment: 'Our commitment: to make every interaction an experience worthy of your expectations.',
    closing: 'TS EXCLUSIVE is another way of thinking about service: more attentive, more personal and resolutely focused on your needs.',
    valuesLabel: 'Our values',
    careLabel: 'Every vehicle', care: ['Daily cleaning', 'Mechanical inspection', 'Air-conditioning checked', 'Up-to-date documents', 'Appropriate insurance'],
    finalTitle: 'Experience TS EXCLUSIVE.'
  },
  pricing: {
    seoTitle: 'Pricing | TS EXCLUSIVE', label: 'Pricing', title: 'Pricing', sub: 'Premium services, transparent pricing.',
    termsLabel: 'Rental terms',
    terms: [['Documents', 'Passport or ID card'], ['Payment', 'At departure + refundable deposit'], ['Insurance', 'Basic included, premium option'], ['Mileage', 'Limited or unlimited by agreement'], ['Fuel', 'Same level on return'], ['Return', 'Clean vehicle, inspection on return'], ['Assistance', '24/7 in case of breakdown'], ['Use', 'No misuse or driving outside authorised areas']],
    finalTitle: 'A personalised quote.'
  },
  contact: {
    seoTitle: 'Contact | TS EXCLUSIVE', label: 'Contact', title: 'Plan your journey.', sub: 'Tell us where and when.',
    phone: 'Phone', email: 'Email', address: 'Address', whatsapp: 'WhatsApp', writeWa: 'Write on WhatsApp'
  },
  form: {
    infoLegend: 'You', name: 'Name *', company: 'Company', email: 'Email', phone: 'Phone', whatsapp: 'WhatsApp', whatsappHint: 'If different',
    tripLegend: 'Your trip', date: 'Date', time: 'Time', pickup: 'Pick-up', dropoff: 'Destination', passengers: 'Passengers', bags: 'Bags',
    serviceLegend: 'Service', services: ['Airport transfer', 'Executive mobility', 'Corporate', 'Event', 'Chauffeur on demand', 'Private travel', 'VIP concierge'],
    message: 'Message', messageHint: 'Details, English-speaking driver…', send: 'Send', sending: 'Sending…', vehicle: 'Requested vehicle',
    okTitle: 'Request sent', okText: 'Thank you {name}. We will get back to you very shortly.',
    err: 'Unable to send. Please try again or write to us on WhatsApp.'
  }
}

export type Lang = 'fr' | 'en'
export const messages = { fr, en }
