import { useState, useRef, useEffect } from "react"
import useClickOutside from "../Hooks/useClickOutside.js"
import { Link } from "react-router-dom"
import { BsSearch, BsFillPersonFill, BsList, BsXLg } from "react-icons/bs"
import styles from "./Header.module.css"


function Header() {
    const [toggleMobMenu, setToggleMobMenu] = useState(false);
    const [toggleUserMenu, setToggleUserMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [fillColor, setFillColor] = useState(false)

    // Refs
    const searchSection = useRef(null);
    const userSection = useRef(null);

    const toggleMobileMenu = () => {
        setToggleMobMenu(!toggleMobMenu)
    }

    const toggleUMenu = () => {
        setToggleUserMenu(!toggleUserMenu)
    }

    const toggleInput = () => {
        setToggleSearch(!toggleSearch)
    }

    useClickOutside(searchSection, () => {
        setToggleSearch(false)
    })

    useClickOutside(userSection, () => {
        setToggleUserMenu(false)
    })

    const navBarControl = () => {
        window.scrollY > 100 ?
            setFillColor(true) :
            setFillColor(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', navBarControl)
        return () => {
            window.removeEventListener('scroll', navBarControl)
        }
    }, [])

    return (
        <header className={`${styles.headerContBackGround} ${fillColor && styles.headerContBackGroundScroll}`}>
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
                    <div ref={searchSection}>
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
                    <div ref={userSection}>
                        <span className={styles.userIcon} onClick={toggleUMenu}>
                            <BsFillPersonFill />
                            <br />
                            {/* <h1>Log in</h1> */}
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