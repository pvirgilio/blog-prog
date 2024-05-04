import BannerHome from "@/components/bannerHome/bannerHome";
import Categorias from "@/components/barraLateral/tags";
import CarrosselBanner from "@/components/carrosselPrincipal/carrosselBanner";
import NewsHome from "@/components/newsHome/newsHome";
import Newsletter from "@/components/newsletter/newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CarrosselBanner />

      <BannerHome />
      <Newsletter />
    </main>
  );
}
