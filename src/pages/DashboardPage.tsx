import React from "react";
import Sidebar from "../components/Sidebar";
import Overlay from "../components/Overlay";
import Header from "../components/Header";
// import MainContent from "../components/MainContent";
import { Outlet } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#eaeaea]">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {showSidebar && <Overlay setShowSidebar={setShowSidebar} />}
      <div className="flex flex-col flex-1 h-screen overflow-y-auto lg:ml-64">
        <Header setShowSidebar={setShowSidebar} />
        {/* <MainContent /> */}

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
