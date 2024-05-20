import { Hono } from 'hono'
import { type Component } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'
import { createPageRender } from './render'
import { delDomainName } from './utils/index'
const HonoApp = new Hono()
const { app, router } = createApp({ isServer: true })

// 处理请求
HonoApp.get('/*', async (c) => {
    console.log('URL:==>', c.req.url)
    const url = c.req.url
    const pathName = delDomainName(url)
    router.push(pathName)
    await router.isReady()
    const vuePage = router.currentRoute.value.matched[0]
    if (!vuePage) { // 404
        return c.html(pathName+' 页面不存在 404')
    }
    console.log(vuePage, 'vuePage')
    const pagehtml = await createPageRender(vuePage.components?.default as Component)
    console.log(pagehtml, 'pagehtml')
    const html = await renderToString(app)
    return c.html(`
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite App</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script type="module" src="/src/client.ts"></script>
            </body>
        </html>
    `)
})

export default HonoApp
