import flatsController from "../../../controllers/flatsController"
import Image from "next/image"
import image from "../../image/houseForAirbnb.png"
import Navbar from '../../../components/navbar'
import styles from '../../../styles/Home.module.css'

export default function coach(props) {
    const flats = props.flats
    console.log(flats)
import flatsController from "../../../controllers/flatsController"
export default function coach(props) {
    const flats = props.flats
    console.log(flats)
    return (
        <>
            <h1>Flat Details</h1>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const flats = await flatsController.find(req.query.id)
    return {
        props: { flats },
        // will be passed to the page component as props
    }
}

