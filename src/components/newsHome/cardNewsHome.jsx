import Link from "next/link";

export default function CardNewsHome() {
  return (
    <Link href="#" className="max-w-[780px] w-full flex gap-5">
      <article className="w-[50%] max-h-[254px]">
        <img
          className="w-full h-full object-cover rounded-[20px]"
          src="https://source.unsplash.com/random/1"
          alt="Imagem da notícia"
        />
      </article>
      <article className="w-[50%]">
        <h2 className="text-2xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
        <div className="flex items-center justify-between mt-1">
          <span className="font-medium text-gray-400 text-sm">18 de março</span>
          <span className="font-medium text-gray-400 text-sm">
            Postado há 2 horas
          </span>
        </div>
        <p className="font-medium text-[#4F4F4F] text-base mt-4">
          Repellendus, deleniti? Itaque commodi quis earum, modi perferendis,
          fugit a et sint voluptas odio enim doloribus ducimus maxime velit
          laborum officiis dignissimos!
        </p>
      </article>
    </Link>
  );
}
