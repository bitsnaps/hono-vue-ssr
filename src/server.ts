import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { createRender } from './render'
import { delDomainName } from './utils/index'
const HonoApp = new Hono()

HonoApp.use('/static/*', serveStatic({ root: '../public/' }))

// 处理请求
HonoApp.get('*', async (c) => {
    const url = c.req.url
    const pathName = delDomainName(url)
    console.log('URL:==>', c.req.url, 'path:'+pathName)
    const { appContent, pageError } = await createRender(c.req.url, pathName)
    // if (pageError) {
    //     return c.html('404')
    // }
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
                <div id="app">${appContent}</div>
                <script type="module" src="/src/client.ts"></script>
            </body>
        </html>
    `)
})

export default HonoApp
