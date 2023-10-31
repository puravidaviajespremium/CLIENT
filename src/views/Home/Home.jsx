import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import Encabezado from "../../components/Encabezado/Encabezado";
import Carrusel from "../../components/Carrusel/CarruselContainer";
import Information from "../../components/Information/Information";
import React, { useEffect } from "react";
import { getAllCountries } from "../../redux/actions/countriesActions";
import SliderDestinations from "../../components/SliderDestinations/SliderDestinations";
import StepsBanner from "../../components/StepsBanner/StepsBanner";
import Reviews from "../../components/Reviews/Reviews";
import FormContact from "../../components/FormContact/FormContact";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import { animateScroll as scroll } from "react-scroll";

function Home() {
  const countries = useSelector((state) => state.countries.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
    scroll.scrollToTop();
  }, []);
  

  return (
    <>
      <SliderDestinations />
      <FeaturedSection />
      <section className={`${styles.sectionCarrusel} container`}>
        <Encabezado
          title="Destinos destacados"
          subtitle="Los destinos más populares de todo el mundo, desde lugares históricos hasta maravillas naturales."
        />
        <Carrusel data={countries} />
      </section>
      <StepsBanner />
      <Information />
      <FormContact />
      <Reviews />
    </>
  );
}

export default Home;
