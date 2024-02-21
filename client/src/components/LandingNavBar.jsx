import React from 'react'
import Link from 'next/link'

const LandingNavBar = () => {
  return (
    <nav className='w-full bg-transparent p-3 mb-10 flex justify-between'>
        <div className="flex gap-x-2 items-center">
            <img src="/panda.png" className="w-[4rem] h-[3rem] drop-shadow-lg" alt="panda_logo" />
            <p className="font-bold drop-shadow-xl tracking-wider text-white">Panda CMS</p> 
        </div>
        <div className='flex items-center pt-3 pr-4'>
            <Link href="/admin-dashboard" className='px-4 py-1 border-[2px] rounded-lg text-emerald-300 border-emerald-500 bg-transparent text-[20px] hover:bg-emerald-500 hover:text-white transition delay-50'>
                Sign In
            </Link>        
        </div>
    </nav>
  )
}

export default LandingNavBar