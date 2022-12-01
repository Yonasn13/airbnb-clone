import { signIn, signOut } from "next-auth/react";
import Link from "next/link"
import styles from "../styles/Navbar.module.css";
export default function Component(props) {
    // fix the routes so that they send to the correct path
    const session = props.session
    return (
        <nav className={styles.navbar}>
            <div className={styles.navlink}>
                <Link href={`/`}>Home Page</Link>
            </div>
            <div className={styles.navlink}>
                {session ? <button onClick={() => signOut}>Sign Out</button> : <button onClick={() => signIn}>Sign in</button>}
            </div>
        </nav>
    )
}
