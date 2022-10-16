import Link from "next/link";
import React from "react";
import Sandwich from "./Sandwich";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2x1 cursor-pointer">
            <img
              className="h-10 inline ml-[30px] decoration-black "
              src="/logo.svg"
            />
            Sullivan
          </span>
          <Sandwich />
        </div>
        <ul className="md:flex md:items-center z-[1] md:z-auto md:static bg-white absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-4 my-6 md:my-0">
            <Link href="/" className="text-x1 hover:opacity-60 duration-500">
              <a>Início</a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="#" className="text-x1 hover:opacity-60 duration-500">
              <a>Portifólio</a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              href="/agendamento"
              className="text-x1 hover:opacity-60 duration-500"
            >
              <a>Agendar</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
