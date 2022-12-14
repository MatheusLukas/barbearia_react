import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ShowData } from "../components/ShowData";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Hours from "./Hours";
import Checkbox from "./Checkbox";
import { supabase } from "../utils/supabase";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

export default function MyModal() {
  const [value, onChange] = useState(new Date());
  const services: string[] = [];
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    localStorage.removeItem("currentHour");
  }, []);

  function closeModal() {
    setIsOpen(false);
    services.splice(0, services.length);
    localStorage.removeItem("currentHour");
  }

  function openModal() {
    setIsOpen(true);
  }
  function verifyUser() {
    if (user) {
      openModal();
      return;
    }
    toast.error("Por favor, Acesse uma conta antes de agendar!");
  }

  function checkService(service: string, isChecked: boolean) {
    if (isChecked == true) {
      if (services.length == 0) {
        services.push(service);
      } else {
        if (services.includes(service)) return;
        else services.push(service);
      }
    }
    if (isChecked == false) {
      const index = services.indexOf(service);
      if (index > -1) {
        services.splice(index, 1);
      }
    }
  }

  async function insert() {
    const currentDate = new Date(Date.now());
    const hours = localStorage.getItem("currentHour");
    if (value < currentDate) {
      toast.error("Insira uma data válida");
      return;
    }
    if (services.length == 0) {
      toast.error("Insira um serviço");
      return;
    }
    if (!hours) {
      toast.error("Insira um horário");
      return;
    }
    const getServices = await services.sort().toString();
    const agendaData = {
      agenda_day: value,
      agenda_time: hours,
      agenda_service: getServices,
      agenda_user_id: user?.id,
      agenda_user_name: user?.user_metadata.name,
      agenda_user_phone: user?.user_metadata.phone,
    };
    verifyAvailability(value, hours, agendaData)
  }
  async function upsert(agendaData:object) {
    const { data, error } = await supabase.from("agenda").insert([agendaData]);
    console.log(error);
    
  }
  async function verifyAvailability(date:Date, hours:string, agendaData:object) {
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    const formattedDate = year + "-" + month + "-" + day;
    const { data, error } = await supabase
    .from('agenda')
    .select('*')
    .eq('agenda_day', formattedDate)
    .eq('agenda_time', hours)
    if (data?.length == 0){
      toast.success("Agendado com Sucesso!");
      setTimeout(() => {
      }, 2000);
      upsert(agendaData)
      closeModal();
      return
    }
    toast.error("Horário indisponível")
  }
  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}
  

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          onClick={verifyUser}
          className="border rounded-full p-2 w-[150px] hover:bg-white hover:scale-110 font-bold"
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
                      <Calendar className="" onChange={onChange} value={value} />
                    </div>
                    <div className="flex justify-center items-center">
                      <form>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="cabelo"
                            onCheckedChange={(checked) => {
                              const isChecked = Boolean(checked);
                              checkService("cabelo", isChecked);
                            }}
                          />
                          <label htmlFor="cabelo">Cabelo</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="sobrancelha"
                            onCheckedChange={(checked) => {
                              const isChecked = Boolean(checked);
                              checkService("sobrancelha", isChecked);
                            }}
                          />
                          <label htmlFor="sobrancelha">Sobrancelha</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="barba"
                            onCheckedChange={(checked) => {
                              const isChecked = Boolean(checked);
                              checkService("barba", isChecked);
                            }}
                          />
                          <label htmlFor="barba">Barba</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="quimico"
                            onCheckedChange={(checked) => {
                              const isChecked = Boolean(checked);
                              checkService("quimico", isChecked);
                            }}
                          />
                          <label htmlFor="quimico">Produtos Químicos</label>
                        </div>
                      </form>
                    </div>
                    <div>
                      <Hours />
                    </div>

                    <div className="flex justify-center">
                      <button
                        className="md:px-40 px-24 rounded-[30px] h-[45px] border-[1px] py-1 bg-black text-white font-bold"
                        onClick={insert}
                      >
                        Agendar
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={closeModal}
                    className="absolute top-1 right-1 hover:bg-red-400 rounded-xl flex items-center"
                  >
                    <Image width={24} height={24} src="/Close.svg" alt="Close modal" />
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
