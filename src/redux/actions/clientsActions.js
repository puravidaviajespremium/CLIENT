import axios from 'axios';
import { postClient } from '../slices/clientsSlices';
import { sendEmail } from '../../utils/sendEmail';
import { modalSuccess, modalError } from '../../utils/modalResults';

const URL_BASE = 'http://localhost:3001/clients';

export const addClient = (client) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${URL_BASE}/create`, client);
        dispatch(postClient(data));
        modalSuccess();
        sendEmail(client);
    } catch (error) {
        modalError();
    }
}