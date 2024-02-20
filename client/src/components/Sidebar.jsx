"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUser, FaUserGear, FaUserPen, FaChartSimple, FaGear, FaBars } from 'react-icons/fa6'
export const Sidebar = () => {
    const [active, setActive] = useState(false);

    const toggleSidebar = () => {
        setActive(!active); // Cambiar el estado activo
    };
  return (
    <div className={`sidebar dark:bg-zinc-800 text-white transition-all ease-out duration-500 ${active ? 'active' : null}`}>
        <div className='flex flex-col items-center py-4 relative h-full px-4'>
            <div className={`w-full flex flex-row items-center ${active ? 'justify-between': 'justify-center'}`}>
                <FaBars id='btn' onClick={toggleSidebar} className='text-xl cursor-pointer' />
                <p className={`font-bold drop-shadow-xl tracking-wider ${active ? 'block' : 'hidden'}`}>Panda CMS</p>
                <img src="/panda.png" className={`w-[5rem] h-[4rem] drop-shadow-lg  ${active ? 'block' : 'hidden'}`} alt="panda_logo" />
                
            </div>
            <p className='my-4 tracking-[0.5em]'>
                ACE{ active ? 'SS' : '' }
            </p>
            <Separator />
            <ul className={`bg-green-panda shadow-xl transition-all rounded-md p-3 mt-4 ${active && 'w-full'}`}>
                <Link href={`/admin-dashboard/customers`} className='flex gap-3 items-center'>
                    <FaUser className='text-xl' />
                    <p className={`text-xl font-medium ${!active && 'hidden'}`}>Customers</p>
                </Link>
                <li className='flex gap-3 items-center mt-5'>
                    <FaUserGear className='text-xl' />
                    <p className={`text-xl font-medium ${!active && 'hidden'}`}>Technicians</p>
                </li>
                <li className='flex gap-3 items-center mt-5'>
                    <FaUserPen className='text-xl' />
                    <p className={`text-xl font-medium ${!active && 'hidden'}`}>Users</p>
                </li>
            </ul>
            <div className='w-full px-4 absolute bottom-4 transition-all'>
                <div className='bg-green-panda shadow-xl p-3 rounded-md mb-4'>
                    <ul className=''>
                        <li className='flex gap-3 items-center'>
                            <FaChartSimple />
                            <p className={`text-xl font-medium ${!active && 'hidden'}`}>Charts</p>
                        </li>
                        <li className='flex gap-3 items-center mt-5'>
                            <FaGear />
                            <p className={`text-xl font-medium ${!active && 'hidden'}`}>Settings</p>
                        </li>
                    </ul>
                </div>
                <Separator />
                <div className={`bg-green-panda shadow-xl p-3 rounded-md mt-4 transition-all w-full ${active ? 'h-[6rem]' : 'h-[3rem]'}`}>
                    <div className='flex items-center w-full h-full gap-2'>
                        <img
                            src="/logo.jpg"
                            alt="user_logo"
                            className={`rounded-full   ${active ? 'w-[3rem] h-[3rem]' : 'w-[1.5rem] h-[1.5rem]'}`}    
                        />
                        <div className='overflow-hidden flex flex-col gap-1'>
                            <p className={`font-medium ${!active && 'hidden'}`}>David Saavedra</p>
                            <p className={`text-xs text-gray-100 tracking-wide ${!active && 'hidden'}`}>davideveriwhere@gmail.com</p>
                            <p className={`text-xs font-bold cursor-pointer ${!active && 'hidden'}`}>logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const Separator = () => {
    return(
        <div className='w-full h-[2px] bg-white' />
    )
}