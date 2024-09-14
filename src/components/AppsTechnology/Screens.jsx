"use client"; 
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 150,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 15000,
  navigation: false,
  autoplay: true,
  loop: true
}

function Screens() {
  return (
    <section className="tc-screens-style4">
      <div className="container">
        <div className="title text-center" data-speed="0.5" data-lag="0.5">
          <h2 className="fsz-60">
            Explore <span className="color-blue1"> Gubbi's Features </span> that <br /> empower rural communities with <br /> financial access and security
          </h2>
        </div>
        <div className="screens-content">
          <div className="sliders">
            <div className="row">
              <div className="col-lg-4 d-none d-lg-block">
                <div className="slider-colmn">
                  <Swiper {...swiperOptions} style={{ overflow: 'visible' }}>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/UI_voice_navigation.jpg" alt="Voice Navigation" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/4.jpg" alt="Asset Tokenization" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/5.jpg" alt="Remittance Capture" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="slider-colmn" dir="rtl">
                  <Swiper {...swiperOptions} style={{ overflow: 'visible' }}>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/5.jpg" alt="Staking" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/UI_multichain_payments.jpg" alt="Multichain Payments" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/UI_wallet.jpg" alt="Wallet Interface" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="slider-colmn">
                  <Swiper {...swiperOptions} style={{ overflow: 'visible' }}>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/4.jpg" alt="Remittance Capture" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/6.jpg" alt="Asset Tokenization" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/home_4/assets/img/screens/UI_voice_navigation.jpg" alt="Voice Navigation" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Screens;
