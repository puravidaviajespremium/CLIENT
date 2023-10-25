import React from 'react';
import styles from './SliderDestinations.module.css';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';


const SliderDestinations = () => {
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
                    modules={[Keyboard, Navigation, Pagination]}
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
                                <source src="/videos/video1Compress.mp4" type="video/mp4" />
                                Tu navegador no admite la reproducción de videos.
                            </video>
                            <div className={styles.content}>
                                <h3>Experiencias inolvidables en <br />cada rincón del mundo.</h3>
                                <span>Elegir Pura Vida Viajes significa abrazar una experiencia de viaje única, enriquecedora y personalizada.</span>
                                <Link to={'/contacto'}><button className={`${styles.btnPrimary} btn btnPrimary`}>QUIERO VIVIR UN VIAJE DIFERENTE</button></Link>
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
                                <source src="/videos/video4Compress.mp4" type="video/mp4" />
                                Tu navegador no admite la reproducción de videos.
                            </video>
                            <div className={styles.content}>
                                <h3>recuerdos que durarán toda la vida</h3>
                                <span>Nuestro equipo cuenta con expertos nativos de todo el mundo que le garantizarán una experiencia increible. </span>
                                <Link to={'/contacto'}><button className={`${styles.btnPrimary} btn btnPrimary`}>QUIERO DESCANSAR Y DESCONECTARME</button></Link>
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
                                <source src="/videos/video2Compress.mp4" type="video/mp4" />
                                Tu navegador no admite la reproducción de videos.
                            </video>
                            <div className={styles.content}>
                                <h3>aventuras sin límites</h3>
                                <span>Estamos comprometidos en ayudarlo a alcanzar el viaje de sus sueños, sin importar el destino que elija.</span>
                                <Link to={'/contacto'}><button className={`${styles.btnPrimary} btn btnPrimary`}>QUIERO EXPLORAR AVENTURAS</button></Link>
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
                                <source src="/videos/video3Compress.mp4" type="video/mp4" />
                                Tu navegador no admite la reproducción de videos.
                            </video>
                            <div className={styles.content}>
                                <h3>destinos para vivir al máximo</h3>
                                <span>¿Estás listo para conocer Pura Vida Viajes y vivir aventuras únicas y emocionantes? </span>
                                <Link to={'/contacto'}><button className={`${styles.btnPrimary} btn btnPrimary`}>ME ATREVO A CONQUISTAR EL MUNDO</button></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default SliderDestinations;