import {BsFillStarFill, BsChevronRight} from 'react-icons/bs';
import './itemCarrusel.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ItemCarrusel = ({name, image}) => {
    const [toggle, setToggle] = useState(false);

    const handleFavorite = () =>{
        setToggle(!toggle);
    }

    return (
        <div className="containerItem">
            <div className="headeritem">
                <img src={image} alt={name} />
                <button onClick={handleFavorite} className={`btn favoriteIcon ${toggle && 'favoriteActive'}`}><BsFillStarFill /></button>
            </div>
            <div className="bodyItem">
                <h2 className='nameItem'>{name}</h2>
                <Link to="/detalle">
                    <div className="btnItem">
                        <BsChevronRight />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ItemCarrusel;