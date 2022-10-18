import React from "react";
import Link from "next/link";

export default function Cadastro() {
  return (
    <div className=" min-w-[600px] grid grid-cols-2 bg-[#121113] w-full h-screen justify-items-center place-items-center">
      <div className="flex flex-col gap-[25px]">
        <div className="bg-white h-screen w-[500px] border rounded-[20px] flex flex-col p-6 gap-[20px] font-bold">
          <div className="absolute top-[10px] left-[150px] font-bold text-[20px] ">
            Criar Cadastro
          </div>
          <div className=" mt-[50px] ">
            <h1>Nome</h1>
            <input className="btn_class " placeholder="Digite seu Nome"></input>
          </div>
          <div>
            <h1>Sobrenome</h1>
            <input
              className="btn_class "
              placeholder="Digite seu Sobrenome"
            ></input>
          </div>
          <div>
            <h1>Telefone</h1>
            <input
              className="btn_class "
              placeholder="Digite seu Telefone"
            ></input>
          </div>
          <div>
            <h1>Email</h1>
            <input
              className="btn_class "
              placeholder="Digite seu Email"
            ></input>
          </div>
          <div>
            <h1>Senha</h1>
            <input
              className="btn_class "
              placeholder="Digite sua Senha"
            ></input>
          </div>

          <div className="mt-[30px]">
            <button className="w-full rounded-[30px] h-[45px] border-[1px] px-3 py-1 bg-black text-white font-bold ">
              Cadastrar
            </button>
            <p className="text-center">
              Já tem uma conta? Faça seu {""}
              <Link href="/">
                <a className=" cursor-pointer text-green-800 hover:underline">
                  {" "}
                  Login
                </a>
              </Link>
              {""} agora
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img src="/Logo_inicial.svg" />
        <div className="flex justify-center items-center">
          <h1 className="text-white w-[40ch] text-center text-center">
            Na Barbearia Sullivan você encontra Profissionais qualificados, e
            com apenas alguns cliques seu horário já está agendado!
          </h1>
        </div>
      </div>
    </div>
  );
}
