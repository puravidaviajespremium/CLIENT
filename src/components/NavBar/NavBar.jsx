import { Link } from "react-router-dom"
import { useState } from "react"
import styles from "./NavBar.module.css"
import { AiOutlineMenu } from 'react-icons/ai'

function NavBar() {
    const [toggleMobMenu, setToggleMobMenu] = useState(false);
    const [toggleUserMenu, setToggleUserMenu] = useState(false)

    const toggleMobileMenu = () => {
        setToggleMobMenu(!toggleMobMenu)
    }

    const toggleUMenu = () => {
        setToggleUserMenu(!setToggleUserMenu)
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
                    <button >Search</button>
                    <button onClick={toggleUMenu}>user</button>
                    {
                        toggleUserMenu && <nav>
                            <ul>
                                <li>SingIn</li>
                                <li>LogIn</li>
                                <li>LogOut</li>
                            </ul>
                        </nav>
                    }
                </div>
            </header>


            {/* MOBILE */}
            <header className={styles.mobileHeader}>
                <h1 className={styles.titleNB}>PURA VIDA VIAJES</h1>
                <div>
                    <span className={styles.menuIcon} onClick={toggleMobileMenu}><AiOutlineMenu /></span>
                    {
                        toggleMobMenu && <nav className={styles.mobileMenuCont}>
                            <Link to="/home"><li>Home</li></Link>
                            <Link to="/destinos"><li>Destinos</li></Link>
                            <Link to="/contacto"><li>Contacto</li></Link>
                        </nav>
                    }
                </div>
            </header>


        </div>
    )
}

export default NavBar