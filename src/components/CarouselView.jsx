import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function CarouselView({ items }) {
  return (
    <section className="relative mx-auto px-6 max-w-[1342px] mb-16">
      <h2
        className="text-[#887C68] mb-6 text-center"
        style={{
          fontFamily: "'Martel Sans', sans-serif",
          fontWeight: 600,
          fontSize: "28px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textTransform: "uppercase",
        }}
      >
        OUR SERVICES
      </h2>

      <div className="relative">
        
        <button
          className="custom-prev absolute z-10 left-[-24px] top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center shadow-md"
          style={{ borderRadius: 0, backgroundColor: "#F6F6F6" }}
        >
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2L2 10L10 18"
              stroke="#64615B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="custom-next absolute z-10 right-[-24px] top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center shadow-md"
          style={{ borderRadius: 0, backgroundColor: "#F6F6F6" }}
        >
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L10 10L2 18"
              stroke="#64615B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={1}
          spaceBetween={32}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          style={{ height: "480px" }}
        >
          {items.slice(0, 6).map((item) => (
            <SwiperSlide key={item.ID}>
              <div className="relative overflow-hidden shadow-md w-full h-full rounded-none">
                <img
                  src={item.image_url}
                  alt={item.post_title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180.16deg, rgba(255, 255, 255, 0) 50.13%, rgba(0, 0, 0, 0.6) 99.86%)",
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 w-full text-white text-center py-2 font-semibold text-lg bg-transparent z-10">
                  {item.post_title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
