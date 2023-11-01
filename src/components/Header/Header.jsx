import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useClickOutside from "../Hooks/useClickOutside.js";
import { Link } from "react-router-dom";
import { BsSearch, BsList, BsXLg } from "react-icons/bs";
import { getAllCountries, countriesFilter } from "../../redux/actions/countriesActions.js";
import styles from "./Header.module.css";

//Auth0
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton/LoginButton.jsx";
import UserMenu from "../UserMenu/UserMenu";
// import axios from "axios";

function Header() {
  // Estados booleanos
  const [toggleMobMenu, setToggleMobMenu] = useState(false);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [fillColor, setFillColor] = useState(false); //              <------ Cambia el color de la navbar

  // Estado de busqueda
  const [searchValue, setSearchValue] = useState("");
  const findCountries = useSelector((state) => state.countries.searchResult);

  const dispatch = useDispatch();

  // Refs
  const searchSection = useRef(null);
  const userSection = useRef(null);

  const toggleMobileMenu = () => {
    setToggleMobMenu(!toggleMobMenu);
  };

  const toggleUMenu = () => {
    setToggleUserMenu(!toggleUserMenu);
  };

  const toggleInput = () => {
    setToggleSearch(!toggleSearch);
  };

  const handleClicSearch = () => {
    setSearchValue("");
  };

  useClickOutside(searchSection, () => {
    setToggleSearch(false);
    setSearchValue("");
  });

  useClickOutside(userSection, () => {
    setToggleUserMenu(false);
  });

  const handleSearchInput = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const navBarControl = () => {
    window.scrollY > 100 ? setFillColor(true) : setFillColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarControl);
    return () => {
      window.removeEventListener("scroll", navBarControl);
    };
  }, []);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(countriesFilter(searchValue));
  }, [searchValue]);

  // Authentication

  const { isAuthenticated } = useAuth0();

  return (
    <header
      className={`${styles.headerContBackGround} ${
        fillColor && styles.headerContBackGroundScroll
      }`}
    >
      <div className={`${styles.headerCont} container`}>
        <Link to="/">
          <img
            className={styles.imgLogo}
            src="/images/logo-empresa_2.png"
            alt=""
          />
        </Link>

        <nav className={styles.deskMenu}>
          <Link to="/">Home</Link>
          <Link to="/destinos">Destinos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        
        <div className={styles.menus}>
          <div ref={searchSection}>
            <span className={styles.searchIcon} onClick={toggleInput}>
              <BsSearch />
            </span>

            <div
              className={`${styles.searchSection} ${
                toggleSearch && styles.searchSectionActive
              }`}
              >
              <div>
                <input
                  type="text"
                  placeholder="Buscar pais"
                  value={searchValue}
                  onChange={handleSearchInput}
                  />
                {searchValue &&
                  findCountries?.map((country) => (
                    <Link to={`detalle/${country.id}`}>
                      <li key={country.id} onClick={handleClicSearch}>
                        {country.name}
                      </li>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
                  {isAuthenticated ? (
                    <>
                      <UserMenu />
                    </>
                  ) : (
                    <LoginButton />
                  )}

          {/* DESKTOP */}
          <div ref={userSection}>
            <span className={styles.userIcon} onClick={toggleUMenu}>
              <br />
            </span>
            <div className={styles.desktopHeader}>
              <div className={styles.contUM}>
                <nav
                  className={`${styles.userMenu}  ${
                    toggleUserMenu && styles.userMenuActive
                  }`}
                >
                  <ul>
                    <Link to="/signin">
                      <li>Sign in</li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className={styles.mobileHeader}>
            <span className={styles.burgerIcon} onClick={toggleMobileMenu}>
              {toggleMobMenu ? <BsXLg /> : <BsList />}
            </span>
            <nav
              className={`${styles.mobileMenuCont}  ${
                toggleMobMenu && styles.mobileMenuContActive
              }`}
            >
              <ul>
                <Link to="/" onClick={toggleMobileMenu}>
                  <li>Home</li>
                </Link>
                <Link to="/destinos" onClick={toggleMobileMenu}>
                  <li>Destinos</li>
                </Link>
                <Link to="/contacto" onClick={toggleMobileMenu}>
                  <li>Contacto</li>
                </Link>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
