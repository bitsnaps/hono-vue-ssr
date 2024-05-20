import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'
import Index from './pages/index.vue';
import Home from './pages/home.vue';
export function createVueRouter(isServer?: boolean) {
    return createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: [
            { path: '/', component: Index },
            { path: '/home', component: Home }
        ]
    })
}
