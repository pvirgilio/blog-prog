import CardNewsHome from "@/components/newsHome/cardNewsHome";
import NoticiasGeral from "@/components/noticias/noticiasGeral";
import { Pagination } from "@/components/ui/pagination";

export default function Noticias() {
  return (
    <main className="container min-h-screen flex flex-col gap-5 my-10">
      <h1 className="text-3xl font-semibold">Noticias</h1>
      <NoticiasGeral />
    </main>
  );
}
