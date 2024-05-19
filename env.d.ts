/// <reference types="vite/client" />

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<object, object, any>
    export default component
}
declare module 'virtual:auto-vue-router'
