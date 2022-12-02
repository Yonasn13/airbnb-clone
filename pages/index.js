
import flatsController from '../controllers/flats'
import Card from '../components/card'
import Navbar from '../components/navbar'
export default function Home(props) {
  const flats = props.flats
  console.log(flats)
  return (
    <>
      <div className={styles.container}>
      <Navbar></Navbar>
        <h1>Welcome to airbnb</h1>
        {flats.map(flat => (<Card flat={flat} key={flat.id}></Card>))}
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
