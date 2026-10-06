import type { RouterConfig } from '@nuxt/schema'

// Défilement doux vers les ancres (#experience, #nosy-be...) avec un décalage pour le header
export default <RouterConfig>{
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 70, behavior: 'smooth' }
    if (to.path !== from.path) return { top: 0 }
  }
}
