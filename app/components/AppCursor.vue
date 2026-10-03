<template>
  <!-- <div class="cursor"></div> -->
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let moveListener: ((e: MouseEvent) => void) | null = null

onMounted(() => {
  if (!import.meta.client) return

  const cursor = document.querySelector('.cursor') as HTMLElement | null
  if (!cursor) return

  const animateit = function (this: HTMLElement, e: MouseEvent) {
    const hoverAnim = this.querySelector('.hover-anim') as HTMLElement | null
    if (!hoverAnim) return

    const { offsetX: x, offsetY: y } = e
    const { offsetWidth: width, offsetHeight: height } = this
    const move = 25
    const xMove = (x / width) * (move * 2) - move
    const yMove = (y / height) * (move * 2) - move

    hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`
    if (e.type === 'mouseleave') hoverAnim.style.transform = ''
  }

  const editCursor = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
  }

  moveListener = editCursor
  window.addEventListener('mousemove', editCursor)

  const links = document.querySelectorAll<HTMLElement>('.hover-this')
  links.forEach((b) => {
    b.addEventListener('mousemove', animateit)
    b.addEventListener('mouseleave', animateit)
  })

  document.querySelectorAll('a, .cursor-pointer').forEach((el) => {
    el.addEventListener('mousemove', () => {
      cursor.classList.add('cursor-active')
    })
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-active')
    })
  })
})

onUnmounted(() => {
  if (moveListener && import.meta.client) {
    window.removeEventListener('mousemove', moveListener)
  }
})
</script>
