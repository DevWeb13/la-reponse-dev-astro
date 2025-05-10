import fs from 'fs'
import sharp from 'sharp'

const imagesToOptimize = [
    {
        input: 'public/assets/backgrounds/noise.webp',
        width: 220,
        quality: 45,
    },
    {
        input: 'public/assets/backgrounds/bg-subtle-2-light-1440w.webp',
        width: 1350,
        quality: 60,
    },
    {
        input: 'public/assets/models/poster.webp',
        width: 199,
        quality: 60,
    },
]

for (const { input, width, quality } of imagesToOptimize) {
    const tempOutput = input.replace(/\.webp$/, '.tmp.webp')

    if (!fs.existsSync(input)) {
        console.error(`❌ Fichier introuvable : ${input}`)
        continue
    }

    try {
        await sharp(input)
            .resize({ width })
            .webp({ quality })
            .toFile(tempOutput)

        fs.renameSync(tempOutput, input)
        console.log(`✅ Optimisé et remplacé : ${input}`)
    } catch (err) {
        console.error(`❌ Erreur : ${input}`, err)
    }
}
