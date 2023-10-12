import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { BsTwitter, BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs'

const Footer = () => {
//
    return (

        <div className={styles.divFooter}>
                <div className={styles.divfooter}>

                    <img className={styles.imgLogo} src='https://cdn.discordapp.com/attachments/1159312188352245847/1161863081081700372/logo-puraVidaPremium-blanco.png?ex=6539d850&is=65276350&hm=654dff3cdae8e88379d59655c8dda826d981bfefa286839f4763e9c701e03923&' alt="Logo" />
                    <div className={styles.divSecciones}>
                        <h3>Contacto</h3>
                        <p>+506 6218 2218</p>
                        <p>info@viajespuravidapremium.com</p>
                        <p>San José, Costa Rica, 10104</p>
                    </div>

                    <div className={styles.divSecciones}>
                        <h3>Menu</h3>
                        <Link to={`/`}> <p>Home</p> </Link>
                        <Link to={`/destinos`}> <p>Destinos</p> </Link>
                        <Link to={`/contacto`}> <p>Contacto</p> </Link>
                    </div>

                    <div className={styles.divSecciones}>
                        <h3>Información</h3>
                        <Link to={`/contacto`}> <p>Contacto</p> </Link>
                        <p>Términos y condiciones</p>
                        <p>Privacidad</p>
                    </div>

                    <div className={styles.divSecciones}>
                        <h3>Seguinos en</h3>
                        <div className={styles.divRedes}>
                            <a href='https://www.facebook.com/PuraVidaPremiumTravelExperience/'> <p><BsFacebook/></p> </a>
                            <a href='https://instagram.com/puravidapremiumtravelxperience?igshid=MWZjMTM2ODFkZg=='> <p> <BsInstagram/> </p></a>
                        </div>
                        
                    </div>


                </div>
            
            <p>Copyright © Pura Vida Viajes 2023 All rights reserved</p>

        </div>
        
            
    )
}

export default Footer;