import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { PrimeVitals } from './prime.vitals'
import primevue from './prime'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
}
})
app.use(PrimeVitals)
primevue(app)

app.mount('#app')
