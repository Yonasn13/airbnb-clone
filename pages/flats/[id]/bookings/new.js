import bookingsController from "../../../controllers/spaceshipsController.js"


const Booking = props => {
  const booking = props.spaceship
  return (
    <>
    <h1>We are the {booking.userId}</h1>
    <h3>Book your 🚀</h3>
    <form action="/api/spaceships" method="POST">
      <input hidden name="spaceshipId" value={spaceship.id}/>
      <label htmlFor="startDate">Start Date</label>
      <input type='date' id="startDate" name="startDate" />
      <label htmlFor="endDate">End Date</label>
      <input type='date' id="endDate" name="endDate" />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type='email' id="email" name="email" autoComplete="off"/>
      <br />
      <input type="submit" value="Book"/>
    </form>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const spaceship = await spaceshipsController.find(req.query.id)
  return {
    props: {spaceship}
  }
}

export default Spaceship