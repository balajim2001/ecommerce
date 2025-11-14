import { useState } from "react";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/SideBar";

const PrivateLayout = () => {
    const [activeMenu, setActiveMenu] = useState('all-user');
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className="flex min-h-screen max-h-full bg-[#F2F7FB] dark:bg-[#0F172A]">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isCollapsed={isCollapsed} />
            <div className={`${isCollapsed ? "ml-20" : "ml-64"} flex-1 flex flex-col min-h-screen transition-width duration-200 ease`}>
                <Header onToggleSidebar={() => setIsCollapsed(!isCollapsed)} />
                <div className="flex-1 p-7 bg-(--bg-primary) max-md:p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PrivateLayout;