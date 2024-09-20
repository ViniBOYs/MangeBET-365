import '@/assets/style/global.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPlugin from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
// import { create } from 'node_modules/axios/index.cjs'

const app = createApp(App)

const pinia = createPinia() //
pinia.use(piniaPlugin)      // TODO => Usando Plugin "persist" no pinia e usando o Pinia no Vue
app.use(pinia)              //

app.use(router)

app.mount('#app')
