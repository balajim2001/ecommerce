import { useState } from "react";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/SideBar";

const PrivateLayout = () => {
    const [activeMenu, setActiveMenu] = useState('add-new-user');
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className="app-container">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isCollapsed={isCollapsed} />
            <div className="main-content">
                <Header onToggleSidebar={() => setIsCollapsed(!isCollapsed)} />
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PrivateLayout;