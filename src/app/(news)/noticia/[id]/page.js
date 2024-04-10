import BarraLateral from "@/components/barraLateral/barraLateral";
import ComentSingle from "@/components/noticias/comentSingle";
import NoticiaSingle from "@/components/noticias/noticiaSingle";

export default function NewsSingle() {
  return (
    <main className="w-full container flex justify-between ">
      <section className="w-[70%] flex flex-col gap-20">
        <NoticiaSingle />
        <ComentSingle />
      </section>

      <BarraLateral />
    </main>
  );
}
