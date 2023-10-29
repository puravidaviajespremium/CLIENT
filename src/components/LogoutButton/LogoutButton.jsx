import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const closeSession = () => {
    localStorage.clear();
    localStorage.removeItem("user");
    logout({ returnTo: window.location.origin });
  };

  const { logout } = useAuth0();

  return (
    <>
      <a className={styles.buttonLogout} onClick={closeSession}>
        Cerrar Sesión
      </a>
    </>
  );
};

export default LogoutButton;
