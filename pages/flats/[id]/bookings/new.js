import flatsController from "../../../../controllers/flatsController"


export default function Flat(props) {
  const flat = props.flat
  return (
    <>
      <div className="pass">
        <h1>Request to Book {flat.address}</h1>
        <h3>Your Trip </h3>
        <form action="/flats/${id}/" method="POST">
          <input hidden name="flatId" value={flat.id} />
          <label htmlFor="startDate">Start Date</label>
          <input type='date' id="startDate" name="startDate" />
          <label htmlFor="endDate">End Date</label>
          <input type='date' id="endDate" name="endDate" />
          <br />
          <label htmlFor="firstName">First Name </label>
          <input type="name" id="firstName" />
          <br />
          <label htmlFor="lastName">Last Name </label>
          <input type="name" id="lastName" />
          <br />
          <input type="submit" value="REQUEST BOOKING" onClick="submit" />
        </form>
      </div>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const flat = await flatsController.find(req.query.id)
  return {
    props: { flat }
  }
}


