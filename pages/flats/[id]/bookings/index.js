import flatsController from "../../../../controllers/flatsController"
import Link from "next/link"
export default function coach(props) {
    const flats = props.flats
    console.log(flats)
    return (
        <>
            <div>
                <h1>List of Bookings</h1>
                <p>
                    Your home is waiting you
                </p>
                {flats.map(flat => (
                    <p key={flat.id} >Address: {flat.address}<br />
                        Price: {flat.price}</p>
                ))}
                <Link href={'/index.js'} />

            </div>
            <div>
            </div>
        </>
    )
}
//{ flats.map(flat => (<Card flat={flat} key={flat.id}></Card>)) }
export async function getServerSideProps(req, res) {
    const flats = await flatsController.all()
    return {
        props: { flats },
        // will be passed to the page component as props
    }
}
