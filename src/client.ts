import './assets/main.css'
import { createApp } from './app'
import { createPinia } from 'pinia'
const { app, router } = createApp({ isServer: false })
app.use(createPinia())
app.mount('#app')
