import Link from "next/link";
import CardBarraLateral from "./cardBarraLateral";
import Tags from "./tags";
import Categorias from "./categorias";

export default function BarraLateral() {
  return (
    <div className="relative min-h-screen max-w-[300px] w-full max-xl:hidden mx-10">
      <aside className="sticky top-20 right-0  flex flex-col gap-10 mt-[100px] border-l border-r px-4">
        <article className="flex flex-col gap-5 ">
          <h3 className="text-xl font-bold uppercase">mais vistos</h3>
          <article className="flex flex-col gap-2">
            <CardBarraLateral />
            <CardBarraLateral />
            <CardBarraLateral />
          </article>
        </article>
        <Tags />

        <Categorias />
      </aside>
    </div>
  );
}
