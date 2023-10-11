import NavBar from "../../components/NavBar/NavBar"
import styles from "./Header.module.css"

function Header() {
    return (
        <div>

            <NavBar />
            <div className={styles.slogan}>
                <h1>Comience su <br/>viaje con nosotros.</h1>
                <p>Destinos de Ensueño. Experiencias inolvidables...</p>
            </div>

        </div>
    )
}

export default Header;