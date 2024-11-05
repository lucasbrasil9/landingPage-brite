import React from "react";
import { BsCalendarCheck } from "react-icons/bs";
import { BsDatabaseUp } from "react-icons/bs";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { IoFlash, IoFlashOutline  } from "react-icons/io5";
import { FaTemperatureHalf } from "react-icons/fa6";
import { LuBarChartHorizontalBig } from "react-icons/lu";
import { AiOutlineFileSearch } from "react-icons/ai";

const Features = () => {
  return (
    <section class="flex w-full pb-48 pt-48 justify-center">
      <div class="max-w-7xl px-8 lg:px-0">
        <div className="w-full flex flex-col pb-10 md:pb-20 justify-center">
          <h1 className="font-bold pb-4 text-2xl md:text-5xl text-center"><span className="text-brite">Otimize e Simplifique</span>  <br /> cada <span className="text-brite">Interação</span>  com seus pacientes</h1>
          <p className="text-center font-semibold text-sm md:text-base text-gray-500">A brite por meio de IA aprimora a comunicação no seu Whatsapp  a partir de features <br /> que permitem que o foco passe a ser no paciente</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 text-center md:pl-20 md:text-left gap-y-8 md:divide-x-2 lg:grid-cols-4">
          <div className="px-10">
            <div class="flex items-center justify-center mx-auto md:mx-0 md:justify-start w-20 h-20">
              <IoFlashOutline  size={40} style={{color: "#00425C"}} className=""/>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-black">
              Centralização
            </h3>
            <p class="mt-4 text-gray-600">
              As mensagens, os números e os contatos que enviaram mensagem no Whatsapp ficam disponíveis e centralizados na plataforma
            </p>
          </div>

          <div className="px-10">
            <div class="flex items-center justify-center mx-auto md:mx-0 md:justify-start w-20 h-20">
              <AiOutlineFileSearch size={40} style={{color: "#6A42D8"}} className=""/>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-black">
              Resumos
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Geramos resumos das conversas com cada contato que enviou mensagem, destacando os interesses e pontos importantes nas mensagens
            </p>
          </div>

          <div className="px-10">
            <div class="flex items-center justify-center mx-auto md:mx-0 md:justify-start w-20 h-20">
              <LuBarChartHorizontalBig size={40} style={{color: "#5C4AAE"}} className=""/>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-black">
              Classificação
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Classificamos as mensagens de cada contato em categorias definidas pelo cliente, gerando a porcentagem presente em cada conversa
            </p>
          </div>

          <div className="px-10">
            <div class="flex items-center justify-center mx-auto md:mx-0 md:justify-start w-20 h-20">
              <FaTemperatureHalf size={40} style={{color: "#AD2717"}}/>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-black">Temperatura</h3>
            <p class="mt-4 text-base text-gray-600">
              Quantificamos o interesse de cada cliente, que enviou mensagem, em agendar uma consulta, fazer orçamento, etc.
            </p>
          </div>
        </div>
      </div>
    </section>

    // <div className="w-full px-10 pb-52">
    //   <div className="md:max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10">

    //     <div className="py-5 flex flex-col items-center justify-center rounded-xl transition ease-in-out delay-200 duration-1000 hover:-translate-y-1 hover:scale-110 bg-gradient-to-bl from-violet-200/45 to-violet-200/85 shadow-xl p-4">
    //       <div className="flex flex-col text-center md:text-left items-center justify-center md:flex-row gap-4">
    //         <button>
    //           <BsCalendarCheck
    //             size={30}
    //             className="iconFeature1 text-brite "
    //           />
    //         </button>
    //         <p className="text-[20px] lg:text-[24px] font-bold">
    //           Agendamentos Rápidos
    //         </p>
    //       </div>
    //       <p className="text-center text-base text-gray-500 lg:text-[18px] font-medium py-3 max-w-[300px]">
    //         Automatização completa da agenda do dentista
    //       </p>
    //     </div>

    //     <div className="py-5 flex flex-col items-center justify-center rounded-xl transition ease-in-out delay-200 duration-1000 hover:-translate-y-1 hover:scale-110 bg-gradient-to-bl from-sky-200/25 to-sky-200/75 shadow-xl p-4">
    //       <div className="flex flex-col text-center md:text-left items-center md:flex-row gap-4">
    //         <button>
    //           <BsDatabaseUp
    //             size={35}
    //             className="iconFeature2 text-brite"
    //           />
    //         </button>
    //         <p className="text-[20px] lg:text-[24px] font-semibold">
    //           Informação Precisa
    //         </p>
    //       </div>
    //       <p className="text-center text-base text-gray-500 lg:text-[18px] font-medium py-3 max-w-[270px]">
    //         Integração com todos os dados que a clínica nos fornece
    //       </p>
    //     </div>

    //     <div className="py-5 flex flex-col items-center justify-center rounded-xl transition ease-in-out delay-200 duration-1000 hover:-translate-y-1 hover:scale-110 bg-gradient-to-bl from-indigo-200/25 to-indigo-200/75 shadow-xl p-4">
    //       <div className="flex flex-col text-center md:text-left items-center md:flex-row gap-4">
    //         <button>
    //           <FaCircleHalfStroke
    //             size={35}
    //             className="iconFeature3 text-brite"
    //           />
    //         </button>
    //         <p className="text-[20px] lg:text-[24px] font-semibold">
    //           Total Disponibilidade
    //         </p>
    //       </div>
    //       <p className="text-center text-base text-gray-500 lg:text-[18px] font-medium py-3 max-w-[300px]">
    //         Suporte ao seu cliente de forma humanizada 24 h por dia
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Features;
