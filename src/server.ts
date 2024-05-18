import { Hono } from 'hono'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'
const app = new Hono()

app.get('/', async (c) => {
    const cApp = createApp()
    const html = await renderToString(cApp)
    return c.html(`
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite App=</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script type="module" src="/src/client.ts"></script>
            </body>
        </html>
    `)
})

export default app
