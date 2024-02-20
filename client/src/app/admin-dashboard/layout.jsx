"use client";
import React from "react";
import { Sidebar } from "@/components/Sidebar";

export default function AdminDashboardLayout ({children}) {

    return(
        <div className="flex w-full h-screen max-h-screen">
            <Sidebar />
            <div className="home_content transition-all ease-out duration-500 p-4">
                <div className="text-white bg-slate-300 h-full rounded-lg dark:bg-green-panda p-8">
                {
                    children
                }
                </div>
            </div>
        </div>
    )
}