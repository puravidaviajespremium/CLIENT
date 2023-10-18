import { Link } from 'react-router-dom'
import { BsGlobeAmericas, BsFillCreditCardFill, BsStars } from 'react-icons/bs'
import styles from './PromocionIII.module.css'

function PromocionIII() {
    return (
        <div className={`${styles.promIIICont} container`} >
            <div className={styles.textPromIII}>
                <h3>
                    Nuestro equipo altamente calificado se especializa en crear experiencias de viaje únicas, garantizando
                    momentos memorables mientras exploras tus destinos preferidos. Nuestra misión es transformar cada viaje
                    en una vivencia única y ¡Contáctanos hoy y comencemos tu próxima aventura!
                </h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.rightPromIII}>
                <ul>
                    <li><BsGlobeAmericas className={styles.icon} /> Personalizamos tu destino viajero.</li>
                    <li><BsFillCreditCardFill className={styles.icon} />Contamos con todos los medios de pago.</li>
                    <li><BsStars className={styles.icon} />Te garantizamos un servicio inolvidable.</li>
                </ul>
                <Link to={`/contacto`}>
                    <button className={`btnPrimary btn`}>MÁS INFORMACIÓN</button>
                </Link>
            </div>
        </div>
    )
}

export default PromocionIII