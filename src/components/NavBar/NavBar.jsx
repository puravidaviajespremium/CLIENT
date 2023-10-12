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
                <h1 className={styles.titleNB}>PURA VIDA VIAJES</h1>

                <nav className={styles.deskMenu}>
                    <Link to="/home">Home</Link>
                    <Link to="/destinos">Destinos</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>

                <div>
                    <span onClick={toggleUMenu}>
                        <AiOutlineUser />
                    </span>

                    <nav className={styles.userMenu}>
                        <ul>
                            <li>Sign in</li>
                        </ul>
                    </nav>
                </div>
            </header>


            {/* MOBILE */}
            <header className={styles.mobileHeader}>
                <h1 className={styles.titleNB}>PURA VIDA VIAJES</h1>

                <div>
                    <span className={styles.menuIcon} onClick={toggleMobileMenu}>
                        {toggleMobMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </span>

                    <nav className={toggleMobMenu ? styles.mobileMenuContActive : styles.mobileMenuCont}>
                        <ul>
                            <Link to="/home"><li>Home</li></Link>
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