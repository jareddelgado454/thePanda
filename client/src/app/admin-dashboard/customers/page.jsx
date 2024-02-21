import { Table } from '@/components/Table'
import React from 'react'

const Customers = () => {
  return (
    <div className='container mx-auto px-3'>
      <p className='text-xl text-center md:text-left md:text-5xl font-bold py-6 tracking-[0.1em] drop-shadow-lg'>Customers Administration</p>
      {/* Todo: Cards */}
      {/* Todo: searchInput */}
      {/* Todo: Table */}
      <div className="flex w-full justify-between items-center gap-4 bg-white dark:bg-white rounded p-5 mb-6 shadow-md flex-wrap md:flex-nowrap">
        <div className="w-full flex gap-4 items-center flex-wrap md:flex-nowrap">

          <label className="font-extrabold dark:text-black tracking-[0.2em]" htmlFor="search-input">
            Search
          </label>
          <input
            type="search"
            id="myInput"
            className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          className="dark:bg-green-panda bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-[10rem]"
        >
          Add
        </button>
      </div>
      <div>
        <Table />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between w-full gap-4'>
        <div className='flex flex-row items-center mt-4 dark:text-gray-800 font-medium tab-pagination shadow-lg '>
          <span className='rounded-l-lg border-2 p-2 bg-gray-300'>Previous</span>
          <p className='p-2 bg-gray-300 border-y-2'>1</p>
          <p className='p-2 bg-gray-300 border-y-2'>2</p>
          <p className='p-2 bg-gray-300 border-y-2'>3</p>
          <p className='p-2 bg-gray-300 border-y-2'>4</p>
          <span className='rounded-r-lg border-2 p-2 bg-gray-300'>Next</span>
        </div>
        <div className='flex gap-3  drop-shadow-lg'>
          <p className='font-bold'>rows per page</p>
          <select name="" className='dark:text-black rounded' >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Customers