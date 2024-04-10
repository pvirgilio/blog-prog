import CardNewsHome from "@/components/newsHome/cardNewsHome";
import { Pagination } from "@/components/ui/pagination";

export default function Noticias() {
  return (
    <main className="container flex flex-col gap-5 my-10">
      <h1 className="text-3xl font-semibold">Noticias</h1>
      <section className=" grid grid-cols-2 gap-10">
        <CardNewsHome />
        <CardNewsHome />
        <CardNewsHome />
        <CardNewsHome />
        <CardNewsHome />
        <CardNewsHome />
        <CardNewsHome />
        <CardNewsHome />
        <CardNewsHome />
      </section>
      <Pagination />
    </main>
  );
}
