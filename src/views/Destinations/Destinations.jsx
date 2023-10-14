import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCountries } from '../../redux/actions/countriesActions';

const Destinations = () => {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getAllCountries());
}, []);

  return (
    <>
        <h1>Destinations</h1>
    </>
  );
};

export default Destinations;