import type { NextPage } from "next";
import Link from "next/link";

import Image from "next/future/image";

const senha: NextPage = () => {
  return (
    <div className="bg-black flex items-center justify-center p-5 min-h-screen">
      <div className="flex-col md:flex-row flex items-center justify-around gap-5">
        <div className="flex flex-col items-center justify-center md:w-[40%]">
          <img className="" src="/Logo_inicial.svg" />
          <h1 className="text-white text-center">
            Na Barbearia Sullivan você encontra Profissionais qualificados, e com apenas alguns
            cliques seu horário já está agendado!
          </h1>
        </div>
        <div className=" mt-[50px] ">
          <h1>Nome</h1>
          <input className="btn_class " placeholder="Digite seu Nome"></input>
        </div>
        <div>
          <h1>Sobrenome</h1>
          <input className="btn_class " placeholder="Digite seu Sobrenome"></input>
        </div>
        <div>
          <h1>Telefone</h1>
          <input className="btn_class " placeholder="Digite seu Telefone"></input>
        </div>
        <div>
          <h1>Email</h1>
          <input className="btn_class " placeholder="Digite seu Email"></input>
        </div>
        <div>
          <h1>Senha</h1>
          <input className="btn_class " placeholder="Digite sua Senha"></input>
        </div>

        <div className="mt-[30px]">
          <button className="w-full rounded-[30px] h-[45px] border-[1px] px-3 py-1 bg-black text-white font-bold ">
            Cadastrar
          </button>
          <p className="text-center">
            Já tem uma conta? Faça seu {""}
            <Link href="/">
              <a className=" cursor-pointer text-green-800 hover:underline"> Login</a>
            </Link>
            {""} agora
          </p>
        </div>
      </div>
    </div>
  );
};

export default senha;
