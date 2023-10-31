import { Menu } from 'react-admin';
import PublicIcon from '@mui/icons-material/Public';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';

const MyMenu = () => {
    return (
        <Menu className='myMenu'>
            <Menu.Item to="/admin/clients" primaryText="Clientes" leftIcon={<SupervisedUserCircleIcon />} className='menuOption'/>
            <Menu.Item to="/admin/countries" primaryText="Países" leftIcon={<PublicIcon />} className='menuOption'/>
            <Menu.Item to="/admin/users" primaryText="Usuarios" leftIcon={<AccountCircleIcon />} className='menuOption'/>
            <Menu.Item to="/admin/metrics" primaryText="Métricas" leftIcon={<AssessmentIcon />} className='menuOption'/>
        </Menu>
    )
}

export default MyMenu;