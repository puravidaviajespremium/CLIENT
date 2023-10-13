import styles from "./Home.module.css"

import Encabezado from "../../components/Encabezado/Encabezado";
import Carrusel from '../../components/Carrusel/CarruselContainer';

const countries = [
    {
        id: 1,
        name: 'Costa Rica',
        image: "https://images.pexels.com/photos/9482124/pexels-photo-9482124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        name: 'Argentina',
        image: "https://images.pexels.com/photos/8242964/pexels-photo-8242964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        name: 'Perú',
        image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        name: 'Colombia',
        image: "https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        name: 'Brasil',
        image: "https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        name: 'Francia',
        image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 7,
        name: 'Republica Dominicana',
        image: "https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 8,
        name: 'México',
        image: "https://images.pexels.com/photos/16134906/pexels-photo-16134906/free-photo-of-san-jose-iturbide.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

function Home() {
    return (
        <section className={`${styles.sectionCarrusel} container`}>
            <Encabezado
                title ='Destinos destacados'
                subtitle = 'Los destinos más populares de todo el mundo, desde lugares históricos hasta maravillas naturales.'/>
            <Carrusel data = {countries} />
        </section>
    )
}

export default Home;