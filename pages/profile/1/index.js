import flatsController from "../../../controllers/flatsController";
import Link from "next/link";
import Navbar from '../../../components/navbar';
import styles from "../../../styles/Home.module.css"

export default function Pages(props) {
    const flats = props.flats
    return (
        <>
            <div className={styles.container}>
                <Navbar></Navbar>
                <div>
                    <h3>
                        <Link href="/">I will load pages/index.js file (HomePage)</Link><br/>
                        <Link href="/profile/1/flats/">I will load pages/profile/1/flats/index.js file</Link><br/>
                        <Link href={`/profile/1/flats/1`}>I will load pages/profile/1/flats/[id]/index.js file</Link><br/>
                        <Link href={`/profile/1/bookings`}>I will load pages/profile/1/flats/[id]/bookings.js file</Link>
                    </h3>
                </div>
            </div>
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
