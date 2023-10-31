import { AppBar} from 'react-admin';
import UserMenu from '../../../UserMenu/UserMenu';

const TopBar = () => {


    const user = JSON.parse(localStorage.getItem("user"));
    const isAdmin = user && user.role === "Administrador";
    const isColl = user && user.role === "Colaborador";

    return (
     
        <section className='containerAppBar'>
                <a href="/" rel="noopener noreferrer" target='_blank'> HOME </a>
                {isAdmin && 
                <AppBar className="appBar">
                    <h2 className='titleAppBar'>{` Bienvenido, ${user.name} `}  </h2>
                    <UserMenu/>
                    <a href="/" rel="noopener noreferrer" target='_blank'> HOME </a>               
                </AppBar>}

                {isColl && 
                <AppBar className="appBar">
                    <h2 className='titleAppBar'>{` Bienvenido, ${user.name} `} </h2>
                    <UserMenu/>
                    <a href="/" rel="noopener noreferrer" target='_blank'> HOME </a>
                </AppBar>}

                
            
        </section>
    )
}

export default TopBar;