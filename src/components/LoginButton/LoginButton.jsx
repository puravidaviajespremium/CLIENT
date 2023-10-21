import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "./LoginButton.module.css"

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0()

    return (
        <>
            <a className={styles.buttonLogin} onClick={ () => loginWithRedirect()}>Ingresar</a>
        </>
    )
}

export default LoginButton;