import { Menu } from 'react-admin';
import PublicIcon from '@mui/icons-material/Public';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';

const MyMenu = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const isAdmin = user && user.role === "Administrador";
    const isColl = user && user.role === "Colaborador";

    return (
        <Menu className='myMenu'>
            { isColl && (
                <>
                <Menu.Item to="/admin/clients" primaryText="Mis Clientes" leftIcon={<SupervisedUserCircleIcon />} className='menuOption'/>
                </>
            )},

            { isAdmin && (
                <>
                    <Menu.Item to="/admin/clients" primaryText="Clientes" leftIcon={<SupervisedUserCircleIcon />} className='menuOption'/>
                    <Menu.Item to="/admin/countries" primaryText="Países" leftIcon={<PublicIcon />} className='menuOption'/>
                    <Menu.Item to="/admin/users" primaryText="Usuarios" leftIcon={<AccountCircleIcon />} className='menuOption'/>
                    <Menu.Item to="/admin/metrics" primaryText="Métricas" leftIcon={<AssessmentIcon />} className='menuOption'/>
                </>
            )}

        </Menu>
    )
}

export default MyMenu;