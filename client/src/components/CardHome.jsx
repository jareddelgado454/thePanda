import React from 'react'
import { RiTeamFill, RiTaxiFill, RiGroupFill } from "react-icons/ri";

const CardHome = ({type, numberActive, lastRegistrations}) => {
  return (
    <div
        className='hover:text-black bg-green-panda text-white dark:bg-zinc-800 w-[25%] h-[220px] rounded-xl shadow-2xl px-4 py-5 flex flex-col justify-between transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'
    >
        <div className='w-full flex justify-between items-center'>
            {
                type == "Customers" ? (
                    <RiGroupFill className='text-[50px]'/>
                ) : type == "Technicians" ? (
                    <RiTaxiFill className='text-[50px]'/>
                ) : (
                    <RiTeamFill className='text-[50px]'/>
                )
            }
            
            <h3 className='text-[50px] font-bold'>{numberActive}</h3>
        </div>
        <div className='w-full flex justify-between items-center'>
            <h4 className='font-bold text-[20px] '>{type}</h4>
            {
                type == "Customers" ? (
                    <h4>Last Customers: +{lastRegistrations}</h4>
                ) : type == "Technicians" ? (
                    <h4>Last Technicians: +{lastRegistrations}</h4>
                ) : (
                    <h4>Last Users: +{lastRegistrations}</h4>
                )
            }
        </div>
    </div>
  )
}

export default CardHome