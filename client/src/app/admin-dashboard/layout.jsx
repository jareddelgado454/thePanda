"use client";
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { FaHouse } from "react-icons/fa6";
import Link from "next/link";

export default function AdminDashboardLayout ({children}) {

    return(
        <div className="flex w-full h-screen max-h-screen relative">
            <Sidebar />
            <div className="home_content transition-all ease-out duration-500 md:px-2 py-4">
                <div className="text-white bg-slate-300 h-full rounded-lg dark:bg-green-panda overflow-hidden p-6">
                {
                    children
                }
                </div>
            </div>
            <Link href={`/admin-dashboard`} className="absolute z-50 bottom-10 right-10 cursor-pointer">
                <p className="dark:bg-zinc-800 dark:text-white p-4 rounded-full">
                    <FaHouse className="text-2xl" />
                </p>
            </Link>
        </div>
    )
}