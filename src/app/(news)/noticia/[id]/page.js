import BarraLateral from "@/components/barraLateral/barraLateral";
import ComentSingle from "@/components/noticias/comentSingle";
import NoticiaSingle from "@/components/noticias/noticiaSingle";

export default function NewsSingle() {
  return (
    <main className="w-full  container flex justify-between max-lg:flex-col ">
      <section className="w-full flex flex-col gap-20">
        <NoticiaSingle />
        <ComentSingle />
      </section>

      <BarraLateral />
    </main>
  );
}
