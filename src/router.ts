import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'
export function createSSRouter(isServer: boolean = true) {
    // import.meta.env.SSR
    return createRouter({
        history: isServer ? createMemoryHistory() : createWebHistory(),
        routes: [
            { path: '/', component: () => import('./pages/index.vue') },
            { path: '/home', component: () => import('./pages/home.vue') }
        ]
    })
}
