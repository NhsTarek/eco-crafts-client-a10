// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide><img src={"https://i.ibb.co/cg1KtgP/pexels-filirovska-7138774.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/bF9rJPk/pexels-magdaline-nicole-2138794-3772487.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/RH9gHsQ/pexels-tomfisk-3290183.jpg"}></img></SwiperSlide>
      </Swiper>
    );
};

export default Slider;