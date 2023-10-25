import { AppBar, Sidebar } from 'react-admin';
import './topBar.css';

const TopBar = () => {
    return (
        <section className='containerAppBar'>
            <AppBar className="appBar">
            <h1 className='titleAppBar'>Bienvenido, Administrador</h1>
            </AppBar>
        </section>
    )
}

export default TopBar;