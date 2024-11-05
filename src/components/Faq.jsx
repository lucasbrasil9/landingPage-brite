import React from "react";
import Questions from "./Questions";


const Faq = () => {
    return (
        <div className='w-full animated-background bg-gradient-to-r from-[#6363EF] via-[#6363EF] to-indigo-500 py-20'>
            <div className="flex flex-col mx-auto max-w-[270px] md:max-w-[700px] px-4 md:px-0">

                <h1 className="font-bold text-white text-5xl pb-8 md:pb-0">Dúvidas</h1>

                <h2 className="hidden md:flex text-white text-xl py-8 max-w-[750px]">
                    Brite automatiza todo o processo de agendamento e suporte 
                    ao cliente, com total disponiblidade e funcionando 24/7. 
                    Nossa IA conversacional responde todas as dúvidas dos pacientes
                    e manda um link para marcar uma consulta com seu dentista
                </h2>

                <Questions
                    question="Como a Brite automatiza a agenda de cada dentista?"
                    answer="A Brite utiliza um chatbot de IA integrado ao WhatsApp para automatizar o agendamento de consultas. 
                    Quando um paciente solicita uma consulta, o chatbot envia um link direto do calendly para que o paciente possa 
                    agendar a consulta nos horários disponíveis. Este processo é rápido e eficiente, garantindo que a agenda do dentista esteja sempre atualizada e organizada."
                />
                <Questions
                    question="A IA é fácil de usar?"
                    answer="Sim, a IA da Brite é projetada para ser intuitiva e fácil de usar para os pacientes, já que todo o produto foi desenvolvido para o Whatsapp. 
                    O chatbot interage com os pacientes de forma natural e amigável, guiando-os através do processo de agendamento e respondendo suas dúvidas 
                    com clareza e precisão. A interface de uso é simples, permitindo que qualquer pessoa, independentemente de sua familiaridade com tecnologia, consiga utilizar o sistema sem dificuldades."
                />
                <Questions
                    question="Como lidamos com a personalização para diferentes tipos de clínicas?"
                    answer="A Brite é altamente personalizável e pode ser configurada para atender às necessidades específicas de cada clínica odontológica ou dentista. 
                    Durante a implementação, coletamos informações sobre os serviços oferecidos, especialidades dos dentistas, horários de funcionamento e outras preferências da clínica. 
                    Essas informações são integradas ao chatbot de IA, garantindo que ele forneça respostas precisas e agendamentos personalizados de acordo com as particularidades de cada clínica."
                />
                <Questions
                    question="A Brite pode integrar-se com meus sistemas existentes?"
                    answer="Sim, a Brite foi desenvolvida para se integrar facilmente com os sistemas existentes da sua clínica. 
                    Nossa solução pode sincronizar com softwares de gestão de clínicas, agendas eletrônicas e outros sistemas utilizados pela sua equipe. 
                    Além disso, oferecemos integração direta com o Google Agenda, facilitando a gestão das consultas e garantindo que todas as informações estejam sempre atualizadas e acessíveis."
                />
                    
            </div>
        </div>
    )
}

export default Faq