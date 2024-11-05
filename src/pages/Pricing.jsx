import React from "react";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";
import { PricingList } from "../components";
import { IoMdArrowRoundBack } from "react-icons/io";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    //Navbar
    <>
      {/* <div className="sticky top-0 w-full h-[80px] z-50 animated-background bg-gradient-to-r from-[#6363EF] via-[#6363EF] to-indigo-500">
        <div className="md:max-w-[1400px] max-w-[520px] m-auto w-full h-full flex justify-between items-center md:px-4 px-4">
          <button onClick={() => navigate("/")}>
            <img src={logo} className="h-[25px] cursor-pointer" />
          </button>

          <div className="flex">
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 rounded-md bg-white text-brite font-bold border border-brite-active hover:border-transparent focus:outline-none focus:ring-2 active:bg-gray-100"
            >
              Entrar
            </button>
          </div>
        </div>
      </div> */}

      <div className="bg-gray-100 w-full md:h-screen">
        <div className="md:pl-8 pl-3 pt-4  flex w-auto">
          <button 
            onClick={() => navigate("/")}
            className="border-4 border-brite transition ease-in duration-300 hover:scale-105  rounded-full"
          >
            <IoMdArrowRoundBack size={40} className="active:text-gray-400"/>
          </button>
        </div>
        <div className="md:max-w-[1400px] max-w-[520px] m-auto items-center px-8 pb-10 pt-4">
          <h1 className="md:hidden text-center items-center font-bold text-4xl pt-4 pb-12">
            {" "}
            <span className="text-brite">Invista na Eficiência</span> da Sua
            Clínica de Forma <span className="text-brite">Acessível</span>
          </h1>
          <div className="grid md:grid-cols-3 flex-col justify-center gap-12">
            <div className="hidden md:flex flex-col gap-4">
              <h1 className="font-bold text-xl md:text-5xl">
                <span className="text-brite">Invista na Eficiência</span> da Sua
                Clínica de Forma <span className="text-brite">Acessível</span>
              </h1>
              <p className="text-gray-500 font-medium text-sm md:text-base">
                Selecione o plano perfeito para otimizar o suporte ao
                paciente e os agendamentos, melhorando sua tomada de decisão a partir de dados.
              </p>
            </div>

            <div className="bg-white border-4 animated-background border-brite-hover rounded-xl w-[350px] py-12 md:ml-20 shadow-xl transform scale-105 z-10">
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-semibold text-3xl">Standard</h3>
                <p className="text-center text-lg pb-6 text-gray-500">
                  Ideal para clínicas <br /> e dentistas autônomos
                </p>
                <h4 className="py-8 text-gray-900 flex items-center justify-center border-b border-t border-gray-300 w-full">
                  <span className="text-4xl font-bold">R$199,90</span>/Mês
                </h4>

                <div className="flex items-center gap-2 pr-4 py-4">
                    <p className="text-brite font-semibold text-center">
                      -> 1 número conectado
                    </p>
                  </div>
                <div className="pl-3">
                  <PricingList list="IA no seu Whatsapp" isFirst={true} />
                  <PricingList list="Sem limite de clientes" />
                  <PricingList list="Resumos" />
                  <PricingList list="Classificação" />
                  <PricingList list="Temperatura dos Pacientes" />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    onClick={() =>
                      window.open("https://calendly.com/paivabrasill/brite")
                    }
                    className="border bg-brite animated-background hover:bg-gradient-to-r hover:from-[#6363EF] hover:via-indigo-400 hover:to-indigo-600 focus:outline-none
                  text-white shadow-2xl rounded-lg px-6 py-2 text-sm md:text-base hover:border-transparent font-semibold active:text-gray-200"
                  >
                    Entre em Contato
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl w-[350px] py-12 shadow-xl">
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-semibold text-3xl">Personalizado</h3>
                <p className="text-center text-lg pb-6 text-gray-500">
                  Ideal para grandes clínicas <br /> com mais de 1 número
                </p>
                <h4 className="py-8 text-gray-900 border-b border-t border-gray-300 w-full text-3xl text-center font-bold">
                  {" "}
                  Receba Uma <br /> Proposta
                </h4>
                <div
                  className="flex flex-col items-center justify-center py-5
                "
                >
                  <div className="flex items-center gap-2 py-1">
                    <p className="text-brite font-semibold text-center">
                      + Todos os benefícios <br />
                      do plano Standard
                    </p>
                  </div>
                  <PricingList list="Suporte personalizado" />
                  <PricingList list="Sem limite de números" />
                </div>
                <div className="">
                  <button
                    type="submit"
                    onClick={() =>
                      window.open("https://calendly.com/paivabrasill/brite")
                    }
                    className="border bg-brite animated-background hover:bg-gradient-to-r hover:from-[#6363EF] hover:via-indigo-400 hover:to-indigo-600 focus:outline-none
                  text-white shadow-2xl rounded-lg px-6 py-2 text-sm md:text-base hover:border-transparent font-semibold active:text-gray-200"
                  >
                    Contate-nos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
