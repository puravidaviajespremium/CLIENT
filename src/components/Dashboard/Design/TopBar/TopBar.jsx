import { AppBar} from 'react-admin';
import UserMenu from '../../../UserMenu/UserMenu';

const TopBar = () => {


    const user = JSON.parse(localStorage.getItem("user"));
    const isAdmin = user && user.role === "Administrador";
    const isColl = user && user.role === "Colaborador";

    return (
     
        <section className='containerAppBar'>
                {isAdmin && 
                <AppBar className="appBar" >
                    <h2 className='titleAppBar'>{` Bienvenido, ${user.name} `}  </h2>
                    <section className="menuNavBar">
                        <a href="/" rel="noopener noreferrer" target='_blank'> Home </a>               
                        <UserMenu/>
                    </section>
                </AppBar>}

                {isColl && 
                <AppBar className="appBar">
                    <section className="menuNavBar">
                        <h2 className='titleAppBar'>{` Bienvenido, ${user.name} `} </h2>
                        <a href="/" rel="noopener noreferrer" target='_blank'> Home </a>
                        <UserMenu/>
                    </section>
                </AppBar>}

        </section>
    )
}

export default TopBar;