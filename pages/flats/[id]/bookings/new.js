import flatsController from "../../../../controllers/flatsController"
import styles from "../../../../styles/Home.module.css"

export default function Flat (props) {
  const flat = props.flat
  return (
    <>
    <div className={styles.paragraph}>
    <h1>Request to Book</h1>
    <h3>Your Trip </h3>
    <p>{flat.address}</p>
    <form action="/flats/1/bookings" method="POST">
      <input hidden name="flatId" value={flat.id}/>
      <label htmlFor="startDate"> Start Date </label>
      <input type='date' id="startDate" name="startDate" />
      <label htmlFor="endDate"> - End Date</label>
      <input type='date' id="endDate" name="endDate" />
      <br />
      <label htmlFor="fullName"> Enter your full name </label>
      <br/>
      <input type="name" id="fullName"/>
      <br />
      <label htmlFor="Card number"> Card Number </label>
      <br/>
      <input type="name" id="card number"/>
      <br/>
      <label htmlFor="date"> Expiration date </label>
      <br/>
      <input type="name" id="date"/>
      <br/>
      <label htmlFor="number"> CVV </label>
      <br/>
      <input type="number" id="cvv"/>
      <br/>
      <input type="submit" value="REQUEST BOOKING" onClick="submit"/>
    </form>
    </div>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const flat = await flatsController.find(req.query.id)
  return {
    props: {flat}
  }
}


