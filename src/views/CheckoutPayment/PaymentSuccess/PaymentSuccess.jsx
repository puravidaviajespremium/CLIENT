import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import { BsCheck2Circle } from "react-icons/bs"
import styles from './PaymentSuccess.module.css'

const PaymentSuccess = () => {
    const location = useLocation();

    const nameParam = new URLSearchParams(location.search);

    const name = nameParam.get('name')

    return (
        <div className={styles.successSection}>
            <div className={styles.fillNavBar}></div>
            <div className={`${styles.contSuccess} container`}>
                <div className={styles.contLeft}>
                    <div className={styles.contImg}>
                        <img src="/images/successImg.png" alt="" />
                    </div>
                </div>
                <div className={styles.contRight}>
                    <div className={styles.contIcon}>
                        <h2><BsCheck2Circle /></h2>
                    </div>
                    <div className={styles.contText}>
                        <h1>Gracias por confiar en nosotros, {name}.</h1>
                        <p>¡Estamos comprometidos en hacer de tu experiencia de viaje algo inolvidable! nos pondremos en contacto contigo pronto.</p>
                    </div>
                    <div className={styles.contBtn}>
                        <Link to="/">
                            <button className={`btnPrimary`}>REGRESAR AL INICIO</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess;