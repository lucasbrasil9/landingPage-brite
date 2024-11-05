import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Questions = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-white py-4">
            <button 
                onClick={() => setIsOpen((prev) => !prev)} 
                className="text-white font-semibold md:text-lg flex items-center justify-between w-full hover:text-gray-200 active:text-gray-300 focus:outline-none">
                <span className="text-left">{question}</span>
                <span className="ml-4">
                    {!isOpen ? (
                        <IoIosArrowForward style={{color:'white'}} />  
                    ) : (
                        <IoIosArrowDown style={{color:'white'}} />
                    )}
                </span>
            </button>
            
            {isOpen && (
                <div className="mt-2 text-gray-300 text-sm md:text-base">
                    {answer}
                </div>    
            )}
            
        </div>
    )
}

export default Questions