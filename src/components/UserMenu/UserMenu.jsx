import React, { useState, useEffect } from "react";
import { useAuth0  } from "@auth0/auth0-react";
import styles from "./UserMenu.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import axios from "axios";

const UserMenu = () => {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleProtectedRequest = async () => {
    if (isAuthenticated) {
      try {
        const token = await getAccessTokenSilently();
        console.log(token)
        const response = await axios.get("http://localhost:3001/authentication/protected", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        console.log(user)
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    handleProtectedRequest();
  }, [])

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
              {/* <li> <p> Dashboard</p></li> */}
              <li> <LogoutButton/>  </li>
            </ul>
          </div>
        </div>
        
      )}
    </>
  );
};

export default UserMenu;

