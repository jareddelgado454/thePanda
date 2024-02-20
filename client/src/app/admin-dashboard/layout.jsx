"use client";
import React from "react";
import { Sidebar } from "@/components/Sidebar";

export default function AdminDashboardLayout ({children}) {

    return(
        <div className="flex w-full h-screen max-h-screen">
            <Sidebar />
            <div className="home_content transition-all ease-out duration-500 px-2 py-4">
                <div className="text-white bg-slate-300 h-full rounded-lg dark:bg-green-panda overflow-hidden">
                {
                    children
                }
                </div>
            </div>
        </div>
    )
}