
import { useState } from "react";

export default function Component({flat}) {
const [url, setUrl] = useState('')
const handleChange = async (event) => {
    const file = event.target.files[0]
    const imageFormData = new FormData()
    imageFormData.append('file', file)
    imageFormData.append('upload_preset', 'unsigned_upload')
    const responseCloudinary = await fetch('https://api.cloudinary.com/v1_1/dzvox0kev/image/upload', {
        method: "POST",
        body: imageFormData
      })
      const response = await responseCloudinary.json()
setUrl(response.secure_url)
}
/*const handleChange = async (event) => {
    // logs the file to check that it's the right event target
    console.log(event.target.files[0])
    const imageInput = event.target.files[0]
    const imageFormData = new FormData()
    imageFormData.append('file', imageInput)
    imageFormData.append('upload_preset', 'unsigned_upload')
    console.log(Object.fromEntries(imageFormData))
    const responseCloudinary = await fetch('https://api.cloudinary.com/v1_1/dzvox0kev/image/upload', {
      method: "POST",
      body: imageFormData
    })
    const responseCloudinaryData = await responseCloudinary.json()
    // Gets the image url from the cloudinary response
    const secureUrl = responseCloudinaryData.secure_url
    console.log(secureUrl)
    // Set the image url as the value of the hidden form field
    // This value will be passed with the others at the form submit
    setUrl(secureUrl)
  }*/

  return (
    <>
    <label htmlFor="image">Upload image</label>
    <br />
    <input type="file" id="image" name="image" onChange={handleChange}/>
    <input hidden={true} id="imageurl" name="imageurl" defaultValue={url} ></input>
    </>
  )
}