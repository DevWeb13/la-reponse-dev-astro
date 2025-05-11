import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/static'
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import { astroFont } from 'astro-font/integration'

// https://astro.build/config
export default defineConfig({
    output: 'static',
    adapter: vercel(),
    site: 'https://www.lareponsedev.com',
    integrations: [
        sitemap(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
        tailwind(),
        astroFont(),
    ],
})
