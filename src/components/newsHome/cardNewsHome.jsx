import Link from "next/link";

export default function CardNewsHome() {
  return (
    <article
      href="#"
      className="max-w-[780px] w-full flex  gap-5  max-sm:flex-col  max-lg:max-w-full"
    >
      <article className="w-[50%] h-[254px] max-md:w-full">
        <img
          className="w-full h-full object-cover rounded-[20px]"
          src="https://source.unsplash.com/random/1"
          alt="Imagem da notícia"
        />
      </article>
      <article className="w-[50%] flex flex-col justify-between max-md:w-full">
        <Link href="#">
          <h2 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
        </Link>
        <div className="flex items-center justify-between mt-1">
          <span className="font-medium text-gray-400 text-sm">18 de março</span>
          <span className="font-medium text-gray-400 text-sm">
            Postado há 2 horas
          </span>
        </div>
        <p className="font-medium text-[#4F4F4F] text-base">
          Repellendus, deleniti? Itaque commodi quis earum, modi perferendis,
          fugit a et sint voluptas odio enim doloribus ducimus maxime velit
          laborum officiis dignissimos!
        </p>
        <Link href="#" className="text-blue-600">
          Ler mais
        </Link>
      </article>
    </article>
  );
}
