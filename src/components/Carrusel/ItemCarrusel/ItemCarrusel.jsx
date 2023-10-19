import {BsChevronRight} from 'react-icons/bs';
import './itemCarrusel.css';
import { Link } from 'react-router-dom';


const ItemCarrusel = ({id, name, image}) => {
   
    return (
        <div className="containerItem">
            <div className="headeritem">
                <img src={image} alt={name} />
            </div>
            <div className="bodyItem">
                <h2 className='nameItem'>{name}</h2>
                <Link to={`/detalle/${id}`}> 
                    <div className="btnItem">
                        <BsChevronRight />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ItemCarrusel;