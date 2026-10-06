// Directives d'animation légères (aucune bibliothèque) : v-reveal et v-parallax.
// Uniquement transform / opacity, désactivées si l'utilisateur préfère moins de mouvement.
export default defineNuxtPlugin((nuxtApp) => {
  const classFor = (arg?: string) => (arg === 'img' ? 'rv-img' : arg === 'line' ? 'rv-line' : 'rv')

  let io: IntersectionObserver | null = null
  const getIO = () => {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io!.unobserve(e.target)
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    }
    return io
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: (binding: any) => ({
      class: classFor(binding.arg),
      style: binding.value ? `--d:${binding.value}s` : undefined
    }),
    mounted(el: HTMLElement, binding: any) {
      el.classList.add(classFor(binding.arg))
      if (binding.value) el.style.setProperty('--d', `${binding.value}s`)
      if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('in')
        return
      }
      getIO().observe(el)
    },
    unmounted(el: HTMLElement) { io?.unobserve(el) }
  })

  const items = new Set<{ el: HTMLElement; speed: number }>()
  let ticking = false
  const update = () => {
    ticking = false
    const vh = window.innerHeight
    items.forEach(({ el, speed }) => {
      const r = el.parentElement!.getBoundingClientRect()
      if (r.bottom < -200 || r.top > vh + 200) return
      const offset = (r.top + r.height / 2 - vh / 2) * -speed
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
    })
  }
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }

  nuxtApp.vueApp.directive('parallax', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding: any) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const entry = { el, speed: Number(binding.value) || 0.08 }
      ;(el as any).__px = entry
      items.add(entry)
      if (items.size === 1) {
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })
      }
      update()
    },
    unmounted(el: HTMLElement) {
      items.delete((el as any).__px)
      if (!items.size) {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }
  })
})
