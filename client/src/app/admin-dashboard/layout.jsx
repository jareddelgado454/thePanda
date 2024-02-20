import { Sidebar } from "@/components/Sidebar";


export default function AdminDashboardLayout ({children}) {
    return(
        <div>
            <Sidebar />
            {children}
        </div>
    )
}