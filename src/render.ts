// 用于pages/*的 SSR渲染
import { createApp } from './app'
import { renderToString } from 'vue/server-renderer'

export async function createRender(url: string) {
    const { app, router } = createApp({ isServer: true })
    await router.push(url)
    await router.isReady()

    const appPage = router.currentRoute.value.matched[0]
    console.log(appPage, 'appPage')

    const ctx = {}
    const appContent = await renderToString(app)
    return { appContent, pageError: !appPage }
}
