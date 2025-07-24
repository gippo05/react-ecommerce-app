// components/ImageSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from '../assets/banner/banner1.png'
import banner2 from '../assets/banner/banner2.png'
import banner3 from '../assets/banner/banner3.png'

const slides = [
  banner1,
  banner2,
  banner3,
];

const ImageSlider = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mt-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;