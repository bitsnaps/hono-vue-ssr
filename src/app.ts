import { createSSRApp } from 'vue'
import VueApp from './App.vue'
import { createSSRouter } from './router'

export function createApp(options: { isServer: boolean }) {
    const app = createSSRApp(VueApp)
    const router = createSSRouter(options.isServer)
    app.use(createSSRouter(options.isServer))
    return {
        app,
        router
    }
}
