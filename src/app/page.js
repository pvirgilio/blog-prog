import BannerHome from "@/components/bannerHome/bannerHome";
import BarraLateral from "@/components/barraLateral/barraLateral";
import Categorias from "@/components/barraLateral/tags";
import CarrosselBanner from "@/components/carrosselPrincipal/carrosselBanner";
import Footer from "@/components/footer/footer";
import NewsHome from "@/components/newsHome/newsHome";
import Newsletter from "@/components/newsletter/newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CarrosselBanner />
      <iframe
        width="903"
        height="742"
        src="https://www.youtube.com/embed/nDdOivSBMY4"
        title="Máquina de Gerar Empregos   Aula 01"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <NewsHome />
      <BannerHome />
      <Newsletter />
      <Footer />
    </main>
  );
}
