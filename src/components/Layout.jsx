import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <main className="flex-1 p-6 overflow-auto bg-gray-50">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;