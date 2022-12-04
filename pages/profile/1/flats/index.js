import styles from '../../../../styles/Home.module.css'
import Navbar from '../../../../components/navbar'

export default function NewFlat(props) {
    return (
        <>
            <div className={styles.container}>
                <Navbar></Navbar>
                <h1>LIST OF YOUR HOUSES</h1>
            </div>
        </>
    )
}