import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
const grotesk = Familjen_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={grotesk.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
