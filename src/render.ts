// 用于pages/*的 SSR渲染
import { createSSRApp, type Component } from 'vue'
import { renderToString } from 'vue/server-renderer'

export async function createPageRender(components: Component) {
    const app = createSSRApp(components)
    return await renderToString(app)
}