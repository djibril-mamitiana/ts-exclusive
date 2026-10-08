<script setup lang="ts">
// Curseur discret (ordinateur) : un point qui suit la souris, grandit sur les liens
// et affiche une étiquette (Voir, Explorer...) sur les éléments portant data-cursor-label
const el = ref<HTMLElement | null>(null)
const on = ref(false)
const big = ref(false)
const label = ref('')

onMounted(() => {
  if (window.matchMedia('(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
  let x = 0, y = 0, cx = 0, cy = 0, raf = 0
  const loop = () => {
    cx += (x - cx) * 0.2
    cy += (y - cy) * 0.2
    if (el.value) el.value.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
    raf = requestAnimationFrame(loop)
  }
  const move = (e: MouseEvent) => {
    x = e.clientX; y = e.clientY; on.value = true
    const t = e.target as HTMLElement
    const lab = t?.closest?.('[data-cursor-label]') as HTMLElement | null
    label.value = lab?.dataset.cursorLabel || ''
    big.value = !label.value && !!t?.closest?.('a, button, [data-cursor], label, summary')
  }
  const leave = () => (on.value = false)
  window.addEventListener('mousemove', move, { passive: true })
  document.addEventListener('mouseleave', leave)
  raf = requestAnimationFrame(loop)
  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('mousemove', move)
    document.removeEventListener('mouseleave', leave)
  })
})
</script>

<template>
  <div ref="el" class="ts-cursor" :class="{ on, big, label: !!label }" aria-hidden="true"><span class="lbl">{{ label }}</span></div>
</template>
