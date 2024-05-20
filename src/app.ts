import { createSSRApp } from 'vue'
import VueApp from './App.vue'
import { createSSRouter } from './router'

export function createApp(options:{ isServer: boolean }) {
    const app = createSSRApp(VueApp)
    const router = createSSRouter(options.isServer)
    if (options.isServer) {
        app.use(router)
    }
    return {
        app,
        router
    }
}
