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
      setNewsId(data);
      console.log("🚀 ~ fetchNewsId ~ data:", data);
    }
    fetchNewsId();
  }, []);
  // const { title, date, posted, content, imageSrc } = props;
  return newsId.map((item, index) => (
    <section key={index} className="w-full  mt-10 flex flex-col gap-5 ">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold ">{item.title}</h1>
        <div className="w-full flex items-center justify-between">
          <span className="text-gray-400 text-sm">
            {item.created_at || "Data de postagem"}
          </span>
          {/* <span className="text-gray-400 text-sm">{posted}</span> */}
        </div>
      </div>
      <article className="w-full max-h-[550px] max-md:w-full">
        <Image
          className="w-full h-full object-cover rounded-md"
          src={item.imageSrc || "https://via.placeholder.com/780x550"}
          alt="Imagem da notícia"
          width={780}
          height={550}
        />
      </article>
      <div className="text-xl text-justify leading-8">
        <p>{item.content}</p>
      </div>
    </section>
  ));
}
