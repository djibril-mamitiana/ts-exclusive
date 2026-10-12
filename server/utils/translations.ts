// Traductions anglaises du contenu de départ (appliquées une seule fois, si la colonne "en" est vide)
export async function applySeedTranslations() {
  // les services (7) sont traduits dans server/utils/finalContent.ts

  const offers: Record<string, any> = {
    'Longue route': { name: 'Long road', price: '250,000 Ar / day', target: 'Companies, expatriates, major road projects, international organisations, NGOs',
      options: ['Several months', 'Unlimited mileage', 'Full insurance', '24/7 assistance', 'GPS', 'Replacement in case of breakdown', 'Experienced driver'] },
    'Mobilité': { name: 'Mobility', price: '300,000 Ar / day', target: 'National and international tourists, NGOs in the field, field projects, individuals',
      options: ['Short term: day, weekend or week', 'Delivery to hotel or airport', 'Full insurance', '24/7 assistance', 'GPS', 'Itinerary suggestions', 'Experienced driver'] },
    'Prestige': { name: 'Prestige', price: '400,000 Ar / day', target: 'VIPs, individuals',
      options: ['Tailor-made pack', 'High-end vehicles', '24/7 assistance', 'GPS', 'Personalised accessories', 'With or without driver', 'Experienced driver'] }
  }
  for (const [name, en] of Object.entries(offers)) {
    await query("update offers set en = $1 where name = $2 and (en is null or en = '{}'::jsonb)", [JSON.stringify(en), name])
  }

  const vehicles: Record<string, any> = {
    'Toyota Prado TLX': { category: 'Premium SUV', tagline: 'Power. Elegance. Absolute confidence.', description: 'The perfect blend of legendary robustness and modern refinement: the ideal SUV for demanding families, professionals and explorers.', usage: 'Families, long distances, public figures' },
    'Ford Everest XLT': { category: 'Premium SUV', tagline: 'Powerful, comfortable, ready for adventure.', description: 'Powerful and economical diesel engine, spacious and comfortable: perfect for long trips, family journeys and excursions.', usage: 'Family trips, tourist excursions' },
    'Jeep Wrangler Rubicon': { category: '4×4 / Field Mobility', tagline: 'Master of the roads, king of the trails.', description: '3.6 L V6 engine, 4×4 transmission and Rock-Trac gearbox for off-road driving, with refined handling.', usage: 'Adventure, off-road, private stays' },
    'Toyota Land Cruiser 76': { category: '4×4 / Field Mobility', tagline: 'The perfect blend of prestige and robustness.', description: 'Ideal for VIP transport, professional missions and high-end tours, on every road in Madagascar.', usage: 'Field missions, tours, VIP' },
    'Toyota Hilux 2.4GD Comfort': { category: '4×4 / Field Mobility', tagline: 'Double Cab 6-MT 4x4', description: 'Robust by nature, reliable by excellence: performance, comfort and durability on every terrain.', usage: 'Field projects, NGOs, missions' },
    'Toyota Hilux 2.7L Standard': { category: '4×4 / Field Mobility', tagline: 'Double Cab 5-MT 4x4', description: 'Powerful petrol engine and precise manual transmission: a balance of performance, simplicity and endurance.', usage: 'Field projects, NGOs, missions' }
  }
  for (const [name, en] of Object.entries(vehicles)) {
    await query("update vehicles set en = $1 where name = $2 and (en is null or en = '{}'::jsonb)", [JSON.stringify(en), name])
  }

  const faqs: Record<string, any> = {
    'Comment réserver un véhicule avec chauffeur ?': { question: 'How do I book a vehicle with a driver?', answer: "Fill in the online quote request or write to us on WhatsApp. We confirm availability, price and the driver's identity." },
    "Proposez-vous des transferts depuis l'aéroport ?": { question: 'Do you offer airport transfers?', answer: 'Yes. We provide the welcome at Ivato airport, luggage assistance and the transfer to your hotel or residence, as well as the return.' },
    'Peut-on réserver un véhicule pour plusieurs jours ?': { question: 'Can I book a vehicle for several days?', answer: 'Yes. Chauffeur hire is available for half a day, a full day, an evening or several days, and even several months with the Long road offer.' },
    'Proposez-vous des contrats pour entreprises ?': { question: 'Do you offer corporate contracts?', answer: 'Yes: on demand, chauffeur provision, corporate subscription and annual contract, with adapted invoicing.' },
    'Pouvez-vous gérer une délégation ?': { question: 'Can you handle a delegation?', answer: 'Yes. We coordinate vehicles, schedules, routes and welcome for delegations and international visitors.' },
    'Travaillez-vous avec les hôtels ?': { question: 'Do you work with hotels?', answer: 'Yes, we are a partner of hotels and travel agencies. Contact us to become a partner.' },
    'Quels moyens de paiement acceptez-vous ?': { question: 'Which payment methods do you accept?', answer: 'Payment is made at departure, with a refundable deposit for rentals. Monthly invoicing is possible for companies under contract.' },
    'Peut-on demander un chauffeur anglophone ?': { question: 'Can I request an English-speaking driver?', answer: 'Yes, mention it in your request and we will assign an English-speaking driver depending on availability.' }
  }
  for (const [q, en] of Object.entries(faqs)) {
    await query("update faqs set en = $1 where question = $2 and (en is null or en = '{}'::jsonb)", [JSON.stringify(en), q])
  }
}
