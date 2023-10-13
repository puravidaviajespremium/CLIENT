import React from 'react';
import styles from "./Detail.module.css"
import {BsFillGeoAltFill } from "react-icons/bs";
import Footer from '../../components/Footer/Footer.jsx'

const Detail = () => {

    const paisDetail = {
        name: 'Costa Rica',
        description: 'Es un país de América Central con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico. Aunque su capital, San José, es hogar de instituciones culturales, como el Museo del Oro Precolombino, Costa Rica es conocida por sus playas, sus volcanes y su biodiversidad',
        imageInicio: '/images/image_Detail.jpg',
        experience: [
            { name: 'Surf', description:'Embárcate en una aventura extrema surcando las olas más desafiantes y emocionantes de toda América Latina', image: '/images/surf.jpg'},
            { name: 'Trekking', description:'Sumérgete en la experiencia del trekking como nunca antes, conectando con la belleza salvaje de la región', image: '/images/trekking.jpg'},
            { name: 'Canotaje', description:'Vive tu experiencia extrema, descendiendo por los ríos  más salvajes de toda latinoamérica', image: '/images/canotaje.jpg'},        
            { name: 'Buceo', description:'Descubre la vida marina en su estado más puro y vive una experiencia emocionante', image: '/images/buceo.jpg'},
        ]
    
    
    }

    return (
        <>
            <div className={styles.divDetail}>
                <div className={styles.divInicio}>
                    <img className={styles.imageInicio} src={paisDetail.imageInicio} alt="" />
                    <div className={styles.divDescription}>
                        <div className={styles.divText}>
                            <h2> <BsFillGeoAltFill/> {paisDetail.name.toUpperCase()}</h2>
                            <p>{paisDetail.description}</p>
                        </div>

                        <div className={styles.divButton}>
                            <button className={`${styles.buttonDetail} btnPrimary btn`}> CONTACTO </button>
                            <button className={`${styles.buttonDetail} btnPrimary btn`}> EXPERTO </button>
                        </div>
                    </div>
                </div>

                <div className={`${styles.Experiencies} container`}>
                    <h2>Experiencias más populares</h2>
                    <hr />
                    <p>Explora una forma diferente de viajar</p>

                    <div className={styles.divExperiencies}>

                        {paisDetail.experience.map((experiencia, index) => (
                            <div key={index} className={styles.divImageDescription} >
                                <img className={styles.imageExperiencia} src={experiencia.image} alt={experiencia.name} />
                                <div className={styles.textDescription}>
                                    <h4>{experiencia.name.toUpperCase()}</h4>
                                    <p>{experiencia.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

            <Footer/>
        </>
    )

}

export default Detail;

