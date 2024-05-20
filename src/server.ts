import { Hono } from 'hono'
import { createRender } from './render'
import { delDomainName } from './utils/index'
const HonoApp = new Hono()


// 处理请求
HonoApp.get('*', async (c) => {
    const url = c.req.url
    const pathName = delDomainName(url)
    console.log('URL:==>', c.req.url)
    const { appContent, pageError } = await createRender(pathName)
    if (pageError) {
        return c.html('404')
    }
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
