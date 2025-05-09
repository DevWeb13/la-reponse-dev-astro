import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import webfontDownload from 'vite-plugin-webfont-dl'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    site: 'https://www.lareponsedev.com',
    integrations: [
        sitemap(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
        tailwind(),
    ],
    vite: {
        plugins: [webfontDownload()],
    },
})
