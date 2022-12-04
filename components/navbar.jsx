//import { signIn, signOut } from "next-auth/react";
import Link from "next/link"
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import image from "../pages/image/airbnb logo.png"
export default function Component(props) {
    // fix the routes so that they send to the correct path
    return (
        
        <>
          <nav className={styles.navbar}>
              <div className={styles.navlink}>
                  <Link href={`/`}>
                    <Image src={ image } alt="airbnb logo" width={50} height={30}/>
                  </Link>
              </div>
              <div className={styles.navlink}>
              <Link href={'/profile/1'}>Profile</Link>
              </div>
          </nav>
        </>
    )
}