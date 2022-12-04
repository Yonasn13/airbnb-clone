import { signIn, signOut } from "next-auth/react";
import Link from "next/link"
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar(props) {
    // fix the routes so that they send to the correct path
    const session = props.session
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navlink}>
                    <Link href={`/`}>
                    <Image className={styles.logo} src={'/images/hd-airbnb-logo-drawing.png'} alt='airbnb logo' width={100} height={300}/></Link>
                </div>
                <div >

                </div>
                <div className={styles.navlink}>
                    <Link href={'flats/profile'}>Profile</Link>
                </div>
                <div className={styles.navlink}>
                    {session ? <button onClick={() => signOut}>Sign Out</button> : <button onClick={() => signIn}>Sign in</button>}
                </div>
            </nav>
        </>
    )
}