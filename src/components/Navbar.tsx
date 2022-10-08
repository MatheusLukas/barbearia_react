import React from "react";
import Sandwich from "./Sandwich";

const Navbar = () => {
  return (
    <nav className="bg-gray-500">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2x1 cursor-pointer">
            <img className="h-10 inline ml-[30px]" src="/logo.svg" />
            Sullivan
          </span>
          <Sandwich />
        </div>
        <ul className="md:flex md:items-center z-[1] md:z-auto md:static bg-white absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-4 my-6 md:my-0">
            <a href="/" className="text-x1 hover:opacity-60 duration-500">
              Início
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-x1 hover:opacity-60 duration-500">
              Portifólio
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/agendamento"
              className="text-x1 hover:opacity-60 duration-500"
            >
              Agendamento
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
