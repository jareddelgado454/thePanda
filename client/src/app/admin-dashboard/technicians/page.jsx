import React from 'react';
import { Table } from '@/components/Table';
import { CardData } from '@/components/admin/cards/CardData';

const Technicians = () => {
  return (
    <div className='container mx-auto px-3 md:px-0 mb-8'>
      <p
        className='text-xl md:text-3xl text-center bg-white text-zinc-800 dark:text-white dark:bg-zinc-800 rounded-b-lg font-bold py-6 tracking-[0.1em] drop-shadow-lg transition-all'
      >
      Technicians Management
      </p>
      {/* Todo: Cards */}
    
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-6 place-items-center'>
        <CardData mode='total' />
        <CardData mode='active' />
        <CardData mode='inactive' />
      </div>

      {/* Todo: searchInput */}

      <div className="flex w-full justify-between items-center gap-4 bg-white dark:bg-zinc-800 rounded p-5 mb-6 shadow-md flex-wrap md:flex-nowrap">
        <div className="w-full flex gap-4 items-center flex-wrap md:flex-nowrap">

          <label className="font-extrabold text-zinc-800 dark:text-white tracking-[0.2em] transition-all" htmlFor="search-input">
            Search
          </label>
          <input
            type="search"
            id="myInput"
            className="dark:bg-zinc-800 border border-[#40C48E] dark:text-white shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          className="bg-green-panda dark:bg-zinc-800 dark:border-2 dark:border-[#40C48E] dark:hover:bg-green-panda hover:bg-[#2e966a] text-white font-bold py-2 px-4 rounded-lg w-full md:w-[10rem] transition-all"
        >
          Add
        </button>
      </div>
      {/* Todo: Table */}
      <div>
        <Table />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between w-full gap-4'>
        <div className='flex flex-row items-center mt-4 dark:text-gray-800 font-medium tab-pagination shadow-lg '>
          <span className='rounded-l-lg border-2 bg-white text-black hover:text-white hover:bg-green-panda p-2 dark:bg-zinc-800 dark:text-white dark:border-white dark:hover:bg-green-panda dark:hover:text-black cursor-pointer transition-all'>Previous</span>
          <p className='p-2 bg-white text-black hover:bg-green-panda hover:text-white dark:bg-zinc-800 dark:text-white border-y-2 dark:hover:bg-green-panda dark:hover:text-black cursor-pointer transition-all'>1</p>
          <p className='p-2 bg-white text-black hover:bg-green-panda hover:text-white dark:bg-zinc-800 dark:text-white border-y-2 dark:hover:bg-green-panda dark:hover:text-black cursor-pointer transition-all'>2</p>
          <p className='p-2 bg-white text-black hover:bg-green-panda hover:text-white dark:bg-zinc-800 dark:text-white border-y-2 dark:hover:bg-green-panda dark:hover:text-black cursor-pointer transition-all'>3</p>
          <p className='p-2 bg-white text-black hover:bg-green-panda hover:text-white dark:bg-zinc-800 dark:text-white border-y-2 dark:hover:bg-green-panda dark:hover:text-black cursor-pointer transition-all'>4</p>
          <span className='rounded-r-lg border-2 bg-white text-black hover:text-white hover:bg-green-panda p-2 dark:bg-zinc-800 dark:text-white dark:border-white dark:hover:bg-green-panda dark:hover:text-black cursor-pointer transition-all'>Next</span>
        </div>
        <div className='flex gap-3 drop-shadow-lg'>
          <p className='font-bold dark:text-white text-black'>rows per page</p>
          <select name="" className='dark:text-white bg-green-panda dark:bg-black border-2 border-white rounded-lg' >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Technicians