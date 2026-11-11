// Sert une image stockée en base (téléversée depuis l'admin). L'adresse peut porter une extension : /api/media/12.jpg
// Variante allégée : /api/media/12.webp?w=1400 → redimensionnée à la largeur utile (jamais agrandie) et compressée en WebP.
// Chaque variante est calculée une fois puis mise en cache un an (réseau de diffusion et navigateur). Si sharp est indisponible,
// échoue ou ne gagne rien, l'image d'origine est servie telle quelle.
const STEP = 200
const MIN_W = 400
const MAX_W = 2400

// Variantes déjà calculées, gardées en mémoire dans l'instance (les plus anciennes sortent en premier)
const MAX_CACHE = 48 * 1024 * 1024
const cache = new Map<string, Buffer>()
let cached = 0
const remember = (key: string, buf: Buffer) => {
  cache.set(key, buf)
  cached += buf.length
  for (const [k, v] of cache) {
    if (cached <= MAX_CACHE) break
    cache.delete(k)
    cached -= v.length
  }
}

export default defineEventHandler(async (event) => {
  const raw = String(getRouterParam(event, 'id') || '')
  const id = parseInt(raw, 10)
  if (!id) throw createError({ statusCode: 404 })
  setHeader(event, 'Cache-Control', 'public, max-age=31536000, s-maxage=31536000, immutable')

  const wantsWebp = /\.webp$/i.test(raw)
  // largeurs arrondies au palier supérieur : peu de variantes en cache, jamais plus petit que demandé
  const asked = Number(getQuery(event).w)
  const w = Number.isFinite(asked) && asked > 0 ? Math.min(MAX_W, Math.max(MIN_W, Math.ceil(asked / STEP) * STEP)) : 0
  const key = `${id}:${w}`
  const hit = wantsWebp ? cache.get(key) : undefined
  if (hit) {
    setHeader(event, 'Content-Type', 'image/webp')
    return hit
  }

  const [m] = await query('select mime, data from media where id = $1', [id])
  if (!m) throw createError({ statusCode: 404 })

  if (wantsWebp && /^image\/(jpeg|png|webp)$/.test(m.mime)) {
    try {
      const sharp = (await import('sharp')).default
      let img = sharp(m.data, { failOn: 'none' }).rotate()
      if (w) img = img.resize({ width: w, withoutEnlargement: true })
      const out = await img.webp({ quality: 78, alphaQuality: 90, effort: 4 }).toBuffer()
      if (out.length < m.data.length) {
        remember(key, out)
        setHeader(event, 'Content-Type', 'image/webp')
        return out
      }
    } catch {
      // repli : image d'origine
    }
  }
  setHeader(event, 'Content-Type', m.mime)
  return m.data
})
