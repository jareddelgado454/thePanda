import React from 'react';
import {
    FaTrashCan,
    FaPencil
} from 'react-icons/fa6';

export const Table = () => {
  return (
    <div className="relative overflow-x-auto rounded-md shadow-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase rounded-md bg-gray-50 dark:bg-white dark:text-gray-800">
                <tr>
                    <th scope="col" className="px-6 py-3 w-20">
                        IMAGE
                    </th>
                    <th scope="col" className="px-6 py-3">
                        FULL NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        MAIL
                    </th>
                    <th scope="col" className="px-6 py-3 w-20">
                        STATUS
                    </th>
                    <th scope="col" className="px-6 py-3">
                        CONTACT NUMBER
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ACTIONS
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-300 dark:text-gray-800 dark:font-medium">
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <img
                            src="/logo.jpg"
                            alt="logo_image"
                            className='w-[2rem] h-[2rem] rounded-full'
                        />
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">
                        <div>
                            <p className='border-2 dark:border-rose-600 dark:text-rose-600 py-1 font-medium rounded-md brightness-125 w-20 flex justify-center'>Active</p>
                        </div>
                    </td>
                    <td className="px-6 py-4">(+1) 999999999</td>
                    <td className="px-6 py-4">
                        <div className='flex gap-4'>
                            <button
                                type='button'
                                className='dark:bg-rose-700 p-2 rounded dark:text-white'
                            >
                                <FaTrashCan />
                            </button>
                            <button
                                type='button'
                                className='dark:bg-yellow-400 p-2 rounded dark:text-white'
                            >
                                <FaPencil />
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
