import CardHome from '@/components/CardHome'
import React from 'react'
import Link from 'next/link'
import { FaGear, FaChartSimple } from 'react-icons/fa6'

const AdminDashboard = () => {
  return (
    <div className='w-full m-4'>
        <h2 className='text-4xl text-black dark:text-white font-extrabold mb-2'>Welcome Back [username]</h2>
        <h4 className='text-[22px] mb-8 text-gray-700 dark:text-gray-100 font-semibold'>The bussiness information is here</h4>
        <div className='w-full flex flex-wrap justify-around items-center mb-8'>
            <CardHome type='Customers' numberActive={50} lastRegistrations={5}/>
            <CardHome type='Technicians' numberActive={50} lastRegistrations={5}/>
            <CardHome type='Users' numberActive={50} lastRegistrations={5}/>
        </div>
        <h2 className='text-[22px] text-black dark:text-white font-bold mb-8'>Other Options:</h2>
        <div className='flex gap-x-4'>
            <Link href="/admin-dashboard/graphs" className='cursor-pointer font-semibold flex gap-x-2 items-center shadow-lg text-[20px] dark:text-zinc-900 bg-black dark:bg-white/80  px-3 py-2 rounded-lg  hover:bg-zinc-800 hover:text-emerald-400 transition-colors duration-300'>
                <FaChartSimple />
                View Charts
            </Link>
            <Link href="/admin-dashboard/settings" className='cursor-pointer font-semibold flex gap-x-2 items-center shadow-lg text-[20px]  dark:text-zinc-900 bg-black dark:bg-white/80  px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-emerald-400 transition-colors duration-300'>
                <FaGear />
                Settings
            </Link>
        </div>
    </div>
  )
}

export default AdminDashboard