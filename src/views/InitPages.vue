<template>
  <div
    id="inicio"
    class="w-full min-h-screen bg-gradient-to-t from-primary via-complement to-primary flex items-center justify-center"
  >
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
  <div class="flex justify-center items-center">
    <Card 
      class="w-full h-auto sm:max-w-[20rem] md:max-w-[30rem] lg:max-w-[40rem] xl:max-w-[50rem] 
             sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] !bg-f !bg-center !bg-cover"
    >
      <template #title>{{ name }}</template>
      <template #content>
        <img 
          :src="imgpath" 
          alt="Image" 
          class="w-auto mx-auto"
        />
      </template>
    </Card>
  </div>
  <div class="flex justify-center items-center">
    <p>hola</p>
  </div>
</div>

  </div>
</template>

<script setup lang="ts">
import { DataDog } from '@/data/datapog'
import { ref } from 'vue'

const imgpath = ref(DataDog[0].image)
const name = ref(DataDog[0].name)
</script>
