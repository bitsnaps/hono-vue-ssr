import { createSSRApp } from 'vue'
import VueApp from './App.vue'

export function createApp() {
    return createSSRApp(VueApp)
}
