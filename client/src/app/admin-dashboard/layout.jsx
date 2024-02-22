"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { FaHouse, FaMoon } from "react-icons/fa6";
import Link from "next/link";

export default function AdminDashboardLayout ({children}) {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        
        if(theme === "dark")
        {
            document.querySelector('html').classList.add('dark');
        }else {
            document.querySelector('html').classList.remove('dark')
        }

    }, [theme]);

    const handleChangeTheme = () => {

        setTheme(prevTheme => prevTheme === "light" ? "dark" : 'light');

    };

    return(
        <div className="flex w-full h-screen max-h-screen relative bg-zinc-600 dark:bg-zinc-800">
            <Sidebar />
            <div className="home_content transition-all ease-out duration-500 md:px-2 py-4">
                <div className="text-white bg-zinc-200 h-full rounded-lg dark:bg-green-panda overflow-y-auto">
                {
                    children
                }
                </div>
            </div>
            <Link href={`/admin-dashboard`} className="absolute z-50 bottom-10 right-10 cursor-pointer">
                <p className="bg-green-panda dark:bg-zinc-600 text-white p-4 rounded-full transition-all shadow-md ease-in-out hover:-translate-y-1 hover:scale-110">
                    <FaHouse className="text-2xl" />
                </p>
            </Link>
            <button
                type="button"
                className="absolute z-50 bg-green-panda dark:bg-zinc-600 text-white bottom-10 right-28 rounded-full p-4 shadow-md transition-all ease-in-out hover:-translate-y-1 hover:scale-110"
                onClick={handleChangeTheme}
            >
                <FaMoon className="text-2xl" />
            </button>
        </div>
    )
}