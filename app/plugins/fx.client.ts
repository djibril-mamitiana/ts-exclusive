// Effets avancés (navigateur uniquement) : défilement fluide, titres mot à mot, texte qui s'éclaire au scroll,
// boutons magnétiques, image qui suit la souris, lumière du hero, transition de pages en rideau.
// Règles : jamais de contenu masqué durablement (filets de sécurité), transform / opacity uniquement,
// tout est coupé si l'utilisateur préfère moins de mouvement.
import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
  const router = useRouter()

  /* ---------- Défilement fluide (Lenis) ---------- */
  let lenis: Lenis | null = null
  if (!reduce && !location.pathname.startsWith('/admin')) {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, smoothWheel: true })
    ;(window as any).__lenis = lenis
    const raf = (t: number) => { lenis!.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
  }

  /* ---------- Titres mot à mot ---------- */
  const pendingSplit = new Set<HTMLElement>()
  const scrubs: { el: HTMLElement; words: HTMLElement[] }[] = []
  const progresses = new Set<HTMLElement>()

  function wrapWords(root: HTMLElement, mask: boolean) {
    let i = 0
    const words: HTMLElement[] = []
    const walk = (node: Node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const parts = (child.textContent || '').split(/(\s+)/)
          const frag = document.createDocumentFragment()
          parts.forEach((part) => {
            if (!part) return
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return }
            if (mask) {
              const outer = document.createElement('span'); outer.className = 'w'
              const inner = document.createElement('span'); inner.className = 'wi'
              inner.style.setProperty('--i', String(i++)); inner.textContent = part
              outer.appendChild(inner); frag.appendChild(outer)
            } else {
              const s = document.createElement('span'); s.className = 'sw'; s.textContent = part
              frag.appendChild(s); words.push(s)
            }
          })
          node.replaceChild(frag, child)
        } else if (child.nodeType === 1 && (child as HTMLElement).tagName !== 'BR') walk(child)
      })
    }
    walk(root)
    return words
  }

  function applySplit(el: HTMLElement) {
    if (el.dataset.fx) return
    el.dataset.fx = 'split'
    wrapWords(el, true)
    el.classList.add('split')
    const r = el.getBoundingClientRect()
    // setTimeout plutôt que requestAnimationFrame : le titre se révèle aussi dans un onglet ouvert en arrière-plan
    if (r.top < window.innerHeight * 0.96) setTimeout(() => el.classList.add('is-in'), 60)
    else pendingSplit.add(el)
  }

  function applyScrub(el: HTMLElement) {
    if (el.dataset.fx) return
    el.dataset.fx = 'scrub'
    const words = wrapWords(el, false)
    words.forEach(w => (w.style.opacity = '.2'))
    scrubs.push({ el, words })
  }

  function scan() {
    document.querySelectorAll<HTMLElement>('main .ts-title, main .ts-display, main .ts-pagehero h1, main .ts-final h2').forEach(applySplit)
    document.querySelectorAll<HTMLElement>('main [data-scrub]').forEach(applyScrub)
    document.querySelectorAll<HTMLElement>('main [data-progress]').forEach(el => progresses.add(el))
    onScroll()
  }

  /* ---------- Boucle de scroll : révélations, texte scrubbé, progression ---------- */
  let tick = false
  function onScroll() {
    if (tick) return
    tick = true
    requestAnimationFrame(() => {
      tick = false
      const vh = window.innerHeight
      pendingSplit.forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.94) { el.classList.add('is-in'); pendingSplit.delete(el) }
      })
      for (let k = scrubs.length - 1; k >= 0; k--) {
        const { el, words } = scrubs[k]
        if (!el.isConnected) { scrubs.splice(k, 1); continue }
        const r = el.getBoundingClientRect()
        const p = clamp((vh * 0.88 - r.top) / (vh * 0.5 + r.height * 0.4))
        const n = words.length
        words.forEach((w, idx) => { w.style.opacity = (0.2 + 0.8 * clamp(p * (n + 3) - idx)).toFixed(2) })
      }
      progresses.forEach((el) => {
        if (!el.isConnected) { progresses.delete(el); return }
        const r = el.getBoundingClientRect()
        el.style.setProperty('--p', clamp((vh * 0.72 - r.top) / Math.max(1, r.height * 0.92)).toFixed(3))
      })
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  // filet de sécurité : tous les titres finissent par apparaître
  const settle = () => setTimeout(() => pendingSplit.forEach((el) => el.classList.add('is-in')), 5000)

  if (!reduce) {
    nuxtApp.hook('app:mounted', () => setTimeout(() => { scan(); settle() }, 80))
    nuxtApp.hook('page:finish', () => setTimeout(() => { scan(); settle() }, 120))
  }

  /* ---------- Effets liés à la souris (ordinateur) ---------- */
  if (fine && !reduce) {
    document.addEventListener('mousemove', (e) => {
      const t = e.target as HTMLElement | null
      if (!t || !t.closest) return

      const btn = t.closest<HTMLElement>('.ts-btn')
      if (btn) {
        const r = btn.getBoundingClientRect()
        const x = e.clientX - r.left, y = e.clientY - r.top
        btn.style.setProperty('--mx', x + 'px'); btn.style.setProperty('--my', y + 'px')
        btn.style.setProperty('--tx', (((x - r.width / 2) / (r.width / 2)) * 5).toFixed(1) + 'px')
        btn.style.setProperty('--ty', (((y - r.height / 2) / (r.height / 2)) * 3).toFixed(1) + 'px')
      }

      const tile = t.closest<HTMLElement>('.ts-tile')
      if (tile) {
        const r = tile.getBoundingClientRect()
        tile.style.setProperty('--ix', ((((e.clientX - r.left) / r.width) - 0.5) * -26).toFixed(1) + 'px')
        tile.style.setProperty('--iy', ((((e.clientY - r.top) / r.height) - 0.5) * -20).toFixed(1) + 'px')
      }

      const vis = t.closest<HTMLElement>('.ts-car .vis')
      if (vis) {
        const r = vis.getBoundingClientRect()
        vis.style.setProperty('--ry', ((((e.clientX - r.left) / r.width) - 0.5) * 9).toFixed(2) + 'deg')
        vis.style.setProperty('--rx', ((((e.clientY - r.top) / r.height) - 0.5) * -7).toFixed(2) + 'deg')
      }

      const hero = t.closest<HTMLElement>('.ts-hero')
      if (hero) {
        const r = hero.getBoundingClientRect()
        const nx = (e.clientX - r.left) / r.width, ny = (e.clientY - r.top) / r.height
        hero.style.setProperty('--sx', (nx * 100).toFixed(1) + '%'); hero.style.setProperty('--sy', (ny * 100).toFixed(1) + '%')
        hero.style.setProperty('--hx', ((nx - 0.5) * -22).toFixed(1) + 'px'); hero.style.setProperty('--hy', ((ny - 0.5) * -14).toFixed(1) + 'px')
      }
    }, { passive: true })

    document.addEventListener('mouseout', (e) => {
      const t = e.target as HTMLElement | null
      if (!t || !t.closest) return
      const leave = (sel: string, props: string[]) => {
        const el = t.closest<HTMLElement>(sel)
        if (el && !el.contains(e.relatedTarget as Node)) props.forEach(p => el.style.removeProperty(p))
      }
      leave('.ts-btn', ['--tx', '--ty'])
      leave('.ts-tile', ['--ix', '--iy'])
      leave('.ts-car .vis', ['--rx', '--ry'])
    }, { passive: true })
  }

  /* ---------- Transition de pages : rideau marine ---------- */
  let wipe: HTMLElement | null = null
  const getWipe = () => (wipe ||= document.querySelector<HTMLElement>('.ts-wipe'))
  let firstNav = true
  const resetWipe = () => {
    const w = getWipe()
    if (!w) return
    w.style.transition = 'none'
    w.classList.remove('cover', 'leave')
    void w.offsetHeight
    w.style.transition = ''
  }
  router.beforeEach(async (to, from) => {
    if (firstNav) { firstNav = false; return }
    if (reduce || to.path === from.path || to.path.startsWith('/admin') || from.path.startsWith('/admin')) return
    const w = getWipe()
    if (!w) return
    w.classList.remove('leave'); w.classList.add('cover')
    await new Promise(r => setTimeout(r, 560))
  })
  const lift = () => {
    const w = getWipe()
    if (!w || !w.classList.contains('cover')) return
    lenis?.scrollTo(0, { immediate: true })
    setTimeout(() => {
      w.classList.add('leave')
      setTimeout(resetWipe, 900)
    }, 140)
  }
  nuxtApp.hook('page:finish', lift)
  router.onError(resetWipe)
  // sécurité : le rideau ne reste jamais bloqué
  router.afterEach(() => setTimeout(() => { const w = getWipe(); if (w?.classList.contains('cover') && !w.classList.contains('leave')) lift() }, 3500))
})
