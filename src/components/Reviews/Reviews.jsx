import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Reviews.module.css';
import Encabezado from '../Encabezado/Encabezado';
import { getAllReviews } from '../../redux/actions/reviewsActions';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const Reviews = () => {
    const dispatch = useDispatch();

    const { reviews } = useSelector(state => state.reviews);

    useEffect(() => {
        dispatch(getAllReviews())
    }, []);

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
        <section className={`${styles.container} container`}>
            <Encabezado title="Experiencias de nuestros viajeros" subtitle="Algunos comentarios increibles de nuestros viajeros." />
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 35,
                    },
                }}
                modules={[Pagination]}
                className="containerCarrusel"
            >
                {reviews?.map((review, index) => (
                    <SwiperSlide key={index} className={styles.review}>
                        <img src={review.profile_photo_url} alt={`${review.author_name}'s profile`} className={styles.profilePhoto} />
                        <h3 className={styles.author}>{review.author_name}</h3>
                        <div>{renderStars(review.rating)}</div>
                        <p className={styles.reviewText}>{review.text}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
export default Reviews;

