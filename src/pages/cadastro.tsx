import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/future/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../utils/supabase";
import { FormEvent, useRef } from "react";

const senha: NextPage = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  async function signIn(e: FormEvent) {
    e.preventDefault();
    const userData = {
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value,
      confirmPassword: confirmPasswordInputRef.current?.value,
      name: nameInputRef.current?.value,
      phone: phoneInputRef.current?.value,
    };
    console.log("user", userData);
    if (!userData.name) {
      nameInputRef.current?.focus();
      return;
    }
    if (!userData.phone) {
      phoneInputRef.current?.focus();
      return;
    }
    if (!userData.email) {
      emailInputRef.current?.focus();
      return;
    }
    if (!userData.password) {
      passwordInputRef.current?.focus();
      return;
    }
    if (confirmPasswordInputRef.current?.value !== passwordInputRef.current?.value) {
      confirmPasswordInputRef.current?.focus();
      return;
    }

    if (emailInputRef.current?.value != undefined) {
      emailInputRef.current.value = "";
    }
    if (nameInputRef.current?.value != undefined) {
      nameInputRef.current.value = "";
    }
    if (phoneInputRef.current?.value != undefined) {
      phoneInputRef.current.value = "";
    }
    if (passwordInputRef.current?.value != undefined) {
      passwordInputRef.current.value = "";
    }
    if (confirmPasswordInputRef.current?.value != undefined) {
      confirmPasswordInputRef.current.value = "";
    }

    const { error } = await supabase.auth.signUp(
      {
        email: userData.email,
        password: userData.password,
      },
      {
        data: {
          name: userData.name,
          phone: userData.phone,
        },
      }
    );
    console.log(error);
    toast.success("Verifique Seu Email Para Confirmar Sua Conta");
  }
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
        <div className="bg-white p-6 rounded-xl w-full md:w-[40%] flex flex-col gap-5">
          <h1 className="font-bold text-2xl md:text-left text-center ">Cadastrar</h1>
          <div>
            <h1>Nome</h1>
            <input className="btn_class" placeholder="Digite seu Nome" ref={nameInputRef} />
          </div>
          <div>
            <h1>Telefone</h1>
            <input className="btn_class" placeholder="Digite seu Telefone" ref={phoneInputRef} />
          </div>
          <div>
            <h1>E-mail</h1>
            <input className="btn_class" placeholder="Digite seu Email" ref={emailInputRef} />
          </div>
          <div>
            <h1>Senha</h1>
            <input className="btn_class" placeholder="Digite sua Senha" ref={passwordInputRef} />
          </div>
          <div>
            <h1>Confirmar Senha</h1>
            <input
              className="btn_class"
              placeholder="Confirme a sua Senha"
              ref={confirmPasswordInputRef}
            />
          </div>
          <div>
            <button
              className="w-full rounded-[30px] h-[45px] border-[1px] px-3 py-1 bg-black text-white font-bold"
              onClick={signIn}
            >
              Cadastrar
            </button>
            <p className="text-center">
              Já tem uma conta? {""}
              <Link href="/">
                <a className=" cursor-pointer text-green-800 hover:underline"> Faça seu Login</a>
              </Link>
              {""} agora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default senha;
