import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-gray-200 bg-opacity-80 backdrop-blur-sm ">
      <nav className="container flex items-center justify-between py-5">
        <div className="">
          <h1 className="font-bold text-2xl">LeigoCode</h1>
        </div>
        <ul className="flex items-center gap-12 max-lg:hidden">
          <li>
            <Link className="font-medium text-gray-500" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-medium text-gray-500" href="/noticia">
              Notícias
            </Link>
          </li>
          <li>
            <Link className="font-medium text-gray-500" href="#">
              Contato
            </Link>
          </li>
          <li>
            <Link className="font-medium text-gray-500" href="#">
              Sobre
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <IoSearch size={27} />
        </div>
      </nav>
    </header>
  );
}
