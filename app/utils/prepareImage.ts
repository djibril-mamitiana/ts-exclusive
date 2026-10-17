// Prépare une photo avant l'envoi (navigateur uniquement) : 2400 px maximum, JPEG ou WebP si l'image est transparente.
// Vercel refuse les envois de plus de 4,5 Mo : une photo de téléphone de 8 Mo est donc réduite sans perte visible.
const LIMIT = 3.8 * 1024 * 1024

const toBlob = (canvas: HTMLCanvasElement, type: string, quality: number) =>
  new Promise<Blob>((resolve, reject) => canvas.toBlob(b => (b ? resolve(b) : reject(new Error('Conversion impossible'))), type, quality))

export async function prepareImage(file: File, maxSide = 2400): Promise<File> {
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) return file // GIF et SVG restent tels quels
  let bitmap: ImageBitmap
  try { bitmap = await createImageBitmap(file) } catch { return file }
  const { width, height } = bitmap
  const scale = Math.min(1, maxSide / Math.max(width, height))
  if (scale === 1 && file.size <= 1.5 * 1024 * 1024) { bitmap.close(); return file }

  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(width * scale))
  canvas.height = Math.max(1, Math.round(height * scale))
  const ctx = canvas.getContext('2d')!
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close()

  // transparence (détourage) : on garde alors un WebP, sinon un JPEG plus léger
  let alpha = false
  if (file.type !== 'image/jpeg') {
    const probe = document.createElement('canvas')
    probe.width = probe.height = 64
    const pctx = probe.getContext('2d')!
    pctx.drawImage(canvas, 0, 0, 64, 64)
    const px = pctx.getImageData(0, 0, 64, 64).data
    for (let i = 3; i < px.length; i += 4) if (px[i] < 250) { alpha = true; break }
  }
  const type = alpha ? 'image/webp' : 'image/jpeg'
  let quality = 0.86
  let blob = await toBlob(canvas, type, quality)
  while (blob.size > LIMIT && quality > 0.5) { quality -= 0.1; blob = await toBlob(canvas, type, quality) }
  if (scale === 1 && blob.size >= file.size) return file // déjà bien optimisée
  return new File([blob], file.name.replace(/\.[^.]+$/, '') + (alpha ? '.webp' : '.jpg'), { type })
}

// Envoie une image dans la médiathèque et renvoie son adresse (/api/media/12.jpg)
export async function uploadImage(file: File): Promise<string> {
  const prepared = await prepareImage(file)
  const fd = new FormData()
  fd.append('file', prepared)
  const res = await $fetch<{ url: string }>('/api/admin/media', { method: 'POST', body: fd })
  return res.url
}
