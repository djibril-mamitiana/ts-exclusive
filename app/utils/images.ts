// Photographies (Unsplash, licence libre). Pour changer une image : remplacer l'identifiant ci-dessous
// ou utiliser une image téléversée dans la médiathèque de l'admin (ex : /api/media/12).
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=72`

export const sized = (src: string, w: number) => (src.includes('images.unsplash.com') ? `${src}&w=${w}` : src)

export const photos = {
  hero: u('photo-1776043677298-5525a774cbf1'),
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
  'tourisme-conciergerie': photos.baobabsRoad
}
