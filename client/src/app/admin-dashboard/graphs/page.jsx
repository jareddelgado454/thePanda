import React from 'react';
import { GeoPath } from '@/components/admin/charts/geoPath';

const Graphs = () => {
  return (
    <>
      <div className='bg-white h-[5rem] w-full dark:bg-zinc-800 shadow-md flex justify-center items-center'>
        <p className='text-black dark:text-white font-bold text-3xl capitalize tracking-[0.2em]'>Statistics from Entities</p>
      </div>
      <div>
        <GeoPath />
      </div>
    </>
  )
}

export default Graphs