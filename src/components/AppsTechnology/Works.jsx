"use client";
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Components
import StatementSplitter from '@/components/Common/StatementSplitter';
//= Static Data
import data from '@/data/AppsTechnology/works.json';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 15,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 15000,
  navigation: false,
  autoplay: {
    delay: 1,
  },
  loop: true
}

function Works() {
  return (
    <section className="tc-works-style4">
      <div className="about-marquee-style4">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <a href="#"> Inclusive Financial Access <span className="icon-35 mx-5"> <img src="/home_4/assets/img/icons/star2.png" alt="Icon" /> </span> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Tokenization of Rural Assets <span className="icon-35 mx-5"> <img src="/home_4/assets/img/icons/star2.png" alt="Icon" /> </span> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Dialect Voice Navigation <span className="icon-35 mx-5"> <img src="/home_4/assets/img/icons/star2.png" alt="Icon" /> </span> </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#"> Economic Empowerment<span className="icon-35 mx-5"> <img src="/home_4/assets/img/icons/star2.png" alt="Icon" /> </span> </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="works wow fadeInUp slow">
          <div className="row gx-0">
            {data.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="work-card">
                  <a href="#" className="tag"> <span className="icon-6 bg-000 rounded-circle me-2"></span> {item.subTitle} </a>
                  <a href="#0" className="img img-cover">
                    <img src={item.image} alt={item.subTitle} />
                  </a>
                  <h4 className="fsz-30 mt-30"> <StatementSplitter statement={item.title} /> </h4>
                  <a href="#" className="mt-30 fsz-18 icon-30 bg-white rounded-circle text-center lh-5"> <i className="fal fa-long-arrow-right"></i> </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works;
