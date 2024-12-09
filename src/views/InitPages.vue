<template>
  <div id="inicio"
    class="w-full h-auto sm:h-screen  bg-gradient-to-t from-primary via-complement to-primary flex items-center justify-center p-4">
    <div
      class="card flex flex-col md:flex-row border border-secondary rounded-2xl relative overflow-hidden max-w-6xl w-full my-16 ">
      <div class="absolute inset-0 bg-carnet bg-cover bg-center opacity-25 pointer-events-none"></div>
      <div class="border border-secondary rounded-2xl m-2 p-2 flex-1">
        <div class="relative mx-auto flex justify-center items-center w-full h-full">
          <Image :src="imgpath" :alt="'Imagen'" preview class="w-full h-full" />
        </div>
      </div>
      <Divider layout="vertical" class="hidden md:block" />
      <div class="relative flex flex-col justify-center p-4 flex-1">
        <h2 class="text-lg font-semibold mb-4 text-center">Información del Cachorro</h2>
        <div class="grid grid-cols-2 gap-2 text-sm">

          <strong>Nombre:</strong>
          <span>{{ name }}</span>

          <strong>Especie:</strong>
          <span>Perro</span>
          <strong>Raza:</strong>
          <Tag severity="info" :value="breed"></Tag>

          <strong>Edad:</strong>
          <Tag severity="info" :value="age"></Tag>

          <strong>Sexo:</strong>
          <Tag severity="info" :value="sex"></Tag>

          <strong>Fecha de Nacimiento:</strong>
          <span>{{ birthDate }}</span>

          <strong>Color o Características:</strong>
          <span>{{ characteristics }}</span>

        </div>
        <Divider />
        <div class="mt-6">
          <h2 class="text-lg font-semibold mb-4 text-center">Salud</h2>
          <div class="grid grid-cols-2 gap-2 text-sm">

            <strong>Estado:</strong>
            <Tag severity="success" :value="healthStatus"></Tag>

            <strong>Vacunas:</strong>
            <Tag severity="info" :value="vaccinations"></Tag>


            <strong>Última Revisión:</strong>
            <span>{{ lastVetVisit }}</span>

          </div>
        </div>
        <Divider />
        <div class="mt-6">
          <h2 class="text-lg font-semibold mb-4 text-center">Entorno</h2>
          <div class="grid grid-cols-2 gap-2 text-sm">

            <strong>Tipo:</strong>
            <Tag severity="info" :value="environmentType"></Tag>

            <strong>Ambiente:</strong>
            <Tag severity="info" :value="environmentSetting"></Tag>

            <strong>Patio:</strong>
            <Tag severity="success" :value="hasYard ? 'Sí' : 'No'"></Tag>

            <strong>Otros Mascotas:</strong>
            <Tag severity="success" :value="otherPets ? 'Sí' : 'No'"></Tag>

          </div>
        </div>
      </div>

      <Divider layout="vertical" class="hidden md:block" />
      <div class="relative flex flex-col justify-center p-4 flex-1">
        <h2 class="text-lg font-semibold mb-4 text-center">Información del Dueño</h2>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <strong>Nombre Completo:</strong>
          <span>{{ ownerName }}</span>
          <strong>Teléfono Principal:</strong>
          <Tag :value="primaryPhone" class="hover:cursor-pointer"></Tag>
          <strong>Teléfono Alternativo:</strong>
          <Tag :value="alternatePhone" class="hover:cursor-pointer"></Tag>
          <strong>Dirección:</strong>
          <span>{{ ownerAddress }}</span>
          <strong>Email:</strong>
          <span>{{ ownerEmail }}</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { DataDog } from '@/data/datapog'
import { ref } from 'vue'

const imgpath = ref(DataDog[0].image)

const name = ref(DataDog[0].name)
const breed = ref(DataDog[0].breed)
const age = ref(DataDog[0].age)
const sex = ref(DataDog[0].sex)
const birthDate = ref(DataDog[0].birthDate)
const characteristics = ref(DataDog[0].characteristics)

const healthStatus = ref(DataDog[0].health.status)
const vaccinations = ref(DataDog[0].health.vaccinations)
const lastVetVisit = ref(DataDog[0].health.lastVetVisit)

const environmentType = ref(DataDog[0].environment.type)
const environmentSetting = ref(DataDog[0].environment.setting)
const hasYard = ref(DataDog[0].environment.hasYard)
const otherPets = ref(DataDog[0].environment.otherPets)

const ownerName = ref(DataDog[0].owner.fullName)
const primaryPhone = ref(DataDog[0].owner.primaryPhone)
const alternatePhone = ref(DataDog[0].owner.alternatePhone)
const ownerAddress = ref(DataDog[0].owner.address)
const ownerEmail = ref(DataDog[0].owner.email)
</script>
