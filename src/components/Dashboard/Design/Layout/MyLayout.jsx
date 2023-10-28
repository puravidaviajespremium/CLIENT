import { Layout } from 'react-admin';
import TopBar from '../TopBar/TopBar';
import MyMenu from '../Menu/MyMenu';
import '../../utils/styleDashboard.css'

const MyLayout = (props) => {
    return (
        <Layout {...props} appBar={TopBar} menu={MyMenu} className='myLayout'/>   
    )
}

export default MyLayout;