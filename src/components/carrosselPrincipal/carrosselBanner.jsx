"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CarrosselBanner() {
  useEffect(() => {
    const swiperEl = document.querySelector(".swiper-container");
    const buttonElNext = document.querySelector(".nextButton");
    const buttonElPrev = document.querySelector(".prevButton");

    buttonElNext.addEventListener("click", () => {
      swiperEl.swiper.slideNext();
    });

    buttonElPrev.addEventListener("click", () => {
      swiperEl.swiper.slidePrev();
    });
  });
  return (
    <section className=" w-full ">
      <Swiper
        className="swiper-container  relative flex justify-center h-[750px] "
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide
          style={{
            backgroundImage: "url('https://source.unsplash.com/random')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex flex-col items-center"
        >
          <div className=" absolute z-40 w-full h-[250px] bottom-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-md text-left text-white pt-5 px-10">
            <div className="w-full container flex flex-col gap-5  ">
              <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget nunc nec purus ultricies aliquet.
              </p>
              <div className="flex items-center justify-between gap-3 bg-white text-black p-3 rounded-md max-w-[150px]">
                <button className=" font-semibold ">Saiba mais</button>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: "url('https://source.unsplash.com/random')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex flex-col items-center"
        >
          <div className=" absolute z-40 w-full h-[250px] bottom-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-md text-left text-white pt-5 px-10">
            <div className="w-full container flex flex-col gap-5  ">
              <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget nunc nec purus ultricies aliquet.
              </p>
              <div className="flex items-center justify-between gap-3 bg-white text-black p-3 rounded-md max-w-[150px]">
                <button className=" font-semibold ">Saiba mais</button>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="absolute z-50 bottom-[80px] right-4 flex flex-col gap-2">
          <div className="nextButton bg-black bg-opacity-30 rounded-md p-2">
            <GrNext color="white" className="" size={25} />
          </div>
          <div className="prevButton bg-black bg-opacity-30 rounded-md p-2">
            <GrPrevious color="white" className="" size={25} />
          </div>
        </div>
      </Swiper>
    </section>
  );
}
