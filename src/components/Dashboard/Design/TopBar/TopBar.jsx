import { AppBar} from 'react-admin';

const TopBar = () => {
    return (
        <section className='containerAppBar'>
            <AppBar className="appBar">
                <h2 className='titleAppBar'>Bienvenido, Administrador</h2>
            </AppBar>
        </section>
    )
}

export default TopBar;