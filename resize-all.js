// resize-all.js
import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

const images = [
    {
        input: 'public/assets/cars-pat/mockup-Cars-Pat-Accueil.webp',
        output: 'public/assets/cars-pat/mockup-Cars-Pat-Accueil-small.webp',
    },
    {
        input: 'public/assets/learn-qwik/mockup-Learn-Qwik-Accueil.webp',
        output: 'public/assets/learn-qwik/mockup-Learn-Qwik-Accueil-small.webp',
    },
    {
        input: 'public/assets/paquerette-cactus/mockup-Paquerette-Cactus-Accueil.webp',
        output: 'public/assets/paquerette-cactus/mockup-Paquerette-Cactus-Accueil-small.webp',
    },
    {
        input: 'public/assets/tryade-dashboard/Tryade-Dashboard-Home.webp',
        output: 'public/assets/tryade-dashboard/Tryade-Dashboard-Home-small.webp',
    },
]

async function resizeAll() {
    for (const { input, output } of images) {
        try {
            await fs.access(input)
            await sharp(input).resize(480).webp({ quality: 75 }).toFile(output)

            console.log(`✅ ${path.basename(output)} générée avec succès.`)
        } catch (err) {
            console.error(`❌ Erreur pour ${input}:`, err.message)
        }
    }
}

resizeAll()
