// Directives d'animation légères (aucune bibliothèque) : v-reveal et v-parallax.
// Uniquement transform / opacity, désactivées si l'utilisateur préfère moins de mouvement.
//
// Règle de robustesse : un contenu n'est JAMAIS masqué côté serveur. Le masquage (classe rv) n'est posé par le
// navigateur que sur les éléments encore sous la ligne de flottaison, et un filet de sécurité les révèle tous
// si l'observateur n'a pas réagi (écrans larges, zoom 80 %, défilement rapide).
export default defineNuxtPlugin((nuxtApp) => {
  const classFor = (arg?: string) => (arg === 'img' ? 'rv-img' : arg === 'line' ? 'rv-line' : 'rv')
  const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const pending = new Set<HTMLElement>()
  let io: IntersectionObserver | null = null

  const show = (el: HTMLElement) => {
    el.classList.add('in')
    pending.delete(el)
    io?.unobserve(el)
  }
  // Révèle tout ce qui est déjà passé ou visible à l'écran
  const sweep = () => {
    const limit = window.innerHeight * 0.96
    pending.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < limit) show(el)
    })
  }
  let tick = false
  const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(() => { tick = false; sweep() }) } }

  const getIO = () => {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        for (const e of entries) if (e.isIntersecting) show(e.target as HTMLElement)
      }, { threshold: 0, rootMargin: '0px 0px -4% 0px' })
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
      // filet de sécurité : tout apparaît au plus tard quelques secondes après le chargement
      setTimeout(() => pending.forEach(show), 6000)
    }
    return io
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}), // rien de masqué côté serveur
    mounted(el: HTMLElement, binding: any) {
      if (!('IntersectionObserver' in window) || reduce()) return
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.96) return // déjà à l'écran : visible tout de suite
      el.classList.add(classFor(binding.arg))
      if (binding.value) el.style.setProperty('--d', `${binding.value}s`)
      pending.add(el)
      getIO().observe(el)
    },
    unmounted(el: HTMLElement) { pending.delete(el); io?.unobserve(el) }
  })

  // Décompte animé des chiffres (ex : 250K). Le texte final est déjà rendu côté serveur ; on ne fait qu'animer côté navigateur.
  nuxtApp.vueApp.directive('count', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement) {
      const txt = (el.textContent || '').trim()
      const m = /^(\D*)(\d+)(\D*)$/.exec(txt)
      if (!m || reduce() || !('IntersectionObserver' in window)) return
      const [, pre, num, post] = m
      const target = parseInt(num, 10)
      let started = false
      const run = () => {
        if (started) return
        started = true
        const t0 = performance.now()
        const dur = 1500
        const step = (t: number) => {
          const k = Math.min(1, (t - t0) / dur)
          const eased = 1 - Math.pow(1 - k, 3)
          el.textContent = pre + Math.round(target * eased) + post
          if (k < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
      const o = new IntersectionObserver((es) => { if (es.some(e => e.isIntersecting)) { run(); o.disconnect() } }, { threshold: 0.4 })
      o.observe(el)
    }
  })

  // Parallaxe : le décalage est borné à la marge de débordement de l'image, pour ne jamais laisser de bande vide
  const items = new Set<{ el: HTMLElement; speed: number }>()
  let ticking = false
  const update = () => {
    ticking = false
    const vh = window.innerHeight
    items.forEach(({ el, speed }) => {
      const box = el.parentElement!
      const r = box.getBoundingClientRect()
      if (r.bottom < -200 || r.top > vh + 200) return
      const room = Math.max(0, (el.offsetHeight - box.offsetHeight) / 2) // marge réellement disponible
      const raw = (r.top + r.height / 2 - vh / 2) * -speed
      const offset = Math.max(-room, Math.min(room, raw))
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
    })
  }
  const onPx = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }

  nuxtApp.vueApp.directive('parallax', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding: any) {
      if (reduce()) return
      const entry = { el, speed: Number(binding.value) || 0.08 }
      ;(el as any).__px = entry
      items.add(entry)
      if (items.size === 1) {
        window.addEventListener('scroll', onPx, { passive: true })
        window.addEventListener('resize', onPx, { passive: true })
      }
      update()
    },
    unmounted(el: HTMLElement) {
      items.delete((el as any).__px)
      if (!items.size) {
        window.removeEventListener('scroll', onPx)
        window.removeEventListener('resize', onPx)
      }
    }
  })
})
