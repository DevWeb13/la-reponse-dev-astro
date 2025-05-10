// optimize-noise.js
import sharp from 'sharp'

const input = 'public/assets/backgrounds/noise.webp'
const output = 'public/assets/backgrounds/noise-optimized.webp'

try {
    await sharp(input).resize(220).webp({ quality: 35 }).toFile(output)

    console.log(`✅ Image optimisée : ${output}`)
} catch (err) {
    console.error(`❌ Erreur : ${err.message}`)
}
