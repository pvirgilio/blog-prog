import BarraLateral from "@/components/barraLateral/barraLateral";
import Categorias from "@/components/barraLateral/tags";
import CarrosselBanner from "@/components/carrosselPrincipal/carrosselBanner";
import NewsHome from "@/components/newsHome/newsHome";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CarrosselBanner />

      <NewsHome />
    </main>
  );
}
