import React from "react";
import { mobileImg } from "../assets";
import { BsCheckAll } from "react-icons/bs";
import { heroImg } from "../assets";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Benefits = () => {
  return (
    <div className="w-full pt-6">
      <div className="md:max-w-[1400px] mx-auto grid md:grid-cols-2 max-w-[520px] items-center px-4">
        <div className="flex flex-col justify-start gap-2">
          <h2 className="flex-wrap md:leading-[54px] text-center md:text-left font-bold text-2xl pb-10 md:text-5xl">
            Aproveite a <span className="text-brite">tecnologia de IA</span>{" "}
            para manter seu consultório{" "}
            <span className="text-brite">sempre disponível</span> para os
            pacientes
          </h2>
          {/* <p className="py-5 text-base md:text-xl text-center md:text-left text-gray-500">
                        Garantimos atendimento e agendamento 24/7 com respostas rápidas e precisas que melhoram a 
                        experiência do paciente, tornando o atendimento mais eficiente
                    </p> */}
          <ul className="flex flex-col gap-2 mx-auto md:m-0 md:gap-4 md:justify-start md:items-start">
            <li className="flex items-center gap-2">
              <BsCheckAll size={30} style={{ color: "#6363EF" }} />
              <span className="text-brite text-base md:text-xl">
                Atendimento contínuo 24 horas
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BsCheckAll size={30} style={{ color: "#6363EF" }} />
              <span className="text-brite text-base md:text-xl">
                Melhoria na experiência do paciente
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BsCheckAll size={30} style={{ color: "#6363EF" }} />
              <span className="text-brite text-base md:text-xl">
                Redução da carga administrativa
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BsCheckAll size={30} style={{ color: "#6363EF" }} />
              <span className="text-brite text-base md:text-xl">
                Integração com dados da clínica
              </span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center md:justify-end pt-4 md:pt-0">
          <img className="pl-12 md:pl-0 w-80 md:w-96" src={mobileImg} />
        </div>
      </div>

      <div className="md:max-w-[1400px] mx-auto grid md:grid-cols-2 max-w-[520px] px-4 pt-5 md:pt-16 gap-8 md:gap-32">
        <div className="flex flex-col">
          <h2 className="flex-wrap md:leading-[54px] text-center md:text-left font-bold pb-10 text-2xl md:text-5xl">
            Garanta{" "}
            <span className="text-brite">agendamentos instantâneos</span> com{" "}
            <span className="text-brite">links</span> automáticos diretamento
            pelo WhatsApp
          </h2>
          {/* <p className="py-5 text-base md:text-xl text-center md:text-left text-gray-500">
                        Transforme a experiência do paciente com agendamentos simples e automáticos, dando autonomia e eficiência através 
                        do principal canal de comunicação da sua clínica
                    </p> */}
          <ul className="flex flex-col gap-2 md:gap-4 mx-auto md:m-0 md:justify-start md:items-start">
            <li className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline
                size={30}
                style={{ color: "#6363EF" }}
              />
              <span className="text-brite text-base md:text-xl">
                Redução do tempo para agendar consultas
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline
                size={30}
                style={{ color: "#6363EF" }}
              />
              <span className="text-brite text-base md:text-xl">
                Agendamentos onde os pacientes já estão
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline
                size={30}
                style={{ color: "#6363EF" }}
              />
              <span className="text-brite text-base md:text-xl">
                Disponibilidade a qualquer hora
              </span>
            </li>
          </ul>
        </div>
        <img className="md:order-first pt-6" src={heroImg} />
      </div>
    </div>
  );
};

export default Benefits;
