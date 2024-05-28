// 用于pages/*的 SSR渲染
import { createApp } from './app'
import { renderToString } from 'vue/server-renderer'

export async function createRender(url: string, path: string) {
    const { app, router } = createApp({ isServer: true })
    await router.push(url)
    await router.isReady()
    let appPage;
    try {
        appPage = router.currentRoute.value.matched[0]
        console.log(appPage, 'appPage')
    } catch (error) {
        console.log(error, 'error')
    }
    
    const ctx = {}
    const appContent = await renderToString(app, ctx)
    return { appContent, pageError: !appPage  }
}