import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Image from "next/image";

function Agendamento() {
  return (
    <div>
      <div className="background-home font-poppins">
        <Navbar />
        <div className="flex flex-col justify-center items-center gap-10 mt-[110px]">
          <Image
            width={350}
            height={285}
            src="/Logo_agendamento.svg"
            className=""
            alt=""
          />
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
