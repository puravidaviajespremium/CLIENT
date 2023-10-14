import axios from 'axios';
import { getCountries } from '../slices/countriesSlice';

export const getAllCountries = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        dispatch(getCountries(data));
    } catch (error) {
        console.log(error);
    }
}


