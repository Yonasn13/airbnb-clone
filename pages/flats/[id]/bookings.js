import flatsController from "../../../controllers/flatsController"
import Navbar from '../../../components/navbar'
import styles from '../../../styles/Home.module.css'


const Bookings = props => {
  return (
    <>
      <div className={styles.container}>
        <Navbar></Navbar>
        <ul>
          {props.bookings.map(booking => <li key={booking.id}>{booking.address}: {booking.startDate} | {booking.endDate}</li>)}
        </ul>
      </div>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const bookings = (await flatsController.find(req.query.id)).Bookings
  return {
    props: { bookings }
  }
}

export default Bookings