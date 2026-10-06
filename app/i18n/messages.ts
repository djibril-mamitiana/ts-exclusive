// Textes statiques du site en français et en anglais.
// Les contenus gérés depuis l'admin (services, flotte, offres, FAQ...) sont traduits en base (colonne "en").

const fr = {
  brandTag: 'Executive & Private Mobility',
  nav: {
    home: 'Accueil', services: 'Nos services', fleet: 'Notre flotte', corporate: 'Corporate',
    hospitality: 'Hospitality', events: 'Événements', about: 'À propos', contact: 'Contact',
    quote: 'Demander un devis', whatsapp: 'WhatsApp', menu: 'Menu'
  },
  common: {
    learnMore: 'En savoir plus', quote: 'Demander un devis', discoverServices: 'Découvrir tous nos services',
    otherServices: 'Autres services', included: 'Ce que comprend le service', requestAvailability: 'Demander la disponibilité',
    passengers: 'passagers', bags: 'bagages', usage: 'Usage', from: 'À partir de', mostWanted: 'Le plus demandé',
    all: 'Tous', notFound: 'Page introuvable', notFoundText: "La page que vous cherchez n'existe pas ou a été déplacée.", backHome: "Retour à l'accueil"
  },
  footer: {
    blurb: "Plus qu'un trajet : un service de mobilité privée et corporate à Madagascar.",
    services: 'Services', partners: 'Partenaires', contact: 'Contact', hotels: 'Hôtels', agencies: 'Agences de voyage',
    corporates: 'Entreprises', events: 'Événementiel', fleet: 'Notre flotte', pricing: 'Tarifs',
    rights: 'Tous droits réservés.', admin: 'Espace administrateur',
    execMobility: 'Executive Mobility', airport: 'Transferts aéroport', corporateMobility: 'Corporate Mobility',
    eventsProtocol: 'Événements & Protocole', disposal: 'Mise à disposition'
  },
  home: {
    seoTitle: 'TS EXCLUSIVE | Executive & Private Mobility à Madagascar',
    seoDesc: 'Mobilité privée et corporate avec chauffeur à Madagascar : transferts aéroport, mise à disposition, événements, délégations.',
    heroTitle1: 'More', heroTitle2: 'than a ride.',
    heroLead: 'Un service exclusif pour vos déplacements à Madagascar.',
    asideTitle: 'Madagascar with confidence',
    aside: ['Transferts aéroportuaires', 'Mobilité corporate', 'Événements', 'Délégations'],
    promise: [
      { icon: 'shield', t: 'Discrétion', d: 'Votre confidentialité est notre priorité.' },
      { icon: 'clock', t: 'Ponctualité', d: "Toujours à l'heure, sur tous vos itinéraires." },
      { icon: 'car', t: 'Confort', d: 'Des véhicules premium et un service soigné.' },
      { icon: 'user', t: 'Service personnalisé', d: 'Une solution adaptée à chaque besoin.' },
      { icon: 'diamond', t: 'Fiabilité', d: 'Un service maîtrisé de bout en bout.' }
    ],
    servicesEyebrow: 'Nos services', servicesTitle: 'Une mobilité pensée pour chaque besoin.',
    servicesText: 'Des solutions sur mesure pour les entreprises, hôtels, institutions et voyageurs exigeants.',
    promiseEyebrow: 'La promesse', promiseTitle1: "Plus qu'un véhicule.", promiseTitle2: 'Un service.',
    promiseText: "TS EXCLUSIVE accompagne les dirigeants, entreprises, institutions, hôtels et voyageurs internationaux dans leurs déplacements à Madagascar, avec un service pensé autour de la ponctualité, de la discrétion et de la personnalisation.",
    destEyebrow: 'Destinations', destTitle: 'Explore Madagascar with confidence.',
    destText: 'Nous assurons votre mobilité vers toutes les destinations de Madagascar, des villes principales aux sites les plus exclusifs.',
    destButton: 'Nos destinations',
    cities: ['Antananarivo', 'Nosy Be', 'Morondava', 'Antsirabe'],
    whyEyebrow: 'Why TS EXCLUSIVE', whyTitle: 'Built around your journey.',
    why: [
      ['01', 'Reliability', 'Une organisation maîtrisée.'],
      ['02', 'Professional drivers', 'Chauffeurs sélectionnés et formés.'],
      ['03', 'Discretion', 'Un service respectueux de la confidentialité.'],
      ['04', 'Flexibility', 'Des solutions adaptées à votre agenda.'],
      ['05', 'Local expertise', 'Une connaissance du contexte et des destinations à Madagascar.']
    ],
    whyCta: "Prêt à voyager l'esprit tranquille ?",
    partnersEyebrow: 'Partners', partnersTitle: 'Un réseau de partenaires de confiance.', partnerButton: 'Devenir partenaire',
    partners: ['Hotels & Resorts', 'Travel agencies', 'DMCs', 'Corporates', 'Event agencies', 'International organizations', 'Institutions'],
    testiEyebrow: 'Testimonials', testiTitle: 'Trusted by professionals.',
    faqEyebrow: 'FAQ', faqTitle: 'Questions fréquentes',
    cta: 'Plan your journey. Une réponse rapide, un service sur mesure.'
  },
  services: {
    seoTitle: 'Nos services | TS EXCLUSIVE', eyebrow: 'Nos services', title: 'Une mobilité pensée pour chaque besoin.',
    lead: "De votre transfert à l'aéroport à la mise à disposition d'un véhicule pour plusieurs jours, des prestations conçues pour les particuliers, entreprises, touristes, institutions et organisateurs d'événements.",
    offersEyebrow: 'Nos offres', offersTitle: 'Des prestations premium, une tarification claire.',
    offersLead: 'Les tarifs ci-dessous sont des prix de départ. Le devis final dépend du véhicule, de la distance, de la durée, du kilométrage, du carburant et du niveau de prestation.',
    conditions: 'Conditions : paiement au départ avec caution remboursable · assurance de base incluse (option premium) · restitution avec le même niveau de carburant · assistance 24/7.',
    cta: 'Un besoin particulier ? Parlons-en.',
    detailCta: 'Réservez ce service en quelques minutes.',
    airportTitle: 'Your journey starts before you leave the airport.',
    steps: ['Aéroport', 'Accueil', 'Bagages', 'Véhicule', 'Hôtel']
  },
  fleet: {
    seoTitle: 'Notre flotte | TS EXCLUSIVE', eyebrow: 'Notre flotte', title: 'Une flotte sélectionnée pour votre confort.',
    lead: 'Des véhicules récents et parfaitement entretenus, organisés par usage. Nous privilégions la fiabilité, le confort, la disponibilité des pièces et la qualité du service après-vente.',
    cta: "Besoin d'un véhicule précis ?"
  },
  corporate: {
    seoTitle: 'Corporate | TS EXCLUSIVE', eyebrow: 'TS EXCLUSIVE Corporate', title: 'Une solution de mobilité pour votre entreprise.',
    lead: 'Entreprises, ONG, institutions, cabinets de conseil, banques, compagnies minières, ambassades, hôtels et organisations internationales : chaque déplacement compte.',
    cta1: 'Parler à un conseiller', proEyebrow: 'Pour les professionnels', proTitle: 'Un service de transport fiable pour…',
    who: ['Vos dirigeants', 'Vos collaborateurs', 'Vos partenaires', 'Vos consultants', 'Vos visiteurs internationaux', 'Vos délégations'],
    formulasTitle: 'Des formules adaptées',
    formulas: [
      ['On-demand', 'Réservation ponctuelle pour vos besoins du moment.'],
      ['Dedicated', 'Un véhicule avec chauffeur selon votre agenda.'],
      ['Contract', 'Abonnement ou contrat annuel pour les besoins récurrents.'],
      ['Executive', 'Gestion de la mobilité de vos dirigeants.']
    ],
    benefitsTitle: 'Les avantages TS EXCLUSIVE',
    benefits: [
      ['clock', 'Priorité de réservation', 'Vos déplacements professionnels sont anticipés.'],
      ['briefcase', 'Facturation adaptée', 'Facturation mensuelle possible selon les modalités contractuelles.'],
      ['user', 'Chauffeur professionnel', "Une présentation et une attitude adaptées à l'environnement professionnel."],
      ['shield', 'Confidentialité', 'Vos déplacements et informations sont traités avec discrétion.']
    ],
    cta: 'Parlez à notre équipe Corporate.'
  },
  hospitality: {
    seoTitle: 'Hospitality | TS EXCLUSIVE', eyebrow: 'Hôtels & Hospitality', title: 'Extend your hospitality beyond the hotel.',
    lead: 'Offrez à vos clients une expérience cohérente dès leur arrivée à Madagascar.', cta1: 'Devenir partenaire',
    itemsEyebrow: 'Ce que nous faisons pour vos clients', itemsTitle: 'TS EXCLUSIVE accompagne vos clients pour :',
    items: ['Airport Transfer', 'Private Driver', 'Excursions', 'Business Transfers', 'Events', 'VIP / Executive Guests'],
    partnerEyebrow: 'Mobility partner', partnerTitle: 'Become a TS EXCLUSIVE Mobility Partner',
    partners: ['Hotels & Resorts', 'Travel agencies', 'DMCs', 'Corporates', 'Event agencies', 'International organizations', 'Institutions'],
    cta: 'Devenez partenaire de TS EXCLUSIVE.'
  },
  events: {
    seoTitle: 'Événements & Protocole | TS EXCLUSIVE', eyebrow: 'Events & Protocol', title: 'One event. One mobility plan.',
    lead: 'Un interlocuteur unique pour coordonner la mobilité de vos invités, avec élégance, ponctualité et discrétion.',
    cta1: 'Planifier mon événement', doTitle: 'Nous intervenons pour', doLead: 'Chaque événement mérite une mobilité à la hauteur.',
    events: [
      ['Mariages', 'Transport des mariés, familles et invités VIP.'],
      ['Conférences & séminaires', 'Transferts des intervenants, dirigeants et participants.'],
      ['Événements institutionnels', 'Déplacements de délégations et personnalités.'],
      ['Événements privés', 'Soirées, cérémonies et réceptions.'],
      ['Tournages & productions', 'Transport des équipes et intervenants.']
    ],
    servicesTitle: 'Services',
    services: ['Airport Transfers', 'Guest Transfers', 'Delegation Mobility', 'Protocol', 'Shuttle Service', 'Executive Vehicles'],
    planEyebrow: 'Une organisation sur mesure', planTitle: 'Avant chaque prestation, nous définissons avec vous :',
    plan: ['Les horaires', 'Les lieux de prise en charge', 'Les itinéraires', 'Le nombre de véhicules', 'Les besoins particuliers', 'Les modalités de coordination'],
    cta: "Organisons le transport de votre événement."
  },
  about: {
    seoTitle: 'À propos | TS EXCLUSIVE', eyebrow: 'À propos', title: 'Une autre façon de se déplacer.',
    lead: "Nous ne louons pas simplement des véhicules. Nous proposons une expérience de mobilité premium, pensée pour celles et ceux qui recherchent un service fiable, confortable et discret.",
    valuesTitle: 'Cinq exigences',
    values: [
      ['Élégance', 'Des véhicules soigneusement sélectionnés et une présentation irréprochable.'],
      ['Sécurité', 'Des véhicules entretenus, assurés et soumis à des contrôles réguliers.'],
      ['Ponctualité', 'Un engagement précis sur les horaires et la prise en charge.'],
      ['Discrétion', 'Le respect absolu de la confidentialité et de la tranquillité de nos clients.'],
      ['Confort', 'Une expérience de déplacement pensée dans les moindres détails.']
    ],
    whyEyebrow: 'Pourquoi TS EXCLUSIVE ?', whyTitle: "Parce qu'un véhicule premium ne suffit pas.",
    whyText: "La véritable différence réside dans la qualité de l'expérience : des chauffeurs sélectionnés pour leur professionnalisme, leur présentation, leur ponctualité, leur courtoisie et leur discrétion.",
    vehiclesTitle: 'Des véhicules impeccables',
    checks: ['Nettoyage quotidien', 'Désinfection régulière', 'Contrôle mécanique', 'Contrôle des pneumatiques', 'Vérification de la climatisation', 'Équipements de sécurité', 'Documents à jour', 'Assurance appropriée'],
    journeyTitle: 'Une expérience suivie de bout en bout',
    journey: [
      ['Avant la prise en charge', ['Confirmation de la réservation', 'Identification du chauffeur', 'Numéro du véhicule', 'Heure et lieu de rendez-vous']],
      ['Pendant le trajet', ['Conduite souple', 'Ponctualité', 'Confort', 'Courtoisie et discrétion']],
      ['Après la prestation', ['Message de remerciement', 'Évaluation', 'Suivi de satisfaction']]
    ],
    cta: "Vivez l'expérience TS EXCLUSIVE."
  },
  pricing: {
    seoTitle: 'Nos tarifs | TS EXCLUSIVE', eyebrow: 'Nos tarifs', title: 'Des prestations premium, avec une tarification transparente.',
    lead: 'Les tarifs sont établis sur devis et peuvent varier selon le véhicule, la distance, la durée, le kilométrage, le carburant et le niveau de prestation.',
    condTitle: 'Conditions de location',
    conditions: [
      ['Documents requis', "Passeport ou carte d'identité."],
      ['Paiement & caution', 'Paiement au départ + caution remboursable.'],
      ['Assurance', 'Assurance de base incluse. Option assurance premium disponible.'],
      ['Kilométrage', 'Limité ou illimité selon accord.'],
      ['Carburant', 'Restitution avec le même niveau qu\'au départ.'],
      ['Restitution', 'Véhicule propre et en bon état, inspection au retour.'],
      ['Assistance 24/7', "En cas de panne, aide immédiate."],
      ['Utilisation', 'Interdiction d\'usage abusif ou hors zones autorisées.']
    ],
    cta: 'Obtenez un devis personnalisé.'
  },
  contact: {
    seoTitle: 'Demande de devis | TS EXCLUSIVE', eyebrow: 'Contact & devis', title: 'Plan your journey.',
    lead: 'Dites-nous où et quand. Nous revenons vers vous rapidement avec une proposition adaptée.',
    phone: 'Téléphone', whatsapp: 'WhatsApp', writeWa: 'Écrire sur WhatsApp', email: 'Email', address: 'Adresse',
    note: 'Les tarifs sont établis sur devis selon le véhicule, la distance, la durée, le kilométrage, le carburant et le niveau de prestation.'
  },
  form: {
    infoLegend: 'Vos informations', name: 'Nom *', company: 'Entreprise', email: 'Email', phone: 'Téléphone', whatsapp: 'WhatsApp',
    whatsappHint: 'Si différent du téléphone', tripLegend: 'Votre déplacement', date: 'Date', time: 'Heure', pickup: 'Lieu de départ',
    dropoff: 'Destination', passengers: 'Passagers', bags: 'Bagages', serviceLegend: 'Service',
    services: ['Transfert aéroport', 'Executive Mobility', 'Corporate', 'Événement', 'Délégation', 'Long terme'],
    message: 'Message', messageHint: 'Précisions, besoins particuliers, chauffeur anglophone…',
    send: 'Envoyer ma demande', sending: 'Envoi…', vehicle: 'Véhicule souhaité',
    okTitle: 'Demande envoyée', okText: 'Merci {name}. Notre équipe revient vers vous très rapidement avec une proposition.',
    err: "Impossible d'envoyer la demande. Réessayez ou contactez-nous sur WhatsApp."
  }
}

