import { Header } from "./Header"
import { Outlet } from "react-router"
import { Sidebar } from "./Sidebar"

export default function MainLayout() {
    return (
        <>
            <div className="grid grid-rows-[80px_calc(100vh-80px)]">
                <Header />
                <div className="flex items-center justify-between gap-5">
                    <Sidebar />
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}