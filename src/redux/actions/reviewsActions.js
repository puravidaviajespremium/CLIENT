import axios from 'axios';
import { getReviews } from '../slices/reviewsSlice';
const apiUrl = import.meta.env.VITE_BASE_URL;

export const getAllReviews = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${apiUrl}/review`);
        dispatch(getReviews(data));
    } catch (error) {
        console.log(error);
    }
}
