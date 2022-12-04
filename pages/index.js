import styles from '../styles/Home.module.css'
import flatsController from '../controllers/flatsController'
import Card from '../components/card'
import Navbar from '../components/navbar'
import Link from 'next/link'
//import Image from 'next/image'
//import image from '/image/houseForAirbnb'

export default function Home(props) {
  const flats = props.flats
  console.log(flats)
  return (
    <>
      <div className={styles.container}>
      <Navbar></Navbar>
      <div>
        <h1 className={styles.parag}>Welcome to airbnb</h1>
      </div>
      <div>
        {flats.map(flat => (<Card flat={flat} key={flat.id}>
          <Link href={`/profile/1/flats/${flat.id}`} />
        </Card>))}
      </div>
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
