import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'

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
})
