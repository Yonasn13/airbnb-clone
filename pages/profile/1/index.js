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
                <div className={styles.container}>
                    <h3 className={styles.card}>
                        <Link href={`/`}>BOOK A HOUSE</Link>
                    </h3>
                    <h3 className={styles.card}>
                        <Link href="/profile/1/flats/new">HOST YOUR HOUSE 💲🤑</Link>
                    </h3>
                    <h3 className={styles.card}>
                        <Link href="/profile/1/flats/">LIST OF YOUR FLATS</Link>
                    </h3>
                    <h3 className={styles.card}>
                        <Link href={`/profile/1/bookings`}>YOUR BOOKINGS 🚀</Link>
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
