<template>
  <section>
    <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-black px-4 md:px-20"
    >
      <div class="w-full max-w-4xl flex flex-col items-center">
        <div>
          <h1 class="text-4xl md:text-6xl font-bold m-5 font-title-font text-center">Mi Galería</h1>
        </div>
        <div class="w-full">
          <Carousel
            :value="images"
            :numVisible="4"
            :numScroll="1"
            :responsiveOptions="responsiveOptions"
            circular
            :autoplayInterval="3000"
          >
            <template #item="slotProps">
              <div class="p-4">
                <div class="mb-4">
                  <div
                    class="relative mx-auto flex justify-center items-center w-full aspect-[3/7]"
                  >
                    <img
                      :src="slotProps.data"
                      :alt="'Imagen' + (slotProps.index + 1)"
                      class="absolute w-full h-full object-contain rounded"
                    />
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DataDog } from '@/data/datapog'

const images = ref(DataDog[0].galeri)
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>
