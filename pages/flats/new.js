
import ImageUpload from "../../components/ImageUpload"

export default function Flat (props) {
  const flat = props.flat
  return (
    <>

    <h1>Post your new flat</h1>
    <form action='/' method="POST">
      <ImageUpload></ImageUpload>

      <br/>
      <label htmlFor="address">Address</label>
      <br />
      <input type="name" id="address"/>
      <br />
      <label htmlFor="Price">Price per night</label>
      <br/>
      <input type="number" id="price"/>
      <br/>
      <label htmlFor="number">Rooms</label>
      <br/>
      <input type="number" id="room"/>
      <br />
      <input type="submit" value="RENT OUT" onClick="submit"/>
    </form>
    </>
  )
}

  

