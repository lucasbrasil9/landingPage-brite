import React from 'react'
import { FaCheck } from "react-icons/fa6";

const PricingList = ({list, isFirst}) => {
  return (
    <div className='flex items-center gap-2 py-1'>
        <FaCheck 
            style={{color:'#6363EF'}}
        />
        <p className={isFirst ? 'text-brite font-semibold' : 'font-semibold'}>{list}</p>
    </div>
  )
}

export default PricingList
