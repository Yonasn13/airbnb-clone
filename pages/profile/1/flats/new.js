import styles from '../../../../styles/Home.module.css'
import Navbar from '../../../../components/navbar'

export default function NewFlat(props) {
    return (
        <>
            <div className={styles.container}>
                <Navbar></Navbar>
                <h1>HOST YOUR HOUSE / add a new house</h1>
            </div>
        </>
    )
}