import Navbar from "../../../components/navbar"

export default function Request(props) {
  // you can get the cocktail from the props


  return (
    <>
      <Navbar></Navbar>
      <h2>Bookings requests</h2>
      <div className={styles.container}>
        <h1>{flat.address}</h1>
        <p>{booking.userId}</p>
      </div>
    </>
  )
}



