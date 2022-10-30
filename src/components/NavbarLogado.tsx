import Link from "next/link";
import Image from "next/image";
import Sandwich from "./Sandwich";
import Account from "./Account";

export function NavbarLogado() {
  return (
    <nav className="bg-black py-3">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <div className="text-2x1 cursor-pointer flex items-center text-white mx-[30px]">
            <Image
              width={20}
              height={40}
              className="inline decoration-black "
              src="/logo.svg"
              alt=""
            />
            <p className="mx-3">Sullivan</p>
          </div>
          <Sandwich />
        </div>
        <ul className="md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 text-white">
          <li className="mx-4 my-6 md:my-0">
            <Link href="/" className="text-x1">
              <a className="text-x1 hover:opacity-60 duration-500">Inicio</a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:opacity-60 duration-500">
            <a href="#secao">Portifólio</a>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:opacity-60 duration-500">
            <a href="agendamento">Agendar</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Account />
          </li>
        </ul>
      </div>
    </nav>
  );
}