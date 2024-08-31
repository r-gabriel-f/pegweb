<template>
  <div class="card fixed top-0 left-0 right-0 z-50">
    <Menubar :model="items" :activeIndex="activeIndex" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const scrollToSection = (sectionId: string, index: number) => {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth' })
  activeIndex.value = index
}

const items = ref([
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    command: () => scrollToSection('inicio', 0)
  },
  {
    label: 'Sobre Mi',
    icon: 'pi pi-id-card',
    command: () => scrollToSection('sobre-mi', 1)
  },
  {
    label: 'Galeria',
    icon: 'pi pi-camera',
    command: () => scrollToSection('galeria', 2)
  },
  {
    label: 'Contacto',
    icon: 'pi pi-envelope',
    command: () => scrollToSection('contacto', 3)
  }
])
</script>
