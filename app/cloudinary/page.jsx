"use client"
import axios from "axios"
import { CldImage, CldUploadButton } from "next-cloudinary"
import { useState } from "react"

function componenteImagen(image){

  return (
    <>
      <h1>Nuevo</h1>
        <CldImage
          width="600"
          height="600"
          src={image}
          alt="Description of my image"
        />
    </>
  )
}

export default function Cloudinary() {
  const preset_key = process.env.CLOUDINARY_IMAGES_DIRECTORY
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const [image, setImage] = useState()

  function handleFile(event) {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", preset_key)
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      // res: retorna.json
      .then((res) => setImage( res.data.public_id ))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <input type="file" name="image" onChange={handleFile} />

      <br />
      <hr />

      {/* {image? componenteImagen(image) : ""} */}
      {/* Se renderiza solo si iamge es true */}
      {image && componenteImagen(image)}

      <h1>Antho</h1>
      <CldImage
        width="600"
        height="600"
        src="images/lbebzffxflssot8htnfy"
        alt="Description of my image"
      />
    </div>
  )
}
