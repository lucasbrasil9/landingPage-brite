import React from "react";
import { useNavigate } from "react-router-dom";
import Features from "./Features";
import Benefits from "./Benefits";
import { ReactTyped } from "react-typed";
import Benefits2 from "./Benefits2";
import Cta from "./Cta";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full gradient-bg pt-36">
      <div className="flex flex-col justify-center pb-36 md:pb-48 items-center px-4">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-center text-4xl lg:text-6xl leading-tight font-bold">
            <span className="text-brite">Use IA</span> na{" "}
            <span className="text-brite">Comunicação</span> <br /> com Seus
            Pacientes
            {/* <span>
              <ReactTyped
                className="text-brite"
                strings={[
                  "Inovação em IA",
                  "Automação da Agenda",
                  "Textos Customizados",
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
              />
            </span> */}
          </h1>

          <h2 className="text-center text-sm md:text-lg py-3 font-medium text-gray-500">
            Brite usa <span className="font-bold text-gray-700">IA</span> para
            <span className="font-bold text-gray-700">
              {" "}
              analisar e monitorar{" "}
            </span>
            todo o fluxo de <br /> mensagens do seu Whatsapp otimizando e
            facilitando <br /> o atendimento ao cliente
          </h2>

          <div className="flex justify-center pb-20 md:pb-6 pt-3 items-center">
            <button
              onClick={() =>
                window.open("https://calendly.com/paivabrasill/brite")
              }
              className="bg-gradient-to-tr from-indigo-300 to-indigo-500 text-nowrap transition ease-out duration-300 hover:scale-105 hover:animated-background hover:bg-gradient-to-r hover:from-[#6363EF] hover:via-indigo-400 hover:to-indigo-600 focus:outline-none
                            text-slate-200 shadow-2xl rounded-3xl px-8 py-6 text-xl md:text-3xl hover:border-transparent font-semibold"
            >
              Comece Agora
            </button>

          </div>
        </div>

        {/* <video
            src={videoBrite}
            autoPlay
            muted
            loop
            className="flex rounded-xl overflow-hidden aspect-w-3 aspect-h-10"
          >
            Your browser does not support the video tag.
          </video> */}
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-full transition ease-in-out delay-200 hover:-translate-y-3 hover:scale-[0.80] duration-500 md:scale-75 overflow-hidden rounded-3xl aspect-w-16 aspect-h-9 shadow-2xl">
          <video
            src="https://brite.b-cdn.net/briteVideo2(3).mp4"
            muted
            loop
            autoPlay
            className="absolute object-cover w-full h-full rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <Features />

      <div id="benefits">
        <Benefits2 />
      </div>

      {/* <div id="benefits">
        <Benefits />
      </div> */}

      {/* <div id="cta">
        <Cta />
      </div> */}
    </div>
  );
};

export default Hero;
