
import flatsController from '../../../controllers/flatsController'
export default function coach(props) {
    const flats = props.flats
    return (
        <>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur.<br />
                    Lacus porttitor ac a cras viverra nascetur tincidunt et lectus.<br />
                    Elementum ac dui pellentesque purus.
                </p>
                {flats.map(flat => (
                    <p key={flat.id} >Address: {flat.address} <br />
                        Price: {flat.price}</p>
                ))}
            </div>
            <div>
                <form action={`/flats/id/bookings/new`} method="POST">
                    <input hidden name="flatId" value={flats.id} />
                    <label htmlFor="startDate">Start Date</label>
                    <input type='date' id="startDate" name="startDate" />
                    <label htmlFor="endDate">End Date</label>
                    <input type='date' id="endDate" name="endDate" />
                    <br/>
                    <input type="submit" value="Book your dream house" onClick="submit" />
                </form>
            </div>
        </>
    )
}
export async function getServerSideProps(req, res) {
    const flats = await flatsController.all()
    return {
        props: { flats },
    }
}

