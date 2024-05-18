import { fileURLToPath, URL } from 'node:url'
import devServer, { defaultOptions } from '@hono/vite-dev-server'
import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoVueRouter from 'vite-plugin-auto-vue-router'

// import SSRPlugin from './src/plugins/ssr'
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        VueDevTools(),
        devServer({
            entry: './src/server.ts',
            exclude: defaultOptions.exclude.concat([
                /.*\.vue$/,
                /.*\.svg$/,
                /.*\.png$/,
                /.*\.jpg$/,
                '/assets/.*'
            ])
        }),
        AutoVueRouter({
            dir: fileURLToPath(new URL('/src/pages/', import.meta.url))
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            input: ['./src/client.ts'],
            output: {
                entryFileNames: 'static/client.js',
                chunkFileNames: 'static/assets/[name]-[hash].js',
                assetFileNames: 'static/assets/[name].[ext]'
            }
        },
        minify: true,
        emptyOutDir: false,
        copyPublicDir: false
    }
})