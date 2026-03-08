import { Header } from "./Header"
import { Outlet } from "react-router"
import { Sidebar } from "./Sidebar"

export default function MainLayout() {
    return (
        <>
            <div>
                <Header />
                <div className="flex items-center gap-5 overflow-y-scroll">
                    <Sidebar />
                    <div className="flex justify-center h-full w-screen px-4 pt-24 pl-66">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}