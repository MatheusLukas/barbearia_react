import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect } from "react";
import { supabase } from "../utils/supabase";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  async function signIn() {
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    if (!email) {
      emailInputRef.current?.focus();
      return;
    }
    if (!password) {
      passwordInputRef.current?.focus();
      return;
    }

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    if (error) {
      return toast.error("Login Incorreto!");
    }
    toast.success("Logado com Sucesso!");
    closeModal();
  }
  return (
    <>
      <div className="">
        <button
          onClick={openModal}
          className="rounded-[30px] border-[1px] px-3 py-1 bg-white text-black font-bold"
        >
          Login
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="absolute top-[10px] left-[15px] font-bold text-[20px]"
                  >
                    Login
                  </Dialog.Title>
                  <div className=" flex justify-center  flex-col font-bold gap-[20px] mt-[30px]">
                    <div>
                      <h1 className="text-left">Email</h1>
                      <input
                        className="btn_class"
                        placeholder="Digite seu Email"
                        ref={emailInputRef}
                      ></input>
                    </div>
                    <div>
                      <h1>Senha</h1>
                      <input
                        type="password"
                        className="btn_class"
                        placeholder="Digite a sua Senha"
                        ref={passwordInputRef}
                      ></input>
                      <Link href="/senha">
                        <a className="hover:underline text-red-800 cursor-pointer">
                          Esqueceu a senha?
                        </a>
                      </Link>
                    </div>
                    <div>
                      <button
                        className="w-full h-[45px] rounded-[30px] border-[1px] px-3 py-1 bg-black text-white font-bold"
                        onClick={signIn}
                      >
                        Entrar
                      </button>
                      <Link href="/cadastro">
                        <p className="text-center">
                          Ainda não possui Cadastro?{" "}
                          <a className=" cursor-pointer text-green-800 hover:underline">
                            Cadastre-se
                          </a>{" "}
                          agora
                        </p>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center"></div>
                  <button
                    onClick={closeModal}
                    className="absolute top-1 right-1 hover:bg-red-400 rounded-xl flex items-center"
                  >
                    <Image width={24} height={24} src="/Close.svg" alt="" />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
