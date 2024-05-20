import { createSSRApp } from 'vue'
import VueApp from './App.vue'
import { createVueRouter } from './router'

export function createApp(options:{ isServer: boolean }) {
    const app = createSSRApp(VueApp)
    const router = createVueRouter(options.isServer)
    app.use(router)
    return {
        app,
        router
    }
}
