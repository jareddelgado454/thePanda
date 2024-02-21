import React from 'react';
import {
    FaTrashCan,
    FaPencil
} from 'react-icons/fa6';
import { Customers } from '../assets/data/Customer';

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
                {
                    Customers.map((Customer, i) => (
                        <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-300 dark:text-gray-800 dark:font-medium"
                            key={i}
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                <img
                                    src={Customer.image}
                                    alt="logo_image"
                                    className='w-[2rem] h-[2rem] rounded-full object-cover bg-center'
                                />
                            </th>
                            <td className="px-6 py-4">
                                {Customer.full_name}
                            </td>
                            <td className="px-6 py-4">
                                {Customer.mail}
                            </td>
                            <td className="px-6 py-4">
                                <div>
                                    <p
                                        className={`border-2 ${Customer.status === 'Active' ? 'dark:border-emerald-700 dark:text-emerald-700' : 'dark:border-rose-600 dark:text-rose-600'} py-1 font-medium rounded-md brightness-125 w-20 flex justify-center`}
                                    >
                                        {Customer.status}
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {Customer.contact_number}
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex gap-4'>
                                    <button
                                        type='button'
                                        className='dark:bg-rose-500 p-2 rounded dark:text-white'
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
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
