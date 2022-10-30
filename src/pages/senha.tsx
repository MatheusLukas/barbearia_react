import React from "react";
import Link from "next/link";

export default function Senha() {
  return (
    <div className="flex flex-col min-w-[600px] md:grid md:grid-cols-2 bg-[#121113]  md:w-full md:h-screen justify-items-center place-items-center ">
      <div className="mt-[100px] md:mt-0">
        <img className="w-[556px]" src="/Logo_inicial.svg" />
        <div className="flex justify-center items-center">
          <h1 className="text-white w-[40ch] text-center">
            Na Barbearia Sullivan você encontra Profissionais qualificados, e com apenas alguns
            cliques seu horário já está agendado!
          </h1>
        </div>
      </div>
      <div>
        <div className="bg-white h-[500px] w-[500px] border rounded-[20px] flex flex-col p-6 gap-[20px] font-bold">
          <div className="text-left font-bold text-[20px] ">Redefinir a Senha</div>
          <div className=" mt-[20px] ">
            <h1>Email</h1>
            <input className="btn_class " placeholder="Digite seu Email"></input>
          </div>
          <div>
            <h1>Senha</h1>
            <input className="btn_class" placeholder="Digite sua Senha"></input>
          </div>
          <div>
            <h1>Confirmar Senha</h1>
            <input className="btn_class" placeholder="Confirme a sua Senha"></input>
          </div>

          <div className="mt-[30px]">
            <button className="w-full rounded-[30px] border-[1px] h-[45px] px-3 py-1 bg-black text-white font-bold ">
              Redefinir Senha
            </button>
            <p className="text-center">
              Retornar a área de {""}
              <Link href="/">
                <a className=" cursor-pointer text-green-800 hover:underline"> Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
