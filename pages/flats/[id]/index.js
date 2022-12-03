import flatsController from "../../../controllers/flatsController"
import Image from "next/image"
import image from "../../image/houseForAirbnb.png"
import Navbar from '../../../components/navbar'
import styles from '../../../styles/Home.module.css'

export default function coach(props) {
    const flats = props.flats
    console.log(flats)
    return (
        <>
            <div className={styles.container}>
                <Navbar></Navbar>
                <div>
                    <Image src={image} alt={"Image of a house"} width={200} height={200} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur.<br />
                        Lacus porttitor ac a cras viverra nascetur tincidunt et lectus.<br />
                        Elementum ac dui pellentesque purus.
                    </p>
                    <h4 key={flats.id}>
                        Address: {flats.address}<br />
                        Price: ${flats.price}
                    </h4>
                </div>
                <div>
                    <form action={`../api/flats`} method="POST">
                        <input hidden name="flatId" value={flats.id} />
                        <label htmlFor="startDate">Start Date </label>
                        <input type='date' id="startDate" name="startDate" />
                        <label htmlFor="endDate"> - End Date </label>
                        <input type='date' id="endDate" name="endDate" />
                        <br />
                        <br />
                        <input type="submit" value="REQUEST BOOKING" />
                    </form>
                </div>
            </div>
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

