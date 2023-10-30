import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.css";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <>
      <a className={`${styles.buttonLogin} a`} onClick={() => loginWithPopup()}>
        Ingresar
      </a>
    </>
  );
};

export default LoginButton;
