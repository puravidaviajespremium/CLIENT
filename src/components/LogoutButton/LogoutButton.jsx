import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "./LogoutButton.module.css"


const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <>
            <a className={styles.buttonLogout} onClick={() => logout({returnTo: window.location.origin})}>Cerrar Sesión</a>
        </>
    )
}

export default LogoutButton;