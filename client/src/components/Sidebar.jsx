import React from 'react';

export const Sidebar = () => {



  return (
    <div className='sidebar dark:bg-zinc-800 text-white'>
        <div className='flex flex-col items-center py-4 relative h-full px-4'>
            <i className="fa-solid fa-bars transition-all border-2 p-2 rounded-lg cursor-pointer hover:bg-white hover:text-black mb-4"></i>
            <p className='my-4'>
                A
            </p>
            <Separator />
            <ul className='bg-green-panda rounded-md p-3 mt-4'>
                <li className=''>
                    <i className="fa-solid fa-user"></i>
                </li>
                <li className='mt-5'>
                    <i className="fa-solid fa-user-gear"></i>
                </li>
                <li className='mt-5'>
                    <i className="fa-solid fa-user-pen"></i>
                </li>
            </ul>
            <div className='w-full px-4 absolute bottom-0'>
                <div className='bg-green-panda p-3 rounded-md mb-4'>
                    <ul className=''>
                        <li className='w-full flex items-center justify-center'>
                            <i className="fa-solid fa-chart-simple"></i>
                        </li>
                        <li className='mt-5 w-full flex items-center justify-center'>
                            <i className="fa-solid fa-gear"></i> 
                        </li>
                    </ul>
                </div>
                <Separator />
                <div className='bg-green-panda p-3 rounded-md mt-4'>
                    <img
                        src="/logo.jpg"
                        alt="user_logo"
                        className='rounded'    
                    />
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