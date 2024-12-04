<template>
   <div
    id="whatsapp-float"
    className="fixed bottom-4 right-4 bg-[#25d366] py-2 px-2 rounded-full cursor-pointer z-10"
  >
    <a
      :href="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col items-center mb-4 lg:mb-0"
      @click="openWhatsApp"
    >
      <i class="pi pi-whatsapp" style="color: green; font-size: 30px"></i>
    </a>
  </div>
  <NavBar />
 
  <section id="init">
    <InitPages />
  </section>

  <section id="sobre-mi">
    <AboutPages />
  </section>
  <section id="galeria">
    <GaleriPages />
  </section>
  <section id="contacto">
    <ContactPages />
  </section>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'
import AboutPages from './AboutPages.vue'
import ContactPages from './ContactPages.vue'
import GaleriPages from './GaleriPages.vue'
import InitPages from './InitPages.vue'
import { DataDog } from '@/data/datapog'
import { ref } from 'vue'

const imgpath = ref(DataDog[0].image)
const name = ref(DataDog[0].name)
const whatsapp = ref(DataDog[0].whatsapp)

const openWhatsApp = () => {
  window.open(whatsapp.value, '_blank')
}
</script>
