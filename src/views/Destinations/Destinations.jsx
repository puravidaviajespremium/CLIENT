import React, { useEffect } from 'react';

import SliderDestinations from '../../components/SliderDestinations/SliderDestinations';
import Encabezado from '../../components/Encabezado/Encabezado';
import CountryCard from '../../components/CountryCard/CountryCard';
import styles from './Destinations.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/countriesActions';


const Destinations = () => {
  const dispatch = useDispatch();

  const { countries } = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <>
      <SliderDestinations />

      <div className={`${styles.container} container`}>
        <Encabezado title="Destinos" subtitle="Explore todos nuestros destinos o contacte a un experto por más lugares" />
        <div className={`${styles.containerCard}`}>
          {countries?.map((country) => {
            return <CountryCard id={country.id} key={country.id} name={country.name} image={country.image} />
          })}
        </div>
      </div>

    </>
  );
};

export default Destinations;