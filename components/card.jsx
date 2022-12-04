import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function Component({ flat }) {

  return (
    <div className={styles.card}>
      <Link href={`/profile/1/flats/${flat.id}`}>
        <h3>{flat.address}</h3>
        <p>${flat.price}</p>
      </Link>
    </div>
  )
}