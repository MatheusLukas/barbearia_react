import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Home: NextPage = () => {
  return (
    <div>
      <div className="background-home">
        <Navbar />

        <div className="flex justify-center items-center mt-[110px]">
          <img src="/Logo_inicial.svg" className="w-[400px]" />
        </div>
      </div>

      <div className="bg-black h-[500px] flex justify-center items-center ">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
