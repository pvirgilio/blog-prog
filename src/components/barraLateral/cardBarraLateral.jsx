import Link from "next/link";

export default function CardBarraLateral() {
  return (
    <Link href="#" className="flex gap-2">
      <article className="w-[50%] max-h-[94px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://source.unsplash.com/random/6"
          alt=""
        />
      </article>
      <article className=" w-[50%] flex flex-col gap-1">
        <h3 className="text-sm font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <span className="text-blue-500 text-sm">Ler mais</span>
      </article>
    </Link>
  );
}
