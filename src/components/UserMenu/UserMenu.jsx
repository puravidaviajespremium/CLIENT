import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./UserMenu.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

const UserMenu = () => {

  const { user, isAuthenticated } = useAuth0();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <>
      {isAuthenticated && (
        <div className={styles.menuContainer}>

          <div className={styles.imgProfile} onClick={toggleMenu}>
            <img src={user.picture} alt={user.name} className={styles.imgProfile}/>
          </div>

          <div className={menuOpen ? `${styles.menuInfo} ${styles.menuInfoOpen}` : styles.menuInfo}>
            <ul>
              <li> <p> Hola... {user.email}</p> </li>
              {/* <li> <p> Historial de pagos</p></li> */}
              <li> <LogoutButton/>  </li>
            </ul>
          </div>
           
        </div>
        
      )}
    </>
  );
};

export default UserMenu;

