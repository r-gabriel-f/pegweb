<template>
  <section>
    <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary via-complement to-primary"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 md:px-10">
        <div class="flex flex-col items-center justify-center text-center md:text-left">
          <div>
            <h1 class="text-4xl md:text-6xl m-5 font-title-font ">Sobre Mi</h1>
          </div>
          <div class="m-5 text-lg md:text-2xl text-justify">
            {{ description }}
          </div>
        </div>
        <div class="flex justify-center">
          <img :src="DataDog[0].image" alt="Image" class="w-auto h-90 my-auto rounded" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DataDog } from '@/data/datapog'
import { ref } from 'vue'
const imgpath = ref(DataDog[0].image)
const description = ref(DataDog[0].description)
</script>
