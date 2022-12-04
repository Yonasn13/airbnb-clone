import flatsController from "../../controllers/flatsController";
import Link from "next/link";
import Navbar from '../../components/navbar';
import styles from "../../styles/Home.module.css"

export default function Pages(props) {
    const flats = props.flats
    return (
                <>
                    <div className={styles.container}>
                    <Navbar></Navbar>
                    <Link href="/">I will load pages/index.js file</Link><br/>
                    <Link href="/flats/">I will load pages/flats/index.js file</Link><br/>
                    <Link href={`/flats/${flats.id}`}>I will load pages/flats/[id]/index.js file</Link><br/>
                    <Link href={`/flats/${flats.id}/bookings`}>I will load pages/flats/[id]/bookings.js file</Link>
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
/*import flatsController from "../../../../controllers/flatsController"
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
                <Link href={'/'}></Link>

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
}*/
