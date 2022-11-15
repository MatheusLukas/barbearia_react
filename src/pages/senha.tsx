import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/future/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Senha: NextPage = () => {
  const senhaRedefinida = () => toast("Senha redefinida com Sucesso!"); //Toast de senha redefinida, tem que passar em um onClick
  const senhaErrada = () => toast("Algo deu Errado!"); //Toast de falha ao redefinir senha, tem que passar em um onClick

  return (
    <div className="bg-black flex items-center justify-center p-5 min-h-screen">
      <div className="flex-col md:flex-row flex items-center justify-around gap-5">
        <div className=" flex flex-col items-center justify-center md:w-[40%]">
          <img className="" src="/Logo_inicial.svg" />
          <h1 className="text-white text-center">
            Na Barbearia Sullivan você encontra Profissionais qualificados, e com apenas alguns
            cliques seu horário já está agendado!
          </h1>
        </div>
        <div className="bg-white p-6 rounded-xl w-full md:w-[40%] flex flex-col gap-5">
          <h1 className="font-bold text-2xl md:text-left text-center ">Redefinir a Senha</h1>
          <div className=" mt-[30px]">
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
              Redefinir Senha
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
    </div>
  );
};

export default Senha;
