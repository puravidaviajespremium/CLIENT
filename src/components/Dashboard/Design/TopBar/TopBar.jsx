import { AppBar} from 'react-admin';

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