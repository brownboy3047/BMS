import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineLock, AiOutlineLogout } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

import user from "../assets/brown_boy.jpeg";

interface Props {
  setShowSidebar: (show: boolean) => void;
}

const Header: React.FC<Props> = ({ setShowSidebar }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const userName = "John Doe"; // Replace with actual user name
  const userAvatar = user?.length ? user : null; // Replace with actual user avatar

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between lg:justify-end h-16 px-4 bg-white border-b border-gray-200 lg:px-8">
      <button
        className="text-gray-500 hover:text-gray-600 lg:hidden"
        onClick={() => setShowSidebar(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="flex items-center">
        <button
          className="flex items-center gap-1 py-2 pl-3 pr-4 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 outline-none"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {!userAvatar ? (
            <FaUserCircle size={24} />
          ) : (
            <img
              src={userAvatar}
              alt="User Avatar"
              className="w-8 h-8 mr-2 rounded-full"
            />
          )}

          <span>{userName}</span>
          <BsChevronDown
            className={`ml-2 transition-transform duration-200 ${
              showDropdown ? "transform rotate-180" : ""
            }`}
          />
        </button>
        {showDropdown && (
          <ul className="absolute top-16 right-4 bg-white border border-gray-200 rounded-md shadow-md w-48">
            <li>
              <Link
                to="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <AiOutlineUser className="mr-2" size={16} />
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <AiOutlineLock className="mr-2" size={16} />
                Change Password
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <AiOutlineLogout className="mr-2" size={16} />
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
