import './Slider.css'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import {Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Slider = () =>{
    return (
        <Swiper
        direction={'vertical'}
        effect={'fade'}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination,Autoplay]}
        className="mySlider"
      >
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
            </SwiperSlide>
            <section className='titleSlider'>
                <h1> Amas viajar y quieres<br/>  vivir una aventura diferente.</h1>
                <p>Personalizamos cada experiencia para que se ajuste a tus deseos y necesidades.</p>
                <Link to="/contacto" className='btn btnPrimary btnDestinations'>COMENCEMOS </Link>
            </section>
      </Swiper>
    )
}

export default Slider;