import flatsController from "../../../controllers/spaceshipsController.js"


const Flat = props => {
  const flat = props.flat
  return (
    <>
    <h1>Request to Book {flat.address}</h1>
    <h3>Your Trip </h3>
    <form action="/api/flats" method="POST">
      <input hidden name="flatId" value={flat.id}/>
      <label htmlFor="startDate">Start Date</label>
      <input type='date' id="startDate" name="startDate" />
      <label htmlFor="endDate">End Date</label>
      <input type='date' id="endDate" name="endDate" />
      <br />
      <label htmlFor="firstName">firstName</label>
      <br />
      <label htmlFor="lastName">lastName </label>
      <br />
      <input type="REQUEST BOOKING" value="request booking"/>
    </form>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const flat = await flatsController.find(req.query.id)
  return {
    props: {flat}
  }
}

export default Flat