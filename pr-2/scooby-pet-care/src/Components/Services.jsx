import "./Services.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const services = [
  {
    icon: "♧",
    title: "Pet Boarding",
    description: "We provide safe and comfortable care for your pets.",
  },
  {
    icon: "+",
    title: "Veterinary Care",
    description: "Professional care to keep your pet healthy and happy.",
  },
  {
    icon: "✂",
    title: "Pet Grooming",
    description: "Complete grooming services for your furry friend.",
  },
  {
    icon: "♥",
    title: "Pet Training",
    description: "Helping your pet become happy, active and well trained.",
  },
  {
    icon: "✚",
    title: "Pet Health",
    description: "Complete health care and support for your beloved pet.",
  },
  {
    icon: "★",
    title: "Pet Walking",
    description: "Fun, safe and enjoyable walks for your pets every day.",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="service-item">
      <div className="service-icon">{service.icon}</div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <a href="#services">See More →</a>
    </div>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        {}
        <div className="services-slider services-slider-left">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            slidesPerGroup={2}
            spaceBetween={0}
            loop={true}
            speed={700}
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            }}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={`left-${index}`}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {}
        <div className="all-services">
          <h2>
            See Our All
            <br />
            Services.
          </h2>

          <button className="all-services-btn">
            See Our Services
          </button>
        </div>

        {}
        <div className="services-slider services-slider-right">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            slidesPerGroup={2}
            spaceBetween={0}
            loop={true}
            speed={700}
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            }}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={`right-${index}`}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default Services;