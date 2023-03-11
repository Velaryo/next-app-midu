'use client'

import { useState } from "react";
import axios from "axios";

export default function Cloudinary() {
  const [message, setMessage] = useState("");

  const deleteImage = async () => {
    const presetKey = process.env.CLOUDINARY_IMAGES_DIRECTORY;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    const formData = new FormData();
    formData.append("upload_preset", presetKey);
    formData.append("public_id", "images/wxsrpphupxwqjaakz8wp");
    
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
      formData
    );
    setMessage(res.data.message);
  };

  

  return (
    <div>
      
      <button onClick={deleteImage}>Delete image</button>
      <p>{message}</p>
    </div>
  );
}
