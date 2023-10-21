import axios from 'axios';
import { getReviews } from '../slices/reviewsSlice';

export const getAllReviews = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3001/review');
        dispatch(getReviews(data));
    } catch (error) {
        console.log(error);
    }
}
