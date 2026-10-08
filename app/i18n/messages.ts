// Textes statiques du site (FR / EN). Volontairement courts : le site mise sur l'image.
// Les contenus gérés depuis l'admin (services, flotte, offres, FAQ...) sont traduits en base (colonne "en").

const fr = {
  brandTag: 'Executive & Private Mobility',
  nav: { services: 'Services', fleet: 'Fleet', experiences: 'Expériences', destinations: 'Destinations', contact: 'Contact', menu: 'Menu', close: 'Fermer', quote: 'Demander un devis' },
  menu: {
    services: 'Services', fleet: 'Fleet', experiences: 'Expériences', destinations: 'Destinations',
    fleetItems: ['Premium SUV', '4×4 / Field Mobility', 'Toute la flotte'],
    experienceItems: ['The TS Experience', 'Corporate', 'Hospitality', 'Événements', 'À propos', 'Tarifs'],
    follow: 'Contact'
  },
  common: {
    discover: 'Découvrir', explore: 'Explorer le véhicule', quote: 'Demander un devis', contactUs: 'Nous contacter', requestAvailability: 'Demander la disponibilité',
    passengers: 'Passagers', bags: 'Bagages', from: 'À partir de', included: 'Inclus', otherServices: 'Autres services', all: 'Tous',
    notFound: 'Page introuvable', notFoundText: "Cette page n'existe pas ou a été déplacée.", backHome: "Retour à l'accueil"
  },
  footer: {
    tagline: 'Private Executive Mobility', place: 'Madagascar', navigate: 'Navigation', contact: 'Contact',
    services: 'Services', fleet: 'Fleet', destinations: 'Destinations', contactLink: 'Contact', pricing: 'Tarifs',
    rights: 'Tous droits réservés.', admin: 'Administration'
  },
  home: {
    seoTitle: 'TS EXCLUSIVE | Executive & Private Mobility à Madagascar',
    seoDesc: 'Mobilité privée et corporate avec chauffeur à Madagascar : transferts aéroport, mise à disposition, événements, délégations.',
    lead: "Votre chauffeur vous attend à l'arrivée. Nous nous occupons du reste.",
    greet: 'Tonga soa, bienvenue',
    statLabels: ['Véhicules', 'Passagers max', 'Assistance', 'Ar / jour dès'],
    faqLabel: 'FAQ', faqTitle: 'Questions fréquentes', testiLabel: 'Témoignages', testiTitle: 'Ils nous font confiance.',
    whyLabel: 'Why TS EXCLUSIVE', whyTitle: 'Built around your journey.',
    why: [
      ['01', 'Reliability', 'Une organisation maîtrisée.'],
      ['02', 'Professional drivers', 'Chauffeurs sélectionnés et formés.'],
      ['03', 'Discretion', 'Un service respectueux de la confidentialité.'],
      ['04', 'Flexibility', 'Des solutions adaptées à votre agenda.'],
      ['05', 'Local expertise', 'La connaissance de Madagascar et de ses destinations.']
    ],
    pillars: [
      { icon: 'shield', t: 'Discrétion', d: 'Votre confidentialité est notre priorité.' },
      { icon: 'clock', t: 'Ponctualité', d: "Toujours à l'heure, sur tous vos itinéraires." },
      { icon: 'car', t: 'Confort', d: 'Des véhicules premium et un service soigné.' },
      { icon: 'user', t: 'Service personnalisé', d: 'Une solution adaptée à chaque besoin.' },
      { icon: 'diamond', t: 'Fiabilité', d: 'Un service maîtrisé de bout en bout.' }
    ],
    kicker: 'TS EXCLUSIVE', title1: 'More than', title2: 'a ride.', sub: 'Private executive mobility, Madagascar', cta: 'Discover TS EXCLUSIVE', scroll: 'Scroll to explore',
    introTitle1: 'Private mobility,', introTitle2: 'redefined.',
    introText: "Dirigeants, voyageurs, entreprises, familles : un chauffeur ponctuel, discret, qui connaît la route. Le reste, c'est notre métier.",
    meta: [['Madagascar', 'Antananarivo'], ['Executive mobility', 'Private driver'], ['Service', '24/7']],
    servicesLabel: 'Services', servicesTitle: 'Chaque trajet, sur mesure.',
    fleetLabel: 'The fleet', fleetTitle: 'The fleet', fleetAll: 'Toute la flotte',
    destLabel: 'Destinations', destTitle1: 'Madagascar', destTitle2: 'in motion.', destCta: 'Voir les destinations',
    expLabel: 'The TS Experience', expTitle: 'Not just transportation.',
    exp: [
      ['01', 'Private arrival', "Votre voyage commence avant de quitter l'aéroport."],
      ['02', 'Executive mobility', 'Traversez Madagascar en toute discrétion.'],
      ['03', 'Personal assistance', 'Chaque détail, selon votre agenda.'],
      ['04', 'Private events', 'Une mobilité pensée autour de votre événement.']
    ],
    trustLabel: 'Trusted by', trust: ['Hotels', 'Corporates', 'DMCs', 'Private clients', 'Events'],
    finalTitle1: 'Wherever you go.', finalTitle2: 'We take care of the journey.', quote: 'Demander un devis', contact: 'Nous contacter', thanks: 'Misaotra, merci de votre confiance.', board: 'Votre chauffeur vous attend'
  },
  destinations: {
    seoTitle: 'Destinations | TS EXCLUSIVE', label: 'Destinations', title1: 'Madagascar', title2: 'in motion.', sub: 'Une mobilité vers chaque destination.',
    lines: ['Private transfers. Executive mobility. City & business.', 'Private transfers. Executive mobility. Island experiences.', 'Private transfers. Executive mobility. Baobab alley & sunsets.', 'Private transfers. Executive mobility. Highlands & thermal town.'],
    cta: 'Demander un devis'
  },
  services: {
    seoTitle: 'Services | TS EXCLUSIVE', label: 'Services', title: 'Services', sub: 'Une mobilité pensée pour chaque besoin.',
    offersLabel: 'Offres', offersTitle: 'Nos offres', offersNote: 'Prix de départ, devis final selon véhicule, distance, durée, kilométrage, carburant et niveau de prestation.',
    conditionsLabel: 'Conditions', conditions: 'Paiement au départ avec caution remboursable · assurance de base incluse · assistance 24/7.',
    airportSteps: ['Aéroport', 'Accueil', 'Bagages', 'Véhicule', 'Hôtel'], airportLabel: 'Private arrival', finalTitle: 'Réservez ce service.'
  },
  fleet: { seoTitle: 'Fleet | TS EXCLUSIVE', label: 'The fleet', title: 'The fleet', sub: 'Des véhicules récents et parfaitement entretenus.', finalTitle: 'Un véhicule précis en tête ?' },
  corporate: {
    seoTitle: 'Corporate | TS EXCLUSIVE', label: 'Corporate', title: 'Corporate mobility', sub: 'La mobilité professionnelle, en toute sérénité.',
    whoLabel: 'Pour', who: ['Dirigeants', 'Collaborateurs', 'Partenaires', 'Consultants', 'Visiteurs internationaux', 'Délégations'],
    formulasLabel: 'Formules', formulas: [['On-demand', 'Réservation ponctuelle'], ['Dedicated', 'Véhicule + chauffeur'], ['Contract', 'Abonnement ou contrat annuel'], ['Executive', 'Mobilité des dirigeants']],
    perksLabel: 'Avantages', perks: ['Priorité de réservation', 'Facturation adaptée', 'Chauffeur professionnel', 'Confidentialité'],
    cta: 'Parler à un conseiller', finalTitle: 'Parlons de votre mobilité.'
  },
  hospitality: {
    seoTitle: 'Hospitality | TS EXCLUSIVE', label: 'Hospitality', title: 'Beyond the hotel', sub: 'Une expérience cohérente dès l\'arrivée de vos clients.',
    itemsLabel: 'Pour vos clients', items: ['Airport Transfer', 'Private Driver', 'Excursions', 'Business Transfers', 'Events', 'VIP / Executive Guests'],
    partnerLabel: 'Mobility partner', partnerTitle: 'Become a TS EXCLUSIVE partner', partners: ['Hotels & Resorts', 'Travel agencies', 'DMCs', 'Corporates', 'Event agencies', 'Institutions'],
    cta: 'Devenir partenaire', finalTitle: 'Travaillons ensemble.'
  },
  events: {
    seoTitle: 'Events & Protocol | TS EXCLUSIVE', label: 'Events & Protocol', title: 'One event. One mobility plan.', sub: 'Un interlocuteur unique pour vos invités.',
    forLabel: 'Nous intervenons pour', for: ['Mariages', 'Conférences & séminaires', 'Événements institutionnels', 'Événements privés', 'Tournages & productions'],
    planLabel: 'Avant chaque prestation', plan: ['Horaires', 'Lieux de prise en charge', 'Itinéraires', 'Nombre de véhicules', 'Besoins particuliers', 'Coordination'],
    cta: 'Planifier mon événement', finalTitle: 'Votre événement, notre mobilité.'
  },
  about: {
    seoTitle: 'About | TS EXCLUSIVE', label: 'TS EXCLUSIVE', title: 'Another way to travel.', sub: 'Une expérience de mobilité premium, fiable, confortable et discrète.',
    valuesLabel: 'Cinq exigences', values: ['Élégance', 'Sécurité', 'Ponctualité', 'Discrétion', 'Confort'],
    careLabel: 'Chaque véhicule', care: ['Nettoyage quotidien', 'Contrôle mécanique', 'Climatisation vérifiée', 'Documents à jour', 'Assurance appropriée'],
    finalTitle: "Vivez l'expérience TS EXCLUSIVE."
  },
  pricing: {
    seoTitle: 'Tarifs | TS EXCLUSIVE', label: 'Tarifs', title: 'Pricing', sub: 'Des prestations premium, une tarification transparente.',
    termsLabel: 'Conditions de location',
    terms: [['Documents', "Passeport ou carte d'identité"], ['Paiement', 'Au départ + caution remboursable'], ['Assurance', 'Base incluse, option premium'], ['Kilométrage', 'Limité ou illimité selon accord'], ['Carburant', 'Même niveau au retour'], ['Restitution', 'Véhicule propre, inspection au retour'], ['Assistance', '24/7 en cas de panne'], ['Utilisation', 'Pas d\'usage abusif ni hors zones autorisées']],
    finalTitle: 'Un devis personnalisé.'
  },
  contact: {
    seoTitle: 'Contact | TS EXCLUSIVE', label: 'Contact', title: 'Plan your journey.', sub: 'Dites-nous où et quand.',
    phone: 'Téléphone', email: 'Email', address: 'Adresse', whatsapp: 'WhatsApp', writeWa: 'Écrire sur WhatsApp'
  },
  form: {
    infoLegend: 'Vous', name: 'Nom *', company: 'Entreprise', email: 'Email', phone: 'Téléphone', whatsapp: 'WhatsApp', whatsappHint: 'Si différent',
    tripLegend: 'Votre trajet', date: 'Date', time: 'Heure', pickup: 'Départ', dropoff: 'Destination', passengers: 'Passagers', bags: 'Bagages',
    serviceLegend: 'Service', services: ['Transfert aéroport', 'Executive Mobility', 'Corporate', 'Événement', 'Délégation', 'Long terme'],
    message: 'Message', messageHint: 'Précisions, chauffeur anglophone…', send: 'Envoyer', sending: 'Envoi…', vehicle: 'Véhicule souhaité',
    okTitle: 'Demande envoyée', okText: 'Merci {name}. Nous revenons vers vous très rapidement.',
    err: "Envoi impossible. Réessayez ou écrivez-nous sur WhatsApp."
  }
}

