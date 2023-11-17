import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { fontawsomePlugin } from './fontawesome'

if (import.meta.env.PROD) {
  console.log = () => {}
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(fontawsomePlugin)

app.mount('#app')
