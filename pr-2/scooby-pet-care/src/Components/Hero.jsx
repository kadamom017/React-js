import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import catImage from "../assets/hero2-img-cat.png";
import dogImage from "../assets/hero2-img-dog.png";
import textVector from "../assets/hero2-text-vect.svg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        
        {}
        <div className="hero-content">
          <div className="hero-tag">
            Your Pet, Our Family
          </div>

          <h1>
            Your <span>Cat</span> Is Part Of
            <br />
            Our Family.
          </h1>

          <div className="hero-buttons">
            <button className="primary-btn">
              Make a Reservation
            </button>

            <button className="secondary-btn">
              About More
            </button>
          </div>

          <img
            src={textVector}
            alt=""
            className="hero-text-vector"
          />
        </div>

        {}
        <div className="hero-image-area">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="hero-swiper"
          >
            <SwiperSlide>
              <div className="hero-slide">
                <img
                  src={dogImage}
                  alt="Pet care"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="hero-slide">
                <img
                  src={catImage}
                  alt="Veterinary care"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;