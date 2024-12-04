<template>
  <section>
    <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-t from-primary via-complement to-primary px-4 md:px-20"
    >
      <div class="w-full max-w-4xl flex flex-col items-center">
        <div>
          <h1 class="text-4xl md:text-6xl font-bold m-5 font-title-font text-center text-primary  text-shadow-quaternary ">
            Mi Galería
          </h1>
        </div>
        <div class="w-[100rem]">
          <Carousel
            :value="images"
            :numVisible="5"
            :numScroll="1"
            :responsiveOptions="responsiveOptions"
            circular
            :autoplayInterval="3000"
          >
            <template #item="slotProps">
              <div class="border  border-secondary rounded-2xl m-2 p-2">
                <div class="">
                  <div
                    class="relative mx-auto flex justify-center items-center w-full h-[25rem] aspect-[3/7]"
                  >
                    <img
                      :src="slotProps.data.imagen"
                      :alt="'Imagen' + (slotProps.index + 1)"
                      class="absolute w-full h-full object-cover rounded-xl"
                    />
                    <Tag
                      :value="slotProps.data.titulo"
                      severity="secondary"
                      class="absolute"
                      style="left: 5px; top: 5px"
                    />
                    <div
                  class="mb-0 min-h-16 max-w-64 absolute left-[6px] bottom-[6px] font-medium text-primary border-2 rounded-xl border-secondary bg-quaternary bg-opacity-85 flex items-center px-2 text-sm"
                  severity="contrast"
                >
                  {{ slotProps.data.descripcion }}
                </div>
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
