import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

const images = [
    {
        input: 'public/assets/cars-pat/mockup-Cars-Pat-Accueil.webp',
        output: 'public/assets/cars-pat/mockup-Cars-Pat-Accueil-small.webp',
        quality: 40, // 🔽 baisse qualité pour tomber sous les 5–6 Ko
    },
    {
        input: 'public/assets/learn-qwik/mockup-Learn-Qwik-Accueil.webp',
        output: 'public/assets/learn-qwik/mockup-Learn-Qwik-Accueil-small.webp',
        quality: 55,
    },
    {
        input: 'public/assets/paquerette-cactus/mockup-Paquerette-Cactus-Accueil.webp',
        output: 'public/assets/paquerette-cactus/mockup-Paquerette-Cactus-Accueil-small.webp',
        quality: 55,
    },
    {
        input: 'public/assets/tryade-dashboard/Tryade-Dashboard-Home.webp',
        output: 'public/assets/tryade-dashboard/Tryade-Dashboard-Home-small.webp',
        quality: 55,
    },
]

async function resizeAll() {
    for (const { input, output, quality } of images) {
        try {
            await fs.access(input)

            await sharp(input)
                .resize(480) // largeur cible (encore mieux que 600px pour mobile)
                .webp({ quality }) // qualité variable
                .toFile(output)

            const { size } = await fs.stat(output)
            const sizeKb = (size / 1024).toFixed(1)

            console.log(`✅ ${path.basename(output)} générée : ${sizeKb} Ko`)
        } catch (err) {
            console.error(`❌ Erreur avec ${input} : ${err.message}`)
        }
    }
}

resizeAll()
