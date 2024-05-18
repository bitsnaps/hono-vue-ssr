import type { hono } from 'hono'
export default function mySSRPlugin() {
    const honoServer: any = {}
    const ModuleId = 'virtual:vite-hono-ssr'
    const resolvedModuleId = '\0' + ModuleId

    return {
        name: ModuleId,
        resolveId(id: string) {
            if (id === ModuleId) {
                return resolvedModuleId
            }
        },
        configureServer() {
            console.log(HonoApp, 'HonoApp')
            // server = HonoApp()
        }
        // load(id: string) {
        //     if (id === resolvedModuleId) {
        //         console.log(id, 'id=', resolvedModuleId)
        //         return `
        //             import { createSSRApp } from 'vue'
        //             import App from './App.vue'
        //             export function createApp() {
        //                 const app = createSSRApp(App)
        //                 return { app }
        //             }
        //         `
        //     }
        // }
    }
}
