// optimize-noise-final.js
import sharp from 'sharp'
const input = 'public/assets/backgrounds/noise.webp'

sharp(input)
    .webp({ quality: 25 })
    .toBuffer()
    .then((data) => sharp(data).toFile(input))
    .then(() => console.log('✅ noise.webp optimisé à 25%'))
    .catch((err) => console.error('❌ Erreur :', err))
