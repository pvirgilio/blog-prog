"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { NoticiasContext } from "../context/noticias";
import Image from "next/image";

export default function CarrosselBanner() {
  // useEffect(() => {
  //   const swiperEl = document.querySelector(".swiper-container");
  //   const buttonElNext = document.querySelector(".nextButton");
  //   const buttonElPrev = document.querySelector(".prevButton");

  //   buttonElNext.addEventListener("click", () => {
  //     swiperEl.swiper.slideNext();
  //   });

  //   buttonElPrev.addEventListener("click", () => {
  //     swiperEl.swiper.slidePrev();
  //   });
  // });

  const { noticias, getNoticias } = useContext(NoticiasContext);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNoticias();
        console.log("🚀 ~ fetchNews ~ data:", data);
        setNews(data.news);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNews();
  }, []);
  return (
    <section className=" w-full ">
      <Swiper
        className="swiper-container relative flex justify-center h-[500px] "
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[500px] relative">
              <Image
                src={
                  item.image
                    ? `http://localhost:3333/uploads/${item.image}`
                    : "https://via.placeholder.com/780x254"
                }
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex items-center justify-center">
                <div className="container text-white text-start">
                  <h1 className="text-4xl font-bold">
                    {item.title || "Título da notícia"}
                  </h1>
                  <p className="text-lg mt-10 text-gray-300">
                    {item.content.substring(0, 200)}...
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
