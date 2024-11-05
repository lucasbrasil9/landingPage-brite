import React from "react";
import { BsQrCodeScan } from "react-icons/bs";

const Cta = () => {
    return (
        <div className='w-full py-14'>
            <div className='md:max-w-[1400px] m-auto grid md:grid-cols-2 max-w-[520px] px-4 md:px-16'>
                <div className="flex flex-col justify-start gap-2">
                    <h1 className=" text-2xl md:text-4xl text-center md:text-left font-bold">
                        <span className="text-brite">Assine</span> o Chatbot diferente <br /> dos <span className="text-brite">Ineficientes do Passado</span> 
                    </h1>
                    <p className="text-gray-500 pb-6 md:text-xl text-center md:text-left md:max-w-[500px]">Transforme sua Clínica Odontológica com Tecnologia de IA</p>
                        
                    <div className="flex justify-center md:justify-start pb-10">
                        <button className='px-12 py-3 transition ease-out duration-300 hover:scale-105 bg-brite border animated-background hover:bg-gradient-to-r hover:from-[#6363EF] hover:via-indigo-400 hover:to-indigo-600 active:bg-brite-active focus:outline-none
                            text-white shadow-2xl rounded-lg text-lg hover:border-transparent'>
                            Use agora
                        </button>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start pb-16 md:pl-32 md:order-first">
                    <BsQrCodeScan
                        className="bg-brite h-72 w-72 rounded-xl py-4 shadow-2xl"
                        style={{color:'white'}}
                    />
                </div>
            

            </div>
        </div>
    )
}

export default Cta