import styles from "./Home.module.css"
import { useSelector, useDispatch } from "react-redux";
import Encabezado from "../../components/Encabezado/Encabezado";
import Carrusel from '../../components/Carrusel/CarruselContainer';
import Information from "../../components/Information/Information";
import Promocion from "../../components/Promocion/Promocion";
import React, { useEffect } from 'react';
import { getAllCountries } from '../../redux/actions/countriesActions';
import SliderDestinations from "../../components/SliderDestinations/SliderDestinations";
import StepsBanner from "../../components/StepsBanner/StepsBanner";
import Reviews from "../../components/Reviews/Reviews";
import FormContact from "../../components/FormContact/FormContact";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection"
import TravelFeatures from "../../components/TravelFeatures/TravelFeatures"

function Home() {

    const countries = useSelector((state) => state.countries.countries);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, []);


    return (
        <>
            <SliderDestinations />
            <FeaturedSection />
            <section className={`${styles.sectionCarrusel} container`}>
                <Encabezado
                    title='Destinos destacados'
                    subtitle='Los destinos más populares de todo el mundo, desde lugares históricos hasta maravillas naturales.' />
                {/* <Encabezado
                    title='Nuestros expertos locales te llevarán a los lugares más auténticos y te garantizarán una experiencia inolvidable'
                    subtitle='No pierdas la oportunidad de vivir un turismo que cambiariá tu perspectiva del mundo. ¡Ven y únete a nosotros para comenzar
                    tu viaje extraordinario hoy mismo!'/> */}
                
                <Carrusel data = {countries} />
            </section>
            <StepsBanner />
            <Information />
            <FormContact />
            <Reviews />
        </>
    )
}

export default Home;

// const countries = [
//     {
//         id: 1,
//         name: 'Costa Rica',
//         image: "https://images.pexels.com/photos/9482124/pexels-photo-9482124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 2,
//         name: 'Argentina',
//         image: "https://images.pexels.com/photos/8242964/pexels-photo-8242964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 3,
//         name: 'Perú',
//         image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 4,
//         name: 'Colombia',
//         image: "https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 5,
//         name: 'Brasil',
//         image: "https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 6,
//         name: 'Francia',
//         image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 7,
//         name: 'Republica Dominicana',
//         image: "https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 8,
//         name: 'México',
//         image: "https://images.pexels.com/photos/16134906/pexels-photo-16134906/free-photo-of-san-jose-iturbide.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     }
//   ]