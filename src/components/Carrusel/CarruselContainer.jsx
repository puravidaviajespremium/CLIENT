import './carruselContainer.css';
import ItemCarrusel from './ItemCarrusel/ItemCarrusel';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';


const CarruselContainer = ({title, subtitle, data}) => {
    return (
        <section className="container">
            <div className="containerTitle">
                <h1 className="title">{title}</h1>
                <span className='line'></span>
                <p className="subtitle">{subtitle}</p>
            </div>
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
                          spaceBetween: 30,
                        },
                      }}
                    modules={[Pagination]}
                    className="containerSlider"
                >
                  {data.map((element, index) => (
                    <SwiperSlide key={index} className="slider">
                      <ItemCarrusel 
                        name={element.name} 
                        image ={element.image}
                        />
                    </SwiperSlide>
                  ))}
            </Swiper>
        </section>
    )
}

export default CarruselContainer;