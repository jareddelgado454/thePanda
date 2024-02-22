"use client"

import React from 'react'
import {RiEdit2Line} from "react-icons/ri"
import Image from 'next/image'

const Settings = () => {

  const user = {
    image : "https://media.gq.com.mx/photos/609c0fdeee4372271f0b9056/1:1/w_2000,h_2000,c_limit/salir%20guapo%20en%20fotos-605380757.jpg",
    fullName : "Neil Brown",
    name : "Neil",
    lastName : "Brown",
    email : "neil.brown@panda-mars.com",
    phone : "+01654651658",
    address : "1959 NE 153 ST. North Miami",
    location : "Florida",
  }

  const imageLoader = ({src}) => {
    return src
  }

  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='bg-white h-[5rem] w-full dark:bg-zinc-800 shadow-md flex justify-center items-center mb-10'>
          <p className='text-black dark:text-white font-bold text-3xl capitalize tracking-[0.2em]'>Profile Settings</p>
        </div>
        <div className='w-[90%]  '>
          <form >
              <div className='flex items-center mb-6'>
                  <div className='w-1/4'>
                      <p className='text-zinc-800 font-extrabold'>Profile Picture:</p>
                  </div>
                  <div className='flex-1'>
                      <div className='relative mb-2'>
                        {user.image &&
                          <Image unoptimized src={user.image} loader={imageLoader} width={80} height={80} alt={`${user.fullName} profile pic`} />
                        }
                          <label htmlFor='avatar' className='absolute bg-zinc-600 dark:bg-zinc-800 p-2 left-24 -top-2 rounded-full cursor-pointer hover:bg-secondary-100'>
                              <RiEdit2Line />
                          </label>
                          <input type='file' id='avatar' className='hidden'/>
                      </div>
                      <p className='text-gray-600 text-sm'>
                          Allowed extensions: png, jpg, jpeg
                      </p>
                  </div>
              </div>
              <div className='flex items-center mb-4'>
                <div className='w-1/4'>
                    <p className='text-zinc-800 font-extrabold' >Nombres Completos: <span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1 flex items-center gap-4'>
                    <div className='w-full'>
                      <input type="text" value={user.name} className='w-full py-3 px-4 outline-none rounded-lg bg-zinc-600 dark:bg-zinc-800 cursor-default' readOnly/>
                    </div>
                    <div className='w-full'>
                      <input type="text" value={user.lastName} className='w-full py-3 px-4 outline-none rounded-lg bg-zinc-600 dark:bg-zinc-800 cursor-default' readOnly/>
                    </div>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <div className='w-1/4'>
                    <p className='text-zinc-800 font-extrabold'>Email: <span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1 flex items-center gap-4'>
                    <div className='w-full'>
                      <input type="text" value={user.email} className='w-full py-3 px-4 outline-none rounded-lg bg-zinc-600 dark:bg-zinc-800 cursor-default' readOnly/>
                    </div>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <div className='w-1/4'>
                    <p className='text-zinc-800 font-extrabold'>Phone: <span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1 flex items-center gap-4'>
                    <div className='w-full'>
                      <input type="text" value={user.phone} className='w-full py-3 px-4 outline-none rounded-lg bg-zinc-600 dark:bg-zinc-800 cursor-default' readOnly/>
                    </div>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <div className='w-1/4'>
                    <p className='text-zinc-800 font-extrabold'>Address: <span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1 flex items-center gap-4'>
                    <div className='w-full'>
                      <input type="text" value={user.address} className='w-full py-3 px-4 outline-none rounded-lg bg-zinc-600 dark:bg-zinc-800 cursor-default' readOnly/>
                    </div>
                </div>
              </div>
              <div className='flex items-center mb-8'>
                <div className='w-1/4'>
                    <p className='text-zinc-800 font-extrabold'>Location: <span className='text-red-500'>*</span></p>
                </div>
                <div className='flex-1 flex items-center gap-4'>
                    <div className='w-full'>
                      <input type="text" value={user.location} className='w-full py-3 px-4 outline-none rounded-lg bg-zinc-600 dark:bg-zinc-800 cursor-default' readOnly/>
                    </div>
                </div>
              </div>
              <div className='flex gap-x-4'>
                    <button className='bg-zinc-600 dark:bg-zinc-800 text-white px-5 py-2 rounded-lg text-[17px]'>
                        Edit data
                    </button>
                    <button className='bg-emerald-600 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg text-[17px]'>
                        Save Changes
                    </button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Settings