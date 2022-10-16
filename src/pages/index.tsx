import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { Footer } from "../components/Footer";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="font-poppins">
      <div className="background-home">
        <Navbar />

        <div className="flex justify-center items-center mt-[110px]">
          <Image src="/Logo_inicial.svg" width={450} height={310} />
        </div>
      </div>

      <div
        className="bg-black h-[500px] flex justify-center items-center "
        id="secao"
      >
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
