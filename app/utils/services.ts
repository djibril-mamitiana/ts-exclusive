// Services : seuls les services « classiques » sont numérotés (01, 02...). Un service « à part » (ex : conciergerie) n'a pas de numéro.
export const numberedServices = (all: any[]) => all.filter(s => !s.apart)
export const apartService = (all: any[]) => all.find(s => s.apart)
export const serviceNumber = (all: any[], s: any) => {
  const i = numberedServices(all).findIndex(x => x.id === s.id)
  return i < 0 ? 0 : i + 1
}
// « Titre : détail » -> { t, d }. Un point sans deux-points n'a pas de détail.
export const splitPoint = (b: string) => {
  const hit = /^(.{3,70}?)\s*:\s+(.+)$/.exec(b)
  return hit ? { t: hit[1], d: hit[2] } : { t: b, d: '' }
}
export const paragraphsOf = (text: string) => String(text || '').split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
