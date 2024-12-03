<template>
  <NavBar />
  <section id="inicio" class="w-full h-screen bg-f bg-cover bg-center">
    <div class="card flex flex-col justify-center items-center h-full relative">
      <h1 class="text-4xl md:text-6xl font-title-font absolute z-10 top-40">{{ name }}</h1>
      <img
        :src="imgpath"
        alt="Image"
        class="w-full max-w-lg md:max-w-xl lg:max-w-2xl mt-16 md:mt-24 lg:mt-32"
      />
    </div>
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
import { DataDog } from '@/data/datapog'
import { ref } from 'vue'

const imgpath = ref(DataDog[0].image)
const name = ref(DataDog[0].name)
</script>
