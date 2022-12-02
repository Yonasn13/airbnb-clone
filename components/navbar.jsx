//import { signIn, signOut } from "next-auth/react";
import Link from "next/link"
import styles from "../styles/Navbar.module.css";
export default function Component(props) {
    // fix the routes so that they send to the correct path
    return (
        
        <>
          <nav className={styles.navbar}>
              <div className={styles.navlink}>
                  <Link href={`/`}>Home Page</Link>
              </div>
              <div className={styles.navlink}>
              <Link href={'/profile'}>Profile</Link>
              </div>
          </nav>
        </>
    )
}