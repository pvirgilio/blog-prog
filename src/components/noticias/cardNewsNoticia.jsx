"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { NoticiasContext } from "../context/noticias";
import BarraLateral from "../barraLateral/barraLateral";
export default function CardNewsNoticia(props) {
  const { noticias, getNoticias } = useContext(NoticiasContext);

  useEffect(() => {
    console.log("🚀 ~ getNoticias ~ noticias:", noticias);
  }, [noticias]);

  return (
    <>
      <article className="grid grid-cols-1 gap-5 ">
        {noticias.map((item, index) => {
          return (
            <article
              key={index}
              href="#"
              className=" w-full flex  gap-5  max-sm:flex-col  max-lg:max-w-full"
            >
              <article className="w-[50%] h-[254px] max-md:w-full">
                <Image
                  className="w-full h-full object-cover rounded-[20px]"
                  src="https://via.placeholder.com/780x254"
                  alt="Imagem da notícia"
                  loading="lazy"
                  width={780}
                  height={254}
                  objectFit="cover"
                />
              </article>
              <article className="w-[50%] flex flex-col justify-between max-md:w-full">
                <Link href="#">
                  <h2 className="text-2xl font-bold">
                    {item.title || "Título da notícia"}
                  </h2>
                </Link>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-medium text-gray-400 text-sm">
                    18 de março
                  </span>
                  <span className="font-medium text-gray-400 text-sm">
                    Postado há 2 horas
                  </span>
                </div>
                <p className="font-medium text-[#4F4F4F]  text-base">
                  {item.content
                    ? item.content.length > 100
                      ? item.content.substring(0, 250) + "..."
                      : item.content
                    : "Conteúdo da notícia"}
                </p>
                <Link href="#" className="text-blue-600">
                  Ler mais
                </Link>
              </article>
            </article>
          );
        })}
      </article>
      <BarraLateral />
    </>
  );
}
