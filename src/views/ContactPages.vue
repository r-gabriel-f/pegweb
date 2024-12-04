<template>
  <section class="w-full min-h-screen bg-gradient-to-b  from-primary via-complement to-primary  text-white p-4">
    <div class="container mx-auto">
      <div class="card m-5">
        <div class="flex flex-col items-center mt-5">
          <h1 class="text-4xl md:text-6xl font-bold m-5 font-title-font text-center text-primary text-border-letter">Contacto</h1>
        </div>
        <div class="m-3 lg:m-5 text-xl lg:text-3xl text-justify">
          {{ contacdescription }}
        </div>
        <div class=" m-3 lg:m-5">
          <div
            class="col-span-1 lg:col-span-2 border-2 rounded-lg border-white p-1 shadow-xl shadow-gray-600"
          >
            <iframe
              class="w-full h-64 lg:h-[500px]"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              :src="`https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${ubicacion}+(My%20House)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`"
              ><a href="https://www.gps.ie/">gps devices</a></iframe
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DataDog } from '@/data/datapog'
const contacdescription = ref(DataDog[0].contacto)
const ubicacion = ref(DataDog[0].ubicacion)
</script>
