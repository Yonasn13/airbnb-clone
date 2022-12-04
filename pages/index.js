import styles from '../styles/Home.module.css'
import flatsController from '../controllers/flatsController'
import Card from '../components/card'
import Navbar from '../components/navbar'
import Link from 'next/link'


export default function Home(props) {
  const flats = props.flats
  console.log(flats)
  return (
    <>
      <div className={styles.container}>
      <Navbar></Navbar>
      
        {flats.map(flat => (<Card flat={flat} key={flat.id}></Card>))}
       
        <Link href={`/flats/${flats.id}/`}/>
        <Link href={"/flats/profile/new.js"}/>
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
