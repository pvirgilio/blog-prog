import BannerHome from "@/components/bannerHome/bannerHome";
import BarraLateral from "@/components/barraLateral/barraLateral";
import Categorias from "@/components/barraLateral/tags";
import CarrosselBanner from "@/components/carrosselPrincipal/carrosselBanner";
import Footer from "@/components/footer/footer";
import NewsHome from "@/components/newsHome/newsHome";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CarrosselBanner />

      <NewsHome />
      <BannerHome />
      <Footer />
    </main>
  );
}
