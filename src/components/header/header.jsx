import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-gray-200 bg-opacity-80 backdrop-blur-sm ">
      <nav className="container flex items-center justify-between py-5">
        <div className="">
          <h1 className="font-bold text-2xl">Logo</h1>
        </div>
        <ul className="flex items-center gap-12">
          <li>
            <Link className="font-medium" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-medium" href="#">
              Notícias
            </Link>
          </li>
          <li>
            <Link className="font-medium" href="#">
              Contato
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <IoSearch size={27} />
          <FaUserAlt size={27} />
        </div>
      </nav>
    </header>
  );
}
