import './assets/main.css'
import { createApp } from './app'
import { createPinia } from 'pinia'

const { app, router } = createApp({ isServer: false })

router.isReady().then(() => {
    app.use(createPinia())
    app.mount('#app')
    console.log('hydrated')
})
