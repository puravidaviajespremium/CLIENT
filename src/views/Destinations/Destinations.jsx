import React, { useEffect } from 'react';

import Encabezado from '../../components/Encabezado/Encabezado';
import CountryCard from '../../components/CountryCard/CountryCard';
import styles from './Destinations.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/countriesActions';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';



const Destinations = () => {
  const dispatch = useDispatch();

  const { countries } = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <section className={styles.destinations}>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide >
            <div className={styles.slide}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
              </video>
              <div className={styles.content}>
                <span>Explora...</span>
                <h3>Experiencias inolvidables en cada rincón del mundo.</h3>
                <button className={`${styles.btnPrimary} btn btnPrimary`}>EXPERTO</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className={styles.slide}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
              </video>
              <div className={styles.content}>
                <span>Explora...</span>
                <h3>recuerdos que durarán toda la vida</h3>
                <button className={`${styles.btnPrimary} btn btnPrimary`}>EXPERTO</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className={styles.slide}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              >
                <source src="/videos/video3.mp4" type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
              </video>
              <div className={styles.content}>
                <span>Explora...</span>
                <h3>aventuras sin límites</h3>
                <button className={`${styles.btnPrimary} btn btnPrimary`}>EXPERTO</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className={styles.slide}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              >
                <source src="/videos/video4.mp4" type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
              </video>
              <div className={styles.content}>
                <span>Explora...</span>
                <h3>destinos para vivir al máximo</h3>
                <button className={`${styles.btnPrimary} btn btnPrimary`}>EXPERTO</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={`${styles.container} container`}>
        <Encabezado title="Destinos" subtitle="Explore todos nuestros destinos o contacte a un experto por más lugares" />
        <div className={`${styles.containerCard}`}>
          {countries?.map((country) => {
            return <CountryCard key={country.id} name={country.name} image={country.image} />
          })}


        </div>
      </div>
    </section>
  );
};

export default Destinations;