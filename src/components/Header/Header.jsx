import { useState } from "react"
import { Link } from "react-router-dom"
import { BsSearch, BsFillPersonFill, BsList, BsXLg } from "react-icons/bs"
import styles from "./Header.module.css"


function Header() {
    const [toggleMobMenu, setToggleMobMenu] = useState(false);
    const [toggleUserMenu, setToggleUserMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);

    const toggleMobileMenu = () => {
        setToggleMobMenu(!toggleMobMenu)
    }

    const toggleUMenu = () => {
        setToggleUserMenu(!toggleUserMenu)
    }

    const toggleInput = () => {
        setToggleSearch(!toggleSearch)
    }

    return (
        <header className={styles.headerCont}>
            <div className={`${styles.headerCont} container`}>

                <Link to="/">
                    <img className={styles.imgLogo} src='/images/logo-empresa_2.png' alt="" />
                </Link>

                <nav className={styles.deskMenu}>
                    <Link to="/">Home</Link>
                    <Link to="/destinos">Destinos</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>

                <div className={styles.menus} >
                    <div >
                        <span className={styles.searchIcon} onClick={toggleInput}>
                            <BsSearch />
                        </span>

                        <div className={`${styles.searchSection} ${toggleSearch && styles.searchSectionActive}`}>
                            <div>
                                <input type="text" placeholder="Buscar pais" />
                                <li>Resultado de busqueda</li>
                                <li>Resultado de busqueda</li>
                                <li>Resultado de busqueda</li>
                            </div>
                        </div>
                    </div>

                    {/* DESKTOP */}
                    <span className={styles.userIcon} onClick={toggleUMenu}>
                        <BsFillPersonFill />
                    </span>
                    <div className={styles.desktopHeader}>
                        <div className={styles.contUM}>
                            <nav className={`${styles.userMenu}  ${toggleUserMenu && styles.userMenuActive}`}>
                                <ul>
                                    <Link to="/register"><li>Sign in</li></Link>
                                </ul>
                            </nav>
                        </div>
                    </div>


                    {/* MOBILE */}
                    <div className={styles.mobileHeader}>
                        <span className={styles.burgerIcon} onClick={toggleMobileMenu}>
                            {toggleMobMenu ? <BsXLg /> : <BsList />}
                        </span>

                        <nav className={`${styles.mobileMenuCont}  ${toggleMobMenu && styles.mobileMenuContActive}`}>
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/destinos"><li>Destinos</li></Link>
                                <Link to="/contacto"><li>Contacto</li></Link>
                                <Link to="/SingIn"><li>Sign in</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Header