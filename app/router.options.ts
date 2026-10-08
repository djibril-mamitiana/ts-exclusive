import type { RouterConfig } from '@nuxt/schema'

// Défilement doux vers les ancres (#experience, #nosy-be...) avec un décalage pour l'en-tête.
// Avec le défilement fluide (Lenis), on délègue l'animation à Lenis.
export default <RouterConfig>{
  scrollBehavior(to, from, saved) {
    const lenis = typeof window !== 'undefined' ? (window as any).__lenis : null
    if (saved) return saved
    if (to.hash) {
      if (lenis) {
        setTimeout(() => lenis.scrollTo(to.hash, { offset: -80, duration: 1.4 }), 80)
        return false
      }
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    if (to.path !== from.path) {
      if (lenis) { lenis.scrollTo(0, { immediate: true }); return false }
      return { top: 0 }
    }
  }
}
