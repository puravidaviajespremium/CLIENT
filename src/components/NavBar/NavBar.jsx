import { Link } from "react-router-dom"
import { useState } from "react"
import styles from "./NavBar.module.css"
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'


function NavBar() {
    const [toggleMobMenu, setToggleMobMenu] = useState(false);
    const [toggleUserMenu, setToggleUserMenu] = useState(false)

    const toggleMobileMenu = () => {
        setToggleMobMenu(!toggleMobMenu)
    }

    const toggleUMenu = () => {
        setToggleUserMenu(!toggleUserMenu)
    }

    return (
        <div>


            {/* DESKTOP */}
            <header className={styles.headerDesk}>
                <img className={styles.imgLogo} src='/logo-empresa_2.png' alt="" />

                <nav className={styles.deskMenu}>
                    <Link to="/">Home</Link>
                    <Link to="/destinos">Destinos</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>

                <div>
                    <span className={styles.userIcon} onClick={toggleUMenu}>
                        <AiOutlineUser />
                    </span>
                    <div className={styles.contUM}>
                        <nav className={`${styles.userMenu}  ${toggleUserMenu && styles.userMenuActive}`}>
                            <ul>
                                <Link to="/register"><li>Sign in</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>



            {/* MOBILE */}
            <header className={styles.mobileHeader}>
                <img className={styles.imgLogo} src='/logo-empresa_2.png' alt="" />

                <div>
                    <span className={styles.menuIcon} onClick={toggleMobileMenu}>
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
            </header>


        </div>
    )
}

export default NavBar