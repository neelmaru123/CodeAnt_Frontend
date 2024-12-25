import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./Mobile_sidebar";

function HomeLayout() {
    return (
        <>
            <div className="flex h-screen">
                <div className="hidden sm:block">
                    <Sidebar />
                </div>
                <div className="block sm:hidden">
                    <MobileSidebar />
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default HomeLayout;