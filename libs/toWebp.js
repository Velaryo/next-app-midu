import sharp from "sharp"

export default async function toWebp (file) {
  try {
    // utiliza la biblioteca sharp para convertir la imagen a formato WebP
    const buffer = await sharp(file.path).webp().toBuffer()

    // devuelve un objeto que contiene el buffer de la imagen convertida y el nombre de archivo con extensión .webp
    return { buffer, filename: `${file.name}.webp` }
  } catch (error) {
    console.log(error)
  }
}
