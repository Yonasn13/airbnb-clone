import flatsController from "../../../../controllers/flatsController"

export default function coach(props) {
    const flats = props.flats
    console.log(flats)
    return (
        <div>
            <h1>List of Bookings</h1>
            {flats.map(flat => (
                <p key={flat.id} >Address: {flat.address}<br />
                    Price: {flat.price}</p>
            ))}
        </div>
    )
}

export async function getServerSideProps(req, res) {
    const flats = await flatsController.all()
    return {
        props: { flats },
        // will be passed to the page component as props
    }
}
