import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Reviews.module.css';
import Encabezado from '../Encabezado/Encabezado';
import { getAllReviews } from '../../redux/actions/reviewsActions';



const Reviews = () => {
const dispatch = useDispatch();

const { reviews } = useSelector(state => state.reviews);

useEffect(() => {
    dispatch(getAllReviews())
}, []);

    // const [reviews, setReviews] = useState([]);
    // const [error, setError] = useState(null);

    // const getReviews = async () => {
    //     const apiKey = "AIzaSyDT40Y1F9ECWc1H4Ur0QBKWWFipXbpCdRQ"
    //     const placeId = "ChIJufOZ5uuZMpQRtlMfUenHfz8";                                                                   
    //     try {
    //         const { data } = await axios.get(`/api/maps/api/place/details/json?place_id=${placeId}&fields=reviews&rating,profile_photo_url&key=${apiKey}`);
    //         setReviews(data.result.reviews);
    //     } catch (error) {
    //         console.error("Error getting reviews:", error);
    //         setError("No se pudieron cargar las reseñas.");
    //     }
    // };

    // useEffect(() => {
    //     getReviews();
    // }, []);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className={`${styles.star} ${styles.rated}`}>★</span>);
            } else {
                stars.push(<span key={i} className={styles.star}>☆</span>);
            }
        }
        return stars;
    };

    return (
        <>
            <Encabezado title="Experiencias de nuestros viajeros" subtitle="Algunos comentarios increibles de nuestros viajeros." className={styles.encabezado} />
            <div className={styles.container}>
                {reviews?.map((review, index) => (
                    <div key={index} className={styles.review}>
                        <img src={review.profile_photo_url} alt={`${review.author_name}'s profile`} className={styles.profilePhoto} />
                        <h3 className={styles.author}>{review.author_name}</h3>
                        <div>{renderStars(review.rating)}</div>
                        <p className={styles.reviewText}>{review.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Reviews;

