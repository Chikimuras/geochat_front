import '@/assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';

import App from './App.vue'
import index from '@/router/index.ts'
import { ToastService } from 'primevue'

const app = createApp(App)

app.use(createPinia())
app.use(ToastService)
app.use(index)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  }
})

app.mount('#app')
