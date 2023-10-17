import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './CountryCard.module.css';
import { BsStarFill, BsFillPatchPlusFill } from "react-icons/bs";

const CountryCard = ({ name, image, id }) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>

            <div className={styles.cardHeader}>
                <img src={image} alt={name} />
                <button onClick={toggleFavorite} className={`btn favoriteIcon ${isFavorite && 'favoriteActive'}`} >
                    <BsStarFill style={{ fontSize: "20px" }} />
                </button>
            </div>

            <div className={styles.cardBody}>
                <h3>{name}</h3>
                <Link to={`/detalle/${id}`}>
                    <BsFillPatchPlusFill />
                </Link>
            </div>
            
        </div>
    )
}

export default CountryCard;