const en: typeof fr = {
  brandTag: 'Executive & Private Mobility',
  nav: {
    home: 'Home', services: 'Services', fleet: 'Fleet', corporate: 'Corporate',
    hospitality: 'Hospitality', events: 'Events', about: 'About', contact: 'Contact',
    quote: 'Request a quote', whatsapp: 'WhatsApp', menu: 'Menu'
  },
  common: {
    learnMore: 'Learn more', quote: 'Request a quote', discoverServices: 'Discover all our services',
    otherServices: 'Other services', included: 'What the service includes', requestAvailability: 'Check availability',
    passengers: 'passengers', bags: 'bags', usage: 'Best for', from: 'From', mostWanted: 'Most requested',
    all: 'All', notFound: 'Page not found', notFoundText: 'The page you are looking for does not exist or has moved.', backHome: 'Back to home'
  },
  footer: {
    blurb: 'More than a ride: private and corporate mobility in Madagascar.',
    services: 'Services', partners: 'Partners', contact: 'Contact', hotels: 'Hotels', agencies: 'Travel agencies',
    corporates: 'Corporates', events: 'Events', fleet: 'Our fleet', pricing: 'Pricing',
    rights: 'All rights reserved.', admin: 'Admin area',
    execMobility: 'Executive Mobility', airport: 'Airport transfers', corporateMobility: 'Corporate Mobility',
    eventsProtocol: 'Events & Protocol', disposal: 'Chauffeur on demand'
  },
  home: {
    seoTitle: 'TS EXCLUSIVE | Executive & Private Mobility in Madagascar',
    seoDesc: 'Private and corporate chauffeur mobility in Madagascar: airport transfers, chauffeur hire, events and delegations.',
    heroTitle1: 'More', heroTitle2: 'than a ride.',
    heroLead: 'An exclusive service for your travel across Madagascar.',
    asideTitle: 'Madagascar with confidence',
    aside: ['Airport transfers', 'Corporate mobility', 'Events', 'Delegations'],
    promise: [
      { icon: 'shield', t: 'Discretion', d: 'Your privacy is our priority.' },
      { icon: 'clock', t: 'Punctuality', d: 'Always on time, on every route.' },
      { icon: 'car', t: 'Comfort', d: 'Premium vehicles and a careful service.' },
      { icon: 'user', t: 'Personalised service', d: 'A solution for every need.' },
      { icon: 'diamond', t: 'Reliability', d: 'A service managed end to end.' }
    ],
    servicesEyebrow: 'Our services', servicesTitle: 'Mobility designed for every need.',
    servicesText: 'Tailor-made solutions for companies, hotels, institutions and demanding travellers.',
    promiseEyebrow: 'Our promise', promiseTitle1: 'More than a vehicle.', promiseTitle2: 'A service.',
    promiseText: 'TS EXCLUSIVE supports executives, companies, institutions, hotels and international travellers across Madagascar, with a service built on punctuality, discretion and personalisation.',
    destEyebrow: 'Destinations', destTitle: 'Explore Madagascar with confidence.',
    destText: 'We provide your mobility to every destination in Madagascar, from the main cities to the most exclusive sites.',
    destButton: 'Our destinations',
    cities: ['Antananarivo', 'Nosy Be', 'Morondava', 'Antsirabe'],
    whyEyebrow: 'Why TS EXCLUSIVE', whyTitle: 'Built around your journey.',
    why: [
      ['01', 'Reliability', 'A well-run organisation.'],
      ['02', 'Professional drivers', 'Selected and trained drivers.'],
      ['03', 'Discretion', 'A service that respects confidentiality.'],
      ['04', 'Flexibility', 'Solutions adapted to your schedule.'],
      ['05', 'Local expertise', 'Knowledge of the context and destinations in Madagascar.']
    ],
    whyCta: 'Ready to travel with peace of mind?',
    partnersEyebrow: 'Partners', partnersTitle: 'A network of trusted partners.', partnerButton: 'Become a partner',
    partners: ['Hotels & Resorts', 'Travel agencies', 'DMCs', 'Corporates', 'Event agencies', 'International organizations', 'Institutions'],
    testiEyebrow: 'Testimonials', testiTitle: 'Trusted by professionals.',
    faqEyebrow: 'FAQ', faqTitle: 'Frequently asked questions',
    cta: 'Plan your journey. A quick answer, a tailor-made service.'
  },
  services: {
    seoTitle: 'Our services | TS EXCLUSIVE', eyebrow: 'Our services', title: 'Mobility designed for every need.',
    lead: 'From your airport transfer to a chauffeur-driven vehicle for several days, services designed for individuals, companies, tourists, institutions and event organisers.',
    offersEyebrow: 'Our offers', offersTitle: 'Premium services, clear pricing.',
    offersLead: 'The prices below are starting prices. The final quote depends on the vehicle, distance, duration, mileage, fuel and service level.',
    conditions: 'Terms: payment at departure with a refundable deposit · basic insurance included (premium option) · return with the same fuel level · 24/7 assistance.',
    cta: 'A specific need? Let us talk.',
    detailCta: 'Book this service in a few minutes.',
    airportTitle: 'Your journey starts before you leave the airport.',
    steps: ['Airport', 'Welcome', 'Luggage', 'Vehicle', 'Hotel']
  },
  fleet: {
    seoTitle: 'Our fleet | TS EXCLUSIVE', eyebrow: 'Our fleet', title: 'A fleet selected for your comfort.',
    lead: 'Recent, perfectly maintained vehicles, organised by use. We favour reliability, comfort, spare-part availability and after-sales quality.',
    cta: 'Need a specific vehicle?'
  },
  corporate: {
    seoTitle: 'Corporate | TS EXCLUSIVE', eyebrow: 'TS EXCLUSIVE Corporate', title: 'A mobility solution for your company.',
    lead: 'Companies, NGOs, institutions, consulting firms, banks, mining companies, embassies, hotels and international organisations: every trip counts.',
    cta1: 'Talk to an advisor', proEyebrow: 'For professionals', proTitle: 'A reliable transport service for…',
    who: ['Your executives', 'Your employees', 'Your partners', 'Your consultants', 'Your international visitors', 'Your delegations'],
    formulasTitle: 'Tailored plans',
    formulas: [
      ['On-demand', 'One-off booking for your needs of the moment.'],
      ['Dedicated', 'A vehicle with a driver, following your schedule.'],
      ['Contract', 'Subscription or annual contract for recurring needs.'],
      ['Executive', 'Mobility management for your executives.']
    ],
    benefitsTitle: 'The TS EXCLUSIVE advantages',
    benefits: [
      ['clock', 'Booking priority', 'Your business trips are planned ahead.'],
      ['briefcase', 'Adapted invoicing', 'Monthly invoicing possible under contract terms.'],
      ['user', 'Professional driver', 'Appearance and attitude suited to a business environment.'],
      ['shield', 'Confidentiality', 'Your trips and information are handled with discretion.']
    ],
    cta: 'Talk to our Corporate team.'
  },
  hospitality: {
    seoTitle: 'Hospitality | TS EXCLUSIVE', eyebrow: 'Hotels & Hospitality', title: 'Extend your hospitality beyond the hotel.',
    lead: 'Offer your guests a consistent experience from the moment they arrive in Madagascar.', cta1: 'Become a partner',
    itemsEyebrow: 'What we do for your guests', itemsTitle: 'TS EXCLUSIVE supports your guests with:',
    items: ['Airport Transfer', 'Private Driver', 'Excursions', 'Business Transfers', 'Events', 'VIP / Executive Guests'],
    partnerEyebrow: 'Mobility partner', partnerTitle: 'Become a TS EXCLUSIVE Mobility Partner',
    partners: ['Hotels & Resorts', 'Travel agencies', 'DMCs', 'Corporates', 'Event agencies', 'International organizations', 'Institutions'],
    cta: 'Become a TS EXCLUSIVE partner.'
  },
  events: {
    seoTitle: 'Events & Protocol | TS EXCLUSIVE', eyebrow: 'Events & Protocol', title: 'One event. One mobility plan.',
    lead: 'A single point of contact to coordinate your guests\' mobility, with elegance, punctuality and discretion.',
    cta1: 'Plan my event', doTitle: 'We take care of', doLead: 'Every event deserves matching mobility.',
    events: [
      ['Weddings', 'Transport for the couple, families and VIP guests.'],
      ['Conferences & seminars', 'Transfers for speakers, executives and attendees.'],
      ['Institutional events', 'Movements of delegations and public figures.'],
      ['Private events', 'Parties, ceremonies and receptions.'],
      ['Film shoots & productions', 'Transport for crews and contributors.']
    ],
    servicesTitle: 'Services',
    services: ['Airport Transfers', 'Guest Transfers', 'Delegation Mobility', 'Protocol', 'Shuttle Service', 'Executive Vehicles'],
    planEyebrow: 'Tailor-made organisation', planTitle: 'Before each service, we agree with you on:',
    plan: ['Schedules', 'Pick-up locations', 'Routes', 'Number of vehicles', 'Special requirements', 'Coordination arrangements'],
    cta: 'Let us organise your event transport.'
  },
  about: {
    seoTitle: 'About | TS EXCLUSIVE', eyebrow: 'About', title: 'Another way to travel.',
    lead: 'We do not simply rent vehicles. We offer a premium mobility experience, designed for those who want a reliable, comfortable and discreet service.',
    valuesTitle: 'Five commitments',
    values: [
      ['Elegance', 'Carefully selected vehicles and an impeccable presentation.'],
      ['Safety', 'Maintained, insured vehicles subject to regular checks.'],
      ['Punctuality', 'A firm commitment on schedules and pick-up.'],
      ['Discretion', 'Absolute respect for our clients\' privacy and peace.'],
      ['Comfort', 'A travel experience designed down to the smallest detail.']
    ],
    whyEyebrow: 'Why TS EXCLUSIVE?', whyTitle: 'Because a premium vehicle is not enough.',
    whyText: 'The real difference lies in the quality of the experience: drivers selected for their professionalism, appearance, punctuality, courtesy and discretion.',
    vehiclesTitle: 'Impeccable vehicles',
    checks: ['Daily cleaning', 'Regular disinfection', 'Mechanical inspection', 'Tyre inspection', 'Air-conditioning check', 'Safety equipment', 'Up-to-date documents', 'Appropriate insurance'],
    journeyTitle: 'An experience followed end to end',
    journey: [
      ['Before pick-up', ['Booking confirmation', 'Driver identification', 'Vehicle number', 'Meeting time and place']],
      ['During the trip', ['Smooth driving', 'Punctuality', 'Comfort', 'Courtesy and discretion']],
      ['After the service', ['Thank-you message', 'Rating', 'Satisfaction follow-up']]
    ],
    cta: 'Experience TS EXCLUSIVE.'
  },
  pricing: {
    seoTitle: 'Pricing | TS EXCLUSIVE', eyebrow: 'Pricing', title: 'Premium services, transparent pricing.',
    lead: 'Prices are quoted on request and may vary depending on the vehicle, distance, duration, mileage, fuel and service level.',
    condTitle: 'Rental terms',
    conditions: [
      ['Required documents', 'Passport or ID card.'],
      ['Payment & deposit', 'Payment at departure + refundable deposit.'],
      ['Insurance', 'Basic insurance included. Premium insurance option available.'],
      ['Mileage', 'Limited or unlimited by agreement.'],
      ['Fuel', 'Return with the same level as at departure.'],
      ['Return', 'Clean vehicle in good condition, inspection on return.'],
      ['24/7 assistance', 'In case of breakdown, immediate help.'],
      ['Use', 'No misuse or driving outside authorised areas.']
    ],
    cta: 'Get a personalised quote.'
  },
  contact: {
    seoTitle: 'Request a quote | TS EXCLUSIVE', eyebrow: 'Contact & quote', title: 'Plan your journey.',
    lead: 'Tell us where and when. We will get back to you quickly with a suitable proposal.',
    phone: 'Phone', whatsapp: 'WhatsApp', writeWa: 'Write on WhatsApp', email: 'Email', address: 'Address',
    note: 'Prices are quoted on request according to the vehicle, distance, duration, mileage, fuel and service level.'
  },
  form: {
    infoLegend: 'Your details', name: 'Name *', company: 'Company', email: 'Email', phone: 'Phone', whatsapp: 'WhatsApp',
    whatsappHint: 'If different from phone', tripLegend: 'Your trip', date: 'Date', time: 'Time', pickup: 'Pick-up location',
    dropoff: 'Destination', passengers: 'Passengers', bags: 'Bags', serviceLegend: 'Service',
    services: ['Airport transfer', 'Executive Mobility', 'Corporate', 'Event', 'Delegation', 'Long term'],
    message: 'Message', messageHint: 'Details, special requirements, English-speaking driver…',
    send: 'Send my request', sending: 'Sending…', vehicle: 'Requested vehicle',
    okTitle: 'Request sent', okText: 'Thank you {name}. Our team will get back to you very shortly with a proposal.',
    err: 'Unable to send the request. Please try again or contact us on WhatsApp.'
  }
}

export const messages = { fr, en }
export type Lang = keyof typeof messages
