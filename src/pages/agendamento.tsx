import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

function Agendamento() {
  return (
    <div>
      <div className="background-home">
        <Navbar />
        <div className="flex flex-col justify-center items-center gap-10">
          <img src="/Logo_agendamento.svg" className="w-[350px] mt-[110px]" />
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
