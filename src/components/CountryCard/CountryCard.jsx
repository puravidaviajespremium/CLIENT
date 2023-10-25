import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CountryCard.module.css';
import { BsArrowRightCircleFill } from "react-icons/bs";

const CountryCard = ({ name, image, id }) => {

    return (
        <div className={styles.card}>

            <div className={styles.cardHeader}>
                <img src={image} alt={name} />
            </div>

            <div className={styles.cardBody}>
                <h3>{name}</h3>
                <Link to={`/detalle/${id}`}>
                    <div className={styles.btn}>
                        <BsArrowRightCircleFill />
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default CountryCard;