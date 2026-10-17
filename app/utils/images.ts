// Photographies (Unsplash, licence libre). Pour changer une image : remplacer l'identifiant ci-dessous
// ou utiliser une image téléversée dans la médiathèque de l'admin (ex : /api/media/12).
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=72`

export const sized = (src: string, w: number) => (src.includes('images.unsplash.com') ? `${src}&w=${w}` : src)

export const photos = {
  // Maybach S-Class, format paysage, voiture à gauche (Pexels, licence libre) : même cadrage que le visuel validé
  hero: '/img/hero-maybach.jpg',
  suv: u('photo-1776043677298-5525a774cbf1'),
  night: u('photo-1588956264627-5c98be74e381'),
  chauffeur: u('photo-1788178243376-7df65939eb55'),
  doorHandle: u('photo-1564705604144-51593412c133'),
  airport: u('photo-1687992176093-6417a93fa3d0'),
  terminal: u('photo-1553619948-505cc1cdc320'),
  hotel: u('photo-1677129667171-92abd8740fa3'),
  lobby: u('photo-1742844552193-2fd3425cd26d'),
  events: u('photo-1561835661-ebd6f6283571'),
  baobabsRoad: u('photo-1570742544137-3a469196c32b'),
  baobabsSunset: u('photo-1564198729838-cb82ee0c733c'),
  beach: u('photo-1672841828459-bc913fdcd995'),
  beachAerial: u('photo-1600582910964-5b7c109e6868'),
  antananarivo: u('photo-1624272909636-4995421e37e7'),
  antananarivoChurch: u('photo-1563656353898-febc9270a0f6'),
  hills: u('photo-1699622595982-42fb5bb9ad22'),
  interior: '/img/interieur.jpg'
}

// Image associée à chaque service (par slug), utilisée si le service n'a pas d'image propre
export const serviceImages: Record<string, string> = {
  'transferts-aeroport': photos.airport,
  'executive-mobility': photos.chauffeur,
  'corporate-mobility': photos.hotel,
  'evenements-protocole': photos.events,
  'mise-a-disposition': photos.night,
  'voyage-prive': photos.baobabsRoad,
  'conciergerie-privee-vip': photos.lobby
}

// Emplacements d'images gérés depuis l'admin (Images du site). Chaque clé a une image par défaut (ci-dessus) ;
// une image choisie dans l'admin la remplace sans toucher au code.
export type ImageSlot = { key: string; group: string; label: string; where: string; def: string; hint?: string }

const wide = 'Format paysage, 2000 px de large minimum'
export const imageSlots: ImageSlot[] = [
  { key: 'home.hero', group: 'Accueil', label: 'Photo principale', where: 'Haut de la page d’accueil', def: photos.hero, hint: 'Paysage, véhicule à gauche de l’image (le titre se place à droite), 2400 px de large' },
  { key: 'home.about', group: 'Accueil', label: 'Tuile « À propos »', where: 'Bloc clair de l’accueil, à droite de la flotte', def: photos.chauffeur, hint: 'Format carré ou paysage, 1000 px minimum' },
  { key: 'home.final', group: 'Accueil', label: 'Bandeau final', where: 'Appel à l’action en bas de l’accueil', def: photos.night, hint: wide },
  { key: 'services.hero', group: 'Page Services', label: 'Photo d’en-tête', where: 'Haut de la page Services', def: photos.chauffeur, hint: wide },
  { key: 'services.final', group: 'Page Services', label: 'Bandeau final', where: 'Bas de la page Services', def: photos.night, hint: wide },
  { key: 'flotte.hero', group: 'Page Flotte', label: 'Photo d’en-tête', where: 'Haut de la page Flotte', def: photos.night, hint: wide },
  { key: 'flotte.final', group: 'Page Flotte', label: 'Bandeau final', where: 'Bas de la page Flotte', def: photos.hero, hint: wide },
  { key: 'tarifs.hero', group: 'Page Tarifs', label: 'Photo d’en-tête', where: 'Haut de la page Tarifs', def: photos.night, hint: wide },
  { key: 'tarifs.final', group: 'Page Tarifs', label: 'Bandeau final', where: 'Bas de la page Tarifs', def: photos.hero, hint: wide },
  { key: 'about.hero', group: 'Page À propos', label: 'Photo d’en-tête', where: 'Haut de la page À propos', def: photos.doorHandle, hint: wide },
  { key: 'about.final', group: 'Page À propos', label: 'Bandeau final', where: 'Bas de la page À propos', def: photos.hero, hint: wide },
  { key: 'destinations.final', group: 'Page Destinations', label: 'Bandeau final', where: 'Bas de la page Destinations (les grandes images des villes se gèrent plus bas)', def: photos.baobabsRoad, hint: wide },
  { key: 'contact.photo', group: 'Page Contact', label: 'Photo latérale', where: 'Sous les coordonnées, page Contact', def: photos.airport, hint: 'Format paysage, 1200 px minimum' },
  { key: 'corporate.hero', group: 'Page Corporate', label: 'Photo d’en-tête', where: 'Haut de la page Corporate', def: photos.hotel, hint: wide },
  { key: 'corporate.photo', group: 'Page Corporate', label: 'Photo du texte', where: 'À côté du texte, page Corporate', def: photos.lobby, hint: 'Format paysage, 1200 px minimum' },
  { key: 'corporate.final', group: 'Page Corporate', label: 'Bandeau final', where: 'Bas de la page Corporate', def: photos.hotel, hint: wide },
  { key: 'hospitality.hero', group: 'Page Hospitality', label: 'Photo d’en-tête', where: 'Haut de la page Hospitality', def: photos.lobby, hint: wide },
  { key: 'hospitality.photo', group: 'Page Hospitality', label: 'Photo du texte', where: 'À côté du texte, page Hospitality', def: photos.airport, hint: 'Format paysage, 1200 px minimum' },
  { key: 'hospitality.final', group: 'Page Hospitality', label: 'Bandeau final', where: 'Bas de la page Hospitality', def: photos.hotel, hint: wide },
  { key: 'evenements.hero', group: 'Page Événements', label: 'Photo d’en-tête', where: 'Haut de la page Événements', def: photos.events, hint: wide },
  { key: 'evenements.final', group: 'Page Événements', label: 'Bandeau final', where: 'Bas de la page Événements', def: photos.events, hint: wide },
  { key: 'menu.fleet', group: 'Menu plein écran', label: 'Aperçu « Flotte »', where: 'Image qui s’affiche au survol des liens de la flotte', def: photos.hero, hint: 'Format paysage, 1000 px minimum' },
  { key: 'menu.exp', group: 'Menu plein écran', label: 'Aperçu « Expérience »', where: 'Survol du lien Expérience', def: photos.airport, hint: 'Format paysage, 1000 px minimum' },
  { key: 'menu.corp', group: 'Menu plein écran', label: 'Aperçu « Corporate / Hospitality »', where: 'Survol des liens Corporate et Hospitality', def: photos.hotel, hint: 'Format paysage, 1000 px minimum' },
  { key: 'menu.events', group: 'Menu plein écran', label: 'Aperçu « Événements »', where: 'Survol du lien Événements', def: photos.events, hint: 'Format paysage, 1000 px minimum' },
  { key: 'menu.about', group: 'Menu plein écran', label: 'Aperçu « À propos »', where: 'Survol du lien À propos', def: photos.chauffeur, hint: 'Format paysage, 1000 px minimum' },
  { key: 'menu.price', group: 'Menu plein écran', label: 'Aperçu « Tarifs »', where: 'Survol du lien Tarifs', def: photos.night, hint: 'Format paysage, 1000 px minimum' },
  { key: 'logo.dark', group: 'Logo et partage', label: 'Logo sur fond sombre', where: 'En-tête, menu, écran d’intro et espace de gestion', def: '/img/logo-light.svg', hint: 'SVG ou PNG transparent, lettres claires, environ 5 fois plus large que haut' },
  { key: 'logo.light', group: 'Logo et partage', label: 'Logo sur fond clair', where: 'Pied de page, bloc « Tonga soa » et page de connexion', def: '/img/logo.svg', hint: 'SVG ou PNG transparent, lettres foncées, environ 5 fois plus large que haut' },
  { key: 'seo.share', group: 'Logo et partage', label: 'Image de partage', where: 'Aperçu du lien sur WhatsApp, Facebook et Google', def: '/img/baobabs.jpg', hint: 'Paysage 1200 × 630 px' },
  { key: 'login.bg', group: 'Logo et partage', label: 'Fond de la page de connexion', where: 'Page de connexion de cet espace de gestion', def: photos.hero, hint: wide }
]
const slotDefaults = Object.fromEntries(imageSlots.map(s => [s.key, s.def])) as Record<string, string>
export const slotDefault = (key: string) => slotDefaults[key] || photos.hero
