import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
//
    return (

        <footer className={styles.divFooter}>
                <div className={`${styles.divfooter} container`}>

                    <img className={styles.imgLogo} src='/images/logo-empresa_2.png' alt="" />
                    <div className={styles.divSections}>
                        <h3>Contacto</h3>
                        <p>+506 6218 2218</p>
                        <p>info@viajespuravidapremium.com</p>
                        <p>San José, Costa Rica, 10104</p>
                    </div>

                    <div className={styles.divSections}>
                        <h3>Menu</h3>
                        <Link to={`/`}> <p>Home</p> </Link>
                        <Link to={`/destinos`}> <p>Destinos</p> </Link>
                        <Link to={`/contacto`}> <p>Contacto</p> </Link>
                    </div>

                    <div className={styles.divSections}>
                        <h3>Información</h3>
                        <Link to={`/faqs`}> <p>Preguntas Frecuentes</p> </Link>
                        
                    </div>

                    <div className={styles.divSections}>
                        <h3>Síguenos en</h3>
                        <div className={styles.divRedes}>
                            <a href='https://www.facebook.com/PuraVidaPremiumTravelExperience/'> <p><BsFacebook/></p> </a>
                            <a href='https://instagram.com/puravidapremiumtravelxperience?igshid=MWZjMTM2ODFkZg=='> <p> <BsInstagram/> </p></a>
                        </div>
                        
                    </div>


                </div>
            
            <p>Copyright © Pura Vida Viajes 2023 All rights reserved</p>

        </footer>
        
            
    )
}

export default Footer;