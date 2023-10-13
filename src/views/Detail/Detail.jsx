import React from 'react';
import styles from "./Detail.module.css"
import {BsFillGeoAltFill } from "react-icons/bs";
import Footer from '../../components/Footer/Footer.jsx'
import Encabezado from '../../components/Encabezado/Encabezado';

const Detail = () => {

    const paisDetail = {
        name: 'Costa Rica',
        description: 'Es un país de América Central con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico. Aunque su capital, San José, es hogar de instituciones culturales, como el Museo del Oro Precolombino, Costa Rica es conocida por sus playas, sus volcanes y su biodiversidad',
        imagenPais: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920',
        experience: [
            { name: 'Parque Nacional Tortuguero', description:'Es uno de los principales iconos turísticos de Costa Rica debido a que se reconoce internacionalmente por proteger la playa de anidación de tortugas verdes más importante del hemisferio occidental.', image: 'https://images.pexels.com/photos/3661926/pexels-photo-3661926.jpeg?auto=compress&cs=tinysrgb&w=600'},
            { name: 'Playa Manuel Antonio', description:'Esta playa de arena blanca forma parte del Parque Nacional Manuel Antonio. Podrá disfrutar de un hermoso sitio de arena blanca, agua cristalina y árboles que dan sombra en la orilla.', image: 'https://images.pexels.com/photos/13501101/pexels-photo-13501101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
            { name: 'Cataratas de la Fortuna', description:'Se esconde un pedacito de naturaleza, de oro verde, la que le da el sustento a nuestra comunidad y nos hace sentir orgullosos por su belleza, la Catarata Río Fortuna', image: 'https://images.pexels.com/photos/14580735/pexels-photo-14580735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},        
            { name: 'Cahuita National Park', description:'Ideal para actividades acuáticas, como el esnórquel, alberga uno de los mayores arrecifes coralinos de la costa caribeña y el más importante de Costa Rica.', image: 'https://images.pexels.com/photos/3324590/pexels-photo-3324590.jpeg?auto=compress&cs=tinysrgb&w=600'},
        ]
    }

    return (
        <>
            <div className={styles.divDetail}>
                <div className={styles.divInicio}>
                    <img className={styles.imagenPais} src={paisDetail.imagenPais} alt="" />
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
                <Encabezado title="Destinos más populares" subtitle="Explora una forma diferente de viajar" />

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

