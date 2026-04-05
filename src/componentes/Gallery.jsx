import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './Gallery.css'


import pj1 from '../assets/pj1.jpg'
import pj2 from '../assets/pj2.jpg'
import pj3 from '../assets/pj3.jpg'
import pj4 from '../assets/pj4.jpg'
import pj5 from '../assets/pj5.jpg'
import pj6 from '../assets/pj6.jpg'
import pj7 from '../assets/pj7.jpg'
import pj8 from '../assets/pj8.jpg'
import pj9 from '../assets/pj9.jpg'

function Gallery() {
  const images = [pj1,pj2,pj3,pj4,pj5,pj6,pj7,pj8,pj9]

  return (
    <section className="gallery-section">
      <h2>Momentos do Projeto</h2>

      
     <Swiper
  modules={[EffectCoverflow, Autoplay]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={3}

  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1,
    rotate: 20,
    slideShadows: false,
  }}

  autoplay={{
    delay: 3000,
    disableOnInteraction: false
  }}

  className="mySwiper"
>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="projeto" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="card" key={index}>
            <img src={img} alt="projeto" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery