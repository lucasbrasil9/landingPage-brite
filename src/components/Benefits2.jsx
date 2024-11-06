import React from "react";
import { IoScan, IoAnalytics } from "react-icons/io5";
import { TbDeviceAnalytics } from "react-icons/tb";

const Benefits2 = () => {
  return (
    <section class="pb-32 pt-40 md:pt-56 lg:pb-44">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Como Entregamos a <span className="text-brite">Solução Brite</span>
          </h2>
          <p class="max-w-lg mx-auto mt-4 leading-relaxed text-center font-semibold text-sm md:text-base text-gray-500">
            Com a tecnologia da brite, sua comunicação com pacientes se torna
            ágil e personalizada, permitindo um atendimento melhor sem
            complicação.
          </p>
        </div>

        <ul class="max-w-md mx-auto mt-16 space-y-12">
          <li class="relative flex items-start">
            <div
              class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>

            <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <IoScan size={30} className="text-brite" />
            </div>
            <div class="ml-6">
              <h3 class="text-lg font-semibold text-black">
                Conecte o número
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Acesse a plataforma e abra o Whatsapp no seu celular e escaneie o Qr Code gerado na brite, conectando o seu número a nossa solução
              </p>
            </div>
          </li>

          <li class="relative flex items-start">
            <div
              class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>

            <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <IoAnalytics size={30} className="text-brite" />
            </div>
            <div class="ml-6">
              <h3 class="text-lg font-semibold text-black">
                Análise de mensagens
              </h3>
              <p class="mt-4 text-base text-gray-600">
                Nossa IA passa a monitorar e analisar todas as mensagens recebidas no número conectado, gerando dados e insights
              </p>
            </div>
          </li>

          <li class="relative flex items-start">
            <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <TbDeviceAnalytics size={30} className="text-brite" />
            </div>
            <div class="ml-6">
              <h3 class="text-lg font-semibold text-black">
                Insights na plataforma
            </h3>
              <p class="mt-4 text-base text-gray-600">
                A partir das análises geramos resumos e classificações das conversas com cada contato, facilmente acessíveis dentro da plataforma 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits2;
