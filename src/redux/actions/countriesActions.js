import axios from 'axios';
import { getCountries } from '../slices/countriesSlice';

export const getAllCountries = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001/countries/all');
        dispatch(getCountries(data));
    } catch (error) {
        console.log(error);
    }
}


