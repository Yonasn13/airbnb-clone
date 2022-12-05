import styles from '../../../../styles/Home.module.css'
import Navbar from '../../../../components/navbar'
import ImageUpload from '../../../../components/imageUpload'

export default function NewFlat(props) {
    return (
        <>
            <div className={styles.container}>
                <Navbar></Navbar>
                <form>
                    <label htmlFor='Description'>Description: </label>
                    <input type="text" id="Description" name="Description" /><br/>
                    <label htmlFor='Price'>Price: </label>
                    <input type="text" id="Price" name="Price"/><br/>
                    <ImageUpload></ImageUpload>
                    <input type="Submit" value="Submit" />

                </form>
            </div>
        </>
    )
}