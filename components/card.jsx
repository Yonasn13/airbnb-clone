import Link from "next/link"
import styles from "../styles/Home.module.css";


export default function Component({flat}) {

  return (
    <Link href = {`/flats/${flat.id}`}>
      <div className = {styles.card}>
        <h3>{flat.address}</h3>
        <p>{flat.price}</p>
      </div>
    </Link>
  )
}