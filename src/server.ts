import { Hono } from 'hono'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'
const HonoApp = new Hono()

HonoApp.get('*', async (c) => {
    const url = c.req.url
    const { app, router } = createApp({ isServer: true })
    router.push(url)
    await router.isReady()
    // const matchedComponents = router.getMatchedComponents()

    console.log(
        router.currentRoute.value.matched.flatMap((record) => Object.values(record.components)),
        'html'
    )
    const html = await renderToString(app, c)
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
