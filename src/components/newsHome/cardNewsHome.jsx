"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { NoticiasContext } from "../context/noticias";
import { useParams } from "next/navigation";
export default function CardNewsHome(props) {
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

  const PostTime = ({ created_at }) => {
    const [timeMessage, setTimeMessage] = useState("");

    useEffect(() => {
      const now = new Date();
      const postDate = new Date(created_at);

      console.log("Data/hora atual:", now);
      console.log("Data/hora da postagem:", postDate);

      const diffInMilliseconds = now - postDate;
      const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
      const diffInHours = Math.floor(diffInMinutes / 60);

      console.log("Diferença em milissegundos:", diffInMilliseconds);
      console.log("Diferença em minutos:", diffInMinutes);
      console.log("Diferença em horas:", diffInHours);

      if (diffInMinutes < 1) {
        setTimeMessage("Postado agora mesmo");
      } else if (diffInMinutes < 60) {
        setTimeMessage(`Postado há ${diffInMinutes} minutos`);
      } else if (diffInHours < 24) {
        setTimeMessage(`Postado há ${diffInHours} horas`);
      } else {
        setTimeMessage(`Postado há ${Math.floor(diffInHours / 24)} dias`);
      }
    }, [created_at]);

    return (
      <span className="font-medium text-gray-400 text-sm">{timeMessage}</span>
    );
  };
  return (
    <article className="grid grid-cols-2 gap-10 max-lg:grid-cols-1  text-black ">
      {news.map((item, index) => {
        console.log("🚀 ~ item:", item.image);
        return loading ? (
          <article className="max-w-[750px] w-full flex flex-col  gap-5  max-lg:max-w-full">
            <article className="w-full h-[254px] max-md:w-full">
              <div className="w-full h-full object-cover rounded-[5px] bg-gray-300 animate-pulse" />
            </article>

            <article className="w-full flex flex-col gap-3 justify-between max-md:w-full ">
              <div className="bg-gray-300 w-40 h-6 animate-pulse rounded-xl" />

              <div className="text-2xl font-bold bg-gray-300 w-3/4 h-6 animate-pulse rounded-xl" />
            </article>
          </article>
        ) : (
          <article
            key={index}
            href={`/noticia/${item.id}`}
            className="max-w-[750px] w-full flex flex-col  gap-5  max-lg:max-w-full"
          >
            <article className="w-full h-[254px] max-md:w-full">
              <img
                className="w-full h-full object-cover rounded-[5px]"
                src={
                  item.image
                    ? `http://localhost:3333/uploads/${item.image}`
                    : "https://via.placeholder.com/780x254"
                }
                alt="Imagem da notícia"
              />
            </article>

            <article className="w-full flex flex-col gap-2 justify-between max-md:w-ful">
              <div className="flex items-center justify-between mt-1">
                <span className="font-medium text-gray-400 text-sm">
                  {new Date(item.created_at).toLocaleDateString("pt-BR")}
                </span>
                <PostTime created_at={item.created_at} key={index} />
              </div>
              <Link
                className="text-2xl font-bold"
                href={`http://localhost:3000/noticia/${item.id}`}
              >
                {item.title || "Título da notícia"}
              </Link>
            </article>
          </article>
        );
      })}
    </article>
  );
}
