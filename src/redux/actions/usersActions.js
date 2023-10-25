import axios from 'axios';
import { getUsers } from '../slices/usersSlice';


export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001/users/all');
        dispatch(getUsers(data));
    } catch (error) {
        console.log(error);
    }
}