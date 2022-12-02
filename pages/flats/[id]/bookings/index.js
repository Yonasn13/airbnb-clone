import bookingsController from "../../../../controllers/bookings"
export default function Profile(props) {
    const bookings = props.bookings
    console.log(bookings)
    return (
        <>
            <h1>List of Trips</h1>
            <ol>
                <li>Rome, IT</li>
                <li>Freetown, SL</li>
                <li>Washington DC, USA</li>
                <li>London, UK</li>

            </ol>
        </>
    )

}

export async function getServerSideProps(req, res) {
    const id = req.query.id
    const bookings = await bookingsController.findAll()
    return {

        props: { bookings },
        // will be passed to the page component as props
    }
}
