import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <div className="background-home">
        <Navbar />

        <div className="flex justify-center items-center mt-[110px]">
          <img src="/Logo_inicial.svg" className="w-[400px]" />
        </div>

        <div className="bg-black h-[500px] flex items-center justify-center">
          <div className="organizar_fotos container-fotos">
            <div>
              <img className="w-[150px]" src="/img1.jpg" />
            </div>
            <div>
              <img className="w-[150px]" src="/img2.jpg" />
            </div>
            <div>
              <img className="w-[150px]" src="/img3.jpg" />
            </div>
            <div>
              <img className="w-[150px]" src="/img4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
