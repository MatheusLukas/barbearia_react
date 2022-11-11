import Link from "next/link";
import React from "react";
import Sandwich from "./Sandwich";
import Image from "next/image";
import Login from "./ModalLogin";

const Navbar = () => {
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
            <Link href="/" className="text-x1">
              <a className="mx-3 text-x1 hover:opacity-60 duration-500">Sullivan</a>
            </Link>
          </div>
          <Sandwich />
        </div>
        <ul className="md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 text-white">
          <li className="mx-4 my-6 md:my-0">
            <Link href="/" className="text-x1">
              <a className="text-x1 hover:opacity-60 duration-500">Início</a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:opacity-60 duration-500">
            <a href="#secao">Portfólio</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/agendamento" className="text-x1 ">
              <a className="hover:opacity-60 duration-500">Agendar</a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Login />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
