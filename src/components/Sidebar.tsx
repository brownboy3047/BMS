import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineDesktop,
  AiOutlineFolderOpen,
  AiOutlineSetting,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsBuildingAdd, BsChevronDown } from "react-icons/bs";
import { PiCube } from "react-icons/pi";
import { TbTrolley } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { SlBasketLoaded } from "react-icons/sl";
import { GoTasklist } from "react-icons/go";

interface Props {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ showSidebar }) => {
  const [showDropdown1, setShowDropdown1] = React.useState(false);
  const [showDropdown2, setShowDropdown2] = React.useState(false);

  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform bg-primary text-white w-64 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:w-64 scrollbar-hide`}
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h2 className="text-base font-bold">Business Management System</h2>
      </div>
      <ul className="pt-4">
        <li className="py-2">
          <Link
            to="/"
            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
              location.pathname === "/" ? "bg-secondary" : ""
            }`}
          >
            <AiOutlineDesktop className="mr-2" size={20} />
            Dashboard
          </Link>
        </li>

        <li className="py-2">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700"
            onClick={() => setShowDropdown1(!showDropdown1)}
          >
            <span className="flex items-center">
              <PiCube className="mr-2" size={20} />
              Product
            </span>
            <BsChevronDown
              className={`transition-transform duration-200 ${
                showDropdown1 ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {showDropdown1 && (
            <ul className="pl-8">
              <li className="py-2">
                <Link
                  to="/products"
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700  ${
                    location.pathname === "/products" ? "bg-secondary" : ""
                  }`}
                >
                  <PiCube className="mr-2" size={18} />
                  Products
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/category"
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
                    location.pathname === "/category" ? "bg-secondary" : ""
                  }`}
                >
                  <AiOutlineFolderOpen className="mr-2" size={18} />
                  Product category
                </Link>
              </li>

              <li className="py-2">
                <Link
                  to="#"
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
                    location.pathname === "/inventory" ? "bg-secondary" : ""
                  }`}
                >
                  <TbTrolley className="mr-2" size={18} />
                  Inventory
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="py-2">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700"
            onClick={() => setShowDropdown2(!showDropdown2)}
          >
            <span className="flex items-center">
              <AiOutlineShoppingCart className="mr-2" size={20} />
              Shop
            </span>
            <BsChevronDown
              className={`transition-transform duration-200 ${
                showDropdown2 ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {showDropdown2 && (
            <ul className="pl-8">
              <li className="py-2">
                <Link
                  to="#"
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
                    location.pathname === "/sales" ? "bg-secondary" : ""
                  }`}
                >
                  <BsBuildingAdd className="mr-2" size={18} />
                  Sales
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="#"
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
                    location.pathname === "/purchase" ? "bg-secondary" : ""
                  }`}
                >
                  <SlBasketLoaded className="mr-2" size={18} />
                  Purchase
                </Link>
              </li>

              <li className="py-2">
                <Link
                  to="#"
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
                    location.pathname === "/expense" ? "bg-secondary" : ""
                  }`}
                >
                  <GiCash className="mr-2" size={18} />
                  Expense
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="py-2">
          <Link
            to="/tasks"
            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
              location.pathname === "/tasks" ? "bg-secondary" : ""
            }`}
          >
            <GoTasklist className="mr-2" size={20} />
            Tasks
          </Link>
        </li>

        <li className="py-2">
          <Link
            to="/settings"
            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
              location.pathname === "/settings" ? "bg-secondary" : ""
            }`}
          >
            <AiOutlineSetting className="mr-2" size={20} />
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
