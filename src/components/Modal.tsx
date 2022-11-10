import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ShowData } from "../components/ShowData";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Hours from "./Hours";
import Checkbox from "./Checkbox";

import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyModal() {
  const [value, onChange] = useState(new Date());

  const [isOpen, setIsOpen] = useState(false);

  const falhaAgendamento = () => toast("Algo deu Errado!"); //Toast de falha no agendamento, tem que passar em um onClick
  const agendamentoCorreto = () => toast("Agendado com Sucesso!"); //Toast de um agendamento com sucesso, tem que passar em um onClick

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          onClick={openModal}
          className="border rounded-full p-2 w-[150px] hover:bg-white hover:scale-110 font-bold "
        >
          Agende Aqui
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
                <Dialog.Panel className="w-[750px] transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="absolute top-[10px] left-[15px] font-bold text-[20px]"
                  >
                    Escolha a Data e Hora
                  </Dialog.Title>
                  <div className="mt-4 flex justify-center items-center font-bold">
                    <ShowData />
                  </div>

                  <div className="mt-4 flex flex-col gap-8">
                    <div className="flex justify-center">
                      <Calendar
                        className=""
                        onChange={onChange}
                        value={value}
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <form>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="cabelo"
                            onCheckedChange={(checked) => {
                              const isChecked = Boolean(checked);
                            }}
                          />
                          <label htmlFor="cabelo">Cabelo</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="bigode" />
                          <label htmlFor="bigode">Bigode</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="barba" />
                          <label htmlFor="barba">Barba</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="quimico" />
                          <label htmlFor="quimico">Produtos Quimicos</label>
                        </div>
                      </form>
                    </div>
                    <div>
                      <Hours />
                    </div>

                    <div className="flex justify-center">
                      <button className="md:px-40 px-24 rounded-[30px] h-[45px] border-[1px] px-3 py-1 bg-black text-white font-bold">
                        Agendar
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={closeModal}
                    className="absolute top-1 right-1 hover:bg-red-400 rounded-xl flex items-center"
                  >
                    <Image
                      width={24}
                      height={24}
                      src="/Close.svg"
                      alt="Close modal"
                    />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
