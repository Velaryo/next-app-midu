import sharp from "sharp"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const file = req.body.file;

      // utiliza la biblioteca sharp para convertir la imagen a formato WebP
      const buffer = await sharp(file.path).webp().toBuffer()

      // establece las cabeceras de la respuesta para que el navegador interprete la respuesta como una imagen
      res.setHeader('Content-Type', 'image/webp');
      res.setHeader('Content-Disposition', `attachment; filename="${file.name}.webp"`);

      // devuelve el buffer de la imagen convertida
      return res.status(200).send(buffer)
    } catch (error) {
      console.log(error)
      return res.status(500).send('Error converting image to WebP format')
    }
  } else {
    return res.status(405).send('Method not allowed')
  }
}
