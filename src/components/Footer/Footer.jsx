import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className={styles.divFooter}>

            <div className={styles.divMarca}>
                <h4>PURA VIDA VIAJES PREMIUM</h4>
                <p>Copyright © Pura Vida Viajes 2023 All rights reserved</p>
            </div>

            <div className={styles.divMenu}>
                <h4>Menu</h4>
                <Link to={`/`}> <p>Home</p> </Link>
                <Link to={`/destinos`}> <p>Destinos</p> </Link>
                <Link to={`/contacto`}> <p>Contacto</p> </Link>
            </div>

            <div className={styles.divInformacion}>
                <h4>Información</h4>
                <Link to={`/contacto`}> <p>Contacto</p> </Link>
                <p>Términos y condiciones</p>
                <p>Privacidad</p>
            </div>

            <div className={styles.divContacto}>
                <h4>Contacto</h4>
                <p>Telefono</p>
                <p>Email</p>
                <p>Dirección</p>
            </div>

            <div className={styles.divRedesSociales}>
                <h4>Seguinos en</h4>
                <p>Facebook</p>
                <p>Pinteres</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>

        </div>
            
    )
}

export default Footer;