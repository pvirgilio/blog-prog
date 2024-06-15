"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { NoticiasContext } from "../context/noticias";
import { useParams } from "next/navigation";
export default function NoticiaSingle(props) {
  const { getNoticiasId, setNoticiasId } = useContext(NoticiasContext);
  const { id } = useParams();
  const [newsId, setNewsId] = useState([]);
  useEffect(() => {
    async function fetchNewsId() {
      const data = await getNoticiasId(id);
      console.log("🚀 ~ fetchNewsId ~ data:", data);
      setNewsId(data.news);
    }
    fetchNewsId();
  }, []);
  // const { title, date, posted, content, imageSrc } = props;
  return newsId.map((item, index) => (
    <section key={index} className="w-full  mt-20 flex flex-col gap-5 ">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold ">{item.title}</h1>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium text-gray-400 text-sm">
            Data de postagem:{" "}
            {new Date(item.created_at).toLocaleDateString("pt-BR")}
          </span>
          <span className="text-gray-200 text-sm">
            Postado por: {item.author || "Autor da postagem"}
          </span>
        </div>
      </div>
      <article className="w-full max-h-[550px] max-md:w-full">
        <img
          className="w-full h-full object-cover rounded-md"
          src={
            item.image
              ? `http://localhost:3333/uploads/${item.image}`
              : "https://via.placeholder.com/780x254"
          }
          alt="Imagem da notícia"
        />
      </article>

      <div className=" text-justify leading-8">
        <p className="text-black font-medium text-[22px] leading-8">
          {item.content}
        </p>
      </div>
    </section>
  ));
}
