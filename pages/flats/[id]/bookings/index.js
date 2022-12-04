import flatsController from "../../../../controllers/flatsController"
import Image from "next/image"
import flat from "../../../../database/models/flat"

export default function coach(props) {
    const flats = props.flats
    console.log(flats)
    return (
        <>
            <h1>List of Bookings</h1>
            {flats.map(flat => (
                <p key={flat.id} >Address: {flat.address}<br />
                    Price: {flat.price}</p>))}
            <Image src={flat.imageUrl} alt="image upload" width={50} height={50} ></Image>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const flats = await flatsController.all()
    return {
        props: { flats },
        // will be passed to the page component as props
    }
}
