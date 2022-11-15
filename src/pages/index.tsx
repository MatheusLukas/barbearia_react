import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import { Footer } from "../components/Footer";
import Image from "next/future/image";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default function Home() {
  return (
    <div className="font-poppins">
      <div className="background-home">
        <Navbar />

        <div className="flex justify-center items-center mt-[110px]">
          <Image src="/Logo_inicial.svg" alt="Logo" width={450} height={310} />
        </div>
      </div>
      <div className="bg-black w-full h-[500px] flex justify-center items-center" id="secao">
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
