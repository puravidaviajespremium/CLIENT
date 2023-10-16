import axios from 'axios';
import { postClient } from '../slices/clientsSlices';

const URL_BASE = 'http://localhost:3001/clients';

export const addClient = (client) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${URL_BASE}/create`, client);
        dispatch(postClient(data));
        alert('Nos pondremos en contacto pronto');
    } catch (error) {
        alert(error.message);
    }
}