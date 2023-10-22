import { Link } from 'react-router-dom'
import styles from './FeaturedSection.module.css'

function FeaturedSection() {
    return (
        <div className={styles.contFeatSect}>
            <div className={`${styles.featSect} container`}>
                <div className={styles.featSectLeft}>
                    <h2>Nuestros expertos locales te llevarán a los lugares más auténticos y te garantizarán una experiencia inolvidable</h2>
                    {/* <span className={styles.line}></span> */}
                    <p>
                        No pierdas la oportunidad de vivir un turismo que cambiariá tu perspectiva del mundo. ¡Ven y únete a nosotros para comenzar tu viaje extraordinario hoy mismo!
                    </p>
                </div>
                <div className={styles.featSectRight}>
                    <Link to={`/contacto`}>
                        <button className={`btnPrimary btn`}>MÁS INFORMACIÓN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSection