import './assets/main.css'
import { createApp } from './app'
import { createPinia } from 'pinia'
const { app } = createApp({ isServer: false })
app.use(createPinia())
app.mount('#app')
