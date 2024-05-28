import BarraLateral from "../barraLateral/barraLateral";
import CardNewsHome from "./cardNewsHome";

export default function NewsHome() {
  return (
    <section className="  flex w-full gap-10 mt-[60px] max-lg:block">
      <article className="w-full flex gap-5">
        <article className="flex flex-col gap-[60px] w-full max-lg:w-full">
          <h1 className="text-3xl font-bold">Últimas notícias</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[40px]">
              <h2 className="font-semibold bg-gray-200 rounded-md px-4 py-2 cursor-pointer">
                All
              </h2>
              <h2 className="font-semibold cursor-pointer">Tech</h2>
              <h2 className="font-semibold cursor-pointer">Games</h2>
            </div>
            <div className="border border-gray-200 p-2 rounded-md font-semibold cursor-pointer">
              <h2 className=" ">Ver todos</h2>
            </div>
          </div>
          <article className="flex flex-col gap-10  ">
            <CardNewsHome />
          </article>
        </article>
        <BarraLateral />
      </article>
    </section>
  );
}