const en: typeof fr = {
  brandTag: 'Executive & Private Mobility',
  nav: { services: 'Services', fleet: 'Fleet', experiences: 'Experiences', destinations: 'Destinations', contact: 'Contact', menu: 'Menu', close: 'Close', quote: 'Request a quote' },
  menu: {
    services: 'Services', fleet: 'Fleet', experiences: 'Experiences', destinations: 'Destinations',
    fleetItems: ['Premium SUV', '4×4 / Field Mobility', 'Entire fleet'],
    experienceItems: ['The TS Experience', 'Corporate', 'Hospitality', 'Events', 'About', 'Pricing'],
    follow: 'Contact'
  },
  common: {
    discover: 'Discover', explore: 'Explore vehicle', quote: 'Request a quote', contactUs: 'Contact us', requestAvailability: 'Check availability',
    passengers: 'Passengers', bags: 'Bags', from: 'From', included: 'Included', otherServices: 'Other services', all: 'All',
    notFound: 'Page not found', notFoundText: 'This page does not exist or has moved.', backHome: 'Back to home'
  },
  footer: {
    tagline: 'Private Executive Mobility', place: 'Madagascar', navigate: 'Navigation', contact: 'Contact',
    services: 'Services', fleet: 'Fleet', destinations: 'Destinations', contactLink: 'Contact', pricing: 'Pricing',
    rights: 'All rights reserved.', admin: 'Administration'
  },
  home: {
    seoTitle: 'TS EXCLUSIVE | Executive & Private Mobility in Madagascar',
    seoDesc: 'Private and corporate chauffeur mobility in Madagascar: airport transfers, chauffeur hire, events and delegations.',
    lead: 'Your driver is waiting at arrivals. We take care of the rest.',
    greet: 'Tonga soa, welcome',
    statLabels: ['Vehicles', 'Max passengers', 'Support', 'Ar / day from'],
    faqLabel: 'FAQ', faqTitle: 'Frequently asked questions', testiLabel: 'Testimonials', testiTitle: 'Trusted by professionals.',
    whyLabel: 'Why TS EXCLUSIVE', whyTitle: 'Built around your journey.',
    why: [
      ['01', 'Reliability', 'A well-run organisation.'],
      ['02', 'Professional drivers', 'Selected and trained drivers.'],
      ['03', 'Discretion', 'A service that respects confidentiality.'],
      ['04', 'Flexibility', 'Solutions adapted to your schedule.'],
      ['05', 'Local expertise', 'Knowledge of Madagascar and its destinations.']
    ],
    pillars: [
      { icon: 'shield', t: 'Discretion', d: 'Your privacy is our priority.' },
      { icon: 'clock', t: 'Punctuality', d: 'Always on time, on every route.' },
      { icon: 'car', t: 'Comfort', d: 'Premium vehicles and a careful service.' },
      { icon: 'user', t: 'Personalised service', d: 'A solution for every need.' },
      { icon: 'diamond', t: 'Reliability', d: 'A service managed end to end.' }
    ],
    kicker: 'TS EXCLUSIVE', title1: 'More than', title2: 'a ride.', sub: 'Private executive mobility, Madagascar', cta: 'Discover TS EXCLUSIVE', scroll: 'Scroll to explore',
    introTitle1: 'Private mobility,', introTitle2: 'redefined.',
    introText: 'Executives, travellers, companies, families: a punctual, discreet driver who knows the road. The rest is our job.',
    meta: [['Madagascar', 'Antananarivo'], ['Executive mobility', 'Private driver'], ['Service', '24/7']],
    servicesLabel: 'Services', servicesTitle: 'Every journey, tailored.',
    fleetLabel: 'The fleet', fleetTitle: 'The fleet', fleetAll: 'Entire fleet',
    destLabel: 'Destinations', destTitle1: 'Madagascar', destTitle2: 'in motion.', destCta: 'View destinations',
    expLabel: 'The TS Experience', expTitle: 'Not just transportation.',
    exp: [
      ['01', 'Private arrival', 'Your journey begins before you leave the airport.'],
      ['02', 'Executive mobility', 'Move through Madagascar with complete discretion.'],
      ['03', 'Personal assistance', 'Every detail handled around your schedule.'],
      ['04', 'Private events', 'Mobility designed around your event.']
    ],
    trustLabel: 'Trusted by', trust: ['Hotels', 'Corporates', 'DMCs', 'Private clients', 'Events'],
    finalTitle1: 'Wherever you go.', finalTitle2: 'We take care of the journey.', quote: 'Request a quote', contact: 'Contact us', thanks: 'Misaotra, thank you for your trust.', board: 'Your driver is waiting for you'
  },
  destinations: {
    seoTitle: 'Destinations | TS EXCLUSIVE', label: 'Destinations', title1: 'Madagascar', title2: 'in motion.', sub: 'Mobility to every destination.',
    lines: ['Private transfers. Executive mobility. City & business.', 'Private transfers. Executive mobility. Island experiences.', 'Private transfers. Executive mobility. Baobab alley & sunsets.', 'Private transfers. Executive mobility. Highlands & thermal town.'],
    cta: 'Request a quote'
  },
  services: {
    seoTitle: 'Services | TS EXCLUSIVE', label: 'Services', title: 'Services', sub: 'Mobility designed for every need.',
    offersLabel: 'Offers', offersTitle: 'Our offers', offersNote: 'Starting prices. Final quote depends on vehicle, distance, duration, mileage, fuel and service level.',
    conditionsLabel: 'Terms', conditions: 'Payment at departure with refundable deposit · basic insurance included · 24/7 assistance.',
    airportSteps: ['Airport', 'Welcome', 'Luggage', 'Vehicle', 'Hotel'], airportLabel: 'Private arrival', finalTitle: 'Book this service.'
  },
  fleet: { seoTitle: 'Fleet | TS EXCLUSIVE', label: 'The fleet', title: 'The fleet', sub: 'Recent, perfectly maintained vehicles.', finalTitle: 'A specific vehicle in mind?' },
  corporate: {
    seoTitle: 'Corporate | TS EXCLUSIVE', label: 'Corporate', title: 'Corporate mobility', sub: 'Business mobility, with peace of mind.',
    whoLabel: 'For', who: ['Executives', 'Employees', 'Partners', 'Consultants', 'International visitors', 'Delegations'],
    formulasLabel: 'Plans', formulas: [['On-demand', 'One-off booking'], ['Dedicated', 'Vehicle + driver'], ['Contract', 'Subscription or annual contract'], ['Executive', 'Executive mobility management']],
    perksLabel: 'Advantages', perks: ['Booking priority', 'Adapted invoicing', 'Professional driver', 'Confidentiality'],
    cta: 'Talk to an advisor', finalTitle: 'Let us talk about your mobility.'
  },
  hospitality: {
    seoTitle: 'Hospitality | TS EXCLUSIVE', label: 'Hospitality', title: 'Beyond the hotel', sub: 'A consistent experience from the moment your guests arrive.',
    itemsLabel: 'For your guests', items: ['Airport Transfer', 'Private Driver', 'Excursions', 'Business Transfers', 'Events', 'VIP / Executive Guests'],
    partnerLabel: 'Mobility partner', partnerTitle: 'Become a TS EXCLUSIVE partner', partners: ['Hotels & Resorts', 'Travel agencies', 'DMCs', 'Corporates', 'Event agencies', 'Institutions'],
    cta: 'Become a partner', finalTitle: "Let's work together."
  },
  events: {
    seoTitle: 'Events & Protocol | TS EXCLUSIVE', label: 'Events & Protocol', title: 'One event. One mobility plan.', sub: 'A single point of contact for your guests.',
    forLabel: 'We take care of', for: ['Weddings', 'Conferences & seminars', 'Institutional events', 'Private events', 'Film shoots & productions'],
    planLabel: 'Before each service', plan: ['Schedules', 'Pick-up locations', 'Routes', 'Number of vehicles', 'Special requirements', 'Coordination'],
    cta: 'Plan my event', finalTitle: 'Your event, our mobility.'
  },
  about: {
    seoTitle: 'About | TS EXCLUSIVE', label: 'TS EXCLUSIVE', title: 'Another way to travel.', sub: 'A premium, reliable, comfortable and discreet mobility experience.',
    valuesLabel: 'Five commitments', values: ['Elegance', 'Safety', 'Punctuality', 'Discretion', 'Comfort'],
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
    serviceLegend: 'Service', services: ['Airport transfer', 'Executive Mobility', 'Corporate', 'Event', 'Delegation', 'Long term'],
    message: 'Message', messageHint: 'Details, English-speaking driver…', send: 'Send', sending: 'Sending…', vehicle: 'Requested vehicle',
    okTitle: 'Request sent', okText: 'Thank you {name}. We will get back to you very shortly.',
    err: 'Unable to send. Please try again or write to us on WhatsApp.'
  }
}

export const messages = { fr, en }
export type Lang = keyof typeof messages
