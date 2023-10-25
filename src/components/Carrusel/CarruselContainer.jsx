import "./carruselContainer.css";
import ItemCarrusel from "./ItemCarrusel/ItemCarrusel";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper/modules";

const CarruselContainer = ({ data }) => {

  return (
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
      {data.map((element, index) => (
        <SwiperSlide key={index} className="carrusel">
          <ItemCarrusel id={element.id} name={element.name} image={element.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarruselContainer;
