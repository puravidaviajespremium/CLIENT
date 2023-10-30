import axios from 'axios';
import { getUsers } from '../slices/usersSlice';
const apiUrl = import.meta.env.VITE_BASE_URL;


export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${apiUrl}/users`);
        dispatch(getUsers(data));
    } catch (error) {
        console.log(error);
    }
}