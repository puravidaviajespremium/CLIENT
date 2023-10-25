import axios from 'axios';
import { getCountries, getCountryId, searchCountries, cleanDetail } from '../slices/countriesSlice';


export const getAllCountries = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001/countries/all');
        dispatch(getCountries(data));
    } catch (error) {
        console.log(error);
    }
}

export const getCountryById = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:3001/countries/country/${id}`);
        dispatch(getCountryId(data)); 
    } catch (error) {
        console.log(error);
    }
}

export const cleanCountryDetail = () => (dispatch) => {
    dispatch(cleanDetail({}));
}

export const countriesFilter = (nameValue) => async (dispatch, getState) => {
    try {
        const { countries } = getState();
        const filteredResults = countries.countries.filter((country) => {
            return country.name?.toLowerCase().includes(nameValue?.toLowerCase())
        });
        dispatch(searchCountries(filteredResults))
    } catch (error) {
        console.log(error);
    }
}




