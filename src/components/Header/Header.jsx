import { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'
import { LuSearch } from 'react-icons/lu'
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


                <img className={styles.imgLogo} src='/images/logo-empresa_2.png' alt="" />

                <nav className={styles.deskMenu}>
                    <Link to="/">Home</Link>
                    <Link to="/destinos">Destinos</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>



                <div className={styles.menus} >
                    <div >
                        <span className={styles.searchIcon} onClick={toggleInput}>
                            <LuSearch />
                        </span>
                    {/* <div>
                        <input type="text" placeholder="Buscar pais"/>
                    </div> */}

                    </div>
                    {/* DESKTOP */}
                    <span className={styles.userIcon} onClick={toggleUMenu}>
                        <AiOutlineUser />
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
                            {toggleMobMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
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