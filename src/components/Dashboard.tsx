import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { PiCube } from "react-icons/pi";
import TaskTable from "./TaskTable";

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 p-4 lg:p-8">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="p-5 md:w-56 w-full h-28 bg-[#f8f9fa] shadow-md rounded-md border">
          <div className="flex items-center justify-between text-neutral-600 text-base font-semibold">
            <p className="uppercase">SALES</p>
            <PiCube size={20} className="text-black" />
          </div>

          <p className="mt-3 font-bold text-xl">6</p>
        </div>

        <div className="p-5 md:w-56 w-full h-28 bg-[#f8f9fa] shadow-md rounded-md border">
          <div className="flex items-center justify-between text-neutral-600 text-base font-semibold">
            <p className="uppercase">Order online</p>
            <AiOutlineShopping size={20} className="text-black" />
          </div>

          <p className="mt-3 font-bold text-xl">0</p>
        </div>

        <div className="p-5 md:w-56 w-full h-28 bg-[#f8f9fa] shadow-md rounded-md border">
          <div className="flex items-center justify-between text-neutral-600 text-base font-semibold">
            <p className="uppercase">Notice</p>
            <IoMdNotificationsOutline size={20} className="text-black" />
          </div>

          <p className="mt-3 font-bold text-xl">0</p>
        </div>

        <div className="p-5 md:w-56 w-full h-28 bg-[#f8f9fa] shadow-md rounded-md border">
          <div className="flex items-center justify-between text-neutral-600 text-base font-semibold">
            <p className="uppercase">Contact messages</p>
            <LuMessageCircle size={20} className="text-black" />
          </div>

          <p className="mt-3 font-bold text-xl">0</p>
        </div>
      </div>

      {/* Task */}

      <TaskTable />
    </main>
  );
};

export default Dashboard;
