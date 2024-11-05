import React from "react";
import { avatar, quote } from "../assets";

const Card = ({ feedback, nome, clinica }) => {
    return (
        // <div className="bg-white p-6 border border-gray-300 rounded-3xl drop-shadow-xl">
            <div className="items-start">
                <img src={quote} />
                <p className="py-5 font-semibold pr-10 md:pr-0">
                    {feedback}
                </p>
                <div className="flex gap-2 items-center">
                    <img src={avatar} className="w-10" />
                    <p className="font-bold">{nome}</p>
                    <p className="text-gray-700 text-sm mt-[2.5px]">{clinica}</p>
                </div>
            </div>
        // </div>
    )
}

export default Card