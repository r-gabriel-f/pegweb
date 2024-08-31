<template>
  <section class="w-full min-h-screen bg-gradient-to-r from-black to-gray-700 text-white p-4">
    <div class="container mx-auto">
      <div class="card m-5">
        <div class="flex flex-col items-center mt-5">
          <h1 class="text-4xl lg:text-6xl font-bold font-title-font">Contacto</h1>
        </div>
        <div class="m-3 lg:m-5 text-xl lg:text-3xl text-justify">
          {{ contacdescription }}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 m-3 lg:m-5">
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
          <div
            class="col-span-1 flex flex-col items-center justify-center space-y-4 lg:space-y-0 my-5"
          >
            <a
              :href="whtaspp"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-col items-center mb-4 lg:mb-0"
            >
              <i class="pi pi-whatsapp" style="color: green; font-size: 80px"></i>
              <span class="text-green-500 mt-2 text-lg lg:m-5">WhatsApp</span>
            </a>
            <div class="flex flex-col items-center text-center">
              <img :src="hulla" alt="hulla" class="w-32 lg:w-[200px] mb-3 lg:mb-5" />
              <p class="text-sm lg:text-base">
                Gracias por hacerme llegar a mi casa con mi familia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import hulla from '../assets/img/huella.webp'
import { DataDog } from '@/data/datapog'
const contacdescription = ref(DataDog[0].contacto)
const whtaspp = ref(DataDog[0].whatsapp)
const ubicacion = ref(DataDog[0].ubicacion)
</script>
