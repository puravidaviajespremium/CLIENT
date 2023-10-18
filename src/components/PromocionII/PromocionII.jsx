import { Link } from 'react-router-dom'
import styles from './PromocionII.module.css'

function PromocionII() {
    return (
        <div className={`${styles.promII} container`}>
            <h2>Nuestros expertos locales te llevarán a los lugares más auténticos y te garantizarán una experiencia inolvidable</h2>
            <span className={styles.line}></span>
            <p>
                No pierdas la oportunidad de vivir un turismo que cambiariá tu perspectiva del mundo. ¡Ven y únete a nosotros para comenzar
                tu viaje extraordinario hoy mismo!
            </p>
            <Link to={`/contacto`}>
                <button className={`btnPrimary btn`}>MÁS INFORMACIÓN</button>
            </Link>
        </div>
    )
}

export default PromocionII