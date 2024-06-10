"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { NoticiasContext } from "../context/noticias";
import { useParams } from "next/navigation";
export default function CardNewsHome(props) {
  const { noticias, getNoticias } = useContext(NoticiasContext);
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      const data = await getNoticias();
      console.log("🚀 ~ fetchNews ~ data:", data);
      setNews(data.news);
    }
    fetchNews();
  }, []);
  const id = useParams();

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
    <article className="flex gap-10 flex-wrap  ">
      {news.map((item, index) => {
        console.log("🚀 ~ item:", item.image);
        return (
          <Link
            key={index}
            href={`/noticia/${item.id}`}
            className="max-w-[780px] w-full flex  gap-5  max-sm:flex-col  max-lg:max-w-full"
          >
            <article className="w-[50%] h-[254px] max-md:w-full">
              <img
                className="w-full h-full object-cover rounded-[20px]"
                src={
                  item.image
                    ? `http://localhost:3333/uploads/${item.image}`
                    : "https://via.placeholder.com/780x254"
                }
                alt="Imagem da notícia"
              />
            </article>

            <article className="w-[50%] flex flex-col justify-between max-md:w-full">
              <Link className="text-2xl font-bold" href="#">
                {item.title || "Título da notícia"}
              </Link>
              <div className="flex items-center justify-between mt-1">
                <span className="font-medium text-gray-400 text-sm">
                  {new Date(item.created_at).toLocaleDateString("pt-BR")}
                </span>
                <PostTime created_at={item.created_at} key={index} />
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
          </Link>
        );
      })}
    </article>
  );
}
