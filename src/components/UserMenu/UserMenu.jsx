import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./UserMenu.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_URL;
import { BsGrid1X2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

var userLogued = {};

const UserMenu = () => {
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();

  let isAdmin;
  let isUser;
  let isCliente;
  let isColl;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleProtectedRequest = async () => {
    if (isAuthenticated) {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get(`${apiUrl}/authentication/protected`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        userLogued = response.data.user;

        if (!userLogued.blocked) {
          isUser = true;

          switch (userLogued.role) {
            case "Cliente":
              isCliente = true;
              isUser = false;
              break;

            case "Administrador":
              isAdmin = true;
              localStorage.setItem("user", JSON.stringify(userLogued));
              break;

            case "Colaborador":
              isColl = true;
              localStorage.setItem("user", JSON.stringify(userLogued));
              break;

            case "No Registrado":
              isUser = false;
              break;

            default:
              break;
          }
        } else {
          localStorage.clear();
          localStorage.removeItem("user");
          logout({ returnTo: window.location.origin });
        }
      } catch (error) {
        modalError(error.response.data.error || error.message);
      }
    }
  };

  useEffect(() => {
    handleProtectedRequest();
  }, []);

  return (
    <>
      {isAuthenticated && (
        <div className={styles.menuContainer}>
          <div className={styles.imgProfile} onClick={toggleMenu}>
            <img
              src={user.picture}
              alt={user.name}
              className={styles.imgProfile}
            />
          </div>

          <div
            className={
              menuOpen
                ? `${styles.menuInfo} ${styles.menuInfoOpen}`
                : styles.menuInfo
            }
          >
            <ul>
              <li>
                <p> Hola {userLogued.name}</p>
              </li>
              {userLogued.role === "Administrador" && (
               
                  <li>
                    <a href="/admin" rel="noopener noreferrer" onClick={closeMenu}> <BsGrid1X2Fill /> Panel de Control</a>
                  </li>
                
              )}

              {userLogued.role === "Colaborador" && (
                <li>
                  <a href="/admin" rel="noopener noreferrer" onClick={closeMenu}> <BsGrid1X2Fill /> Panel de Control</a>
                </li>
              )}
              <li>
                <LogoutButton />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;


