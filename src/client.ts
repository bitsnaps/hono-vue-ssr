import './assets/main.css'
import { createApp } from './app'
import { createPinia } from 'pinia'
import AutoVueRouter from 'virtual:auto-vue-router'

const app = createApp()
app.use(AutoVueRouter, {
    /* options */
})
app.use(createPinia())

app.mount('#app')
