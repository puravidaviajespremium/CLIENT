import { useRedirect } from 'react-admin'
import { useLocation } from 'react-router-dom';

const BackButton = () => {
    const redirect = useRedirect();
    const location = useLocation();

    const currentPath = location.pathname;
    const paths = currentPath.split('/')
    const resource = paths[2]

    const handleClick = () => {
        redirect(`/admin/${resource}`)
    }

    return (
        <button className="buttonBack" onClick={handleClick}>
            REGRESAR
        </button>
    )
};

export default BackButton;