import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import dashboardIcon from "../assets/svg/Rectangle 2804.svg";
import profileIcon from "../assets/svg/Icons.svg";
import analyticsIcon from "../assets/svg/Icons (1).svg";
import coverletterIcon from "../assets/svg/Icons (2).svg";
import resumeScoreIcon from "../assets/svg/Icons (3).svg";
import logoutIcon from "../assets/svg/Icons (4).svg";

import profileImage from "../assets/svg/profilePic.svg";
import Button from "../components/Button";

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const username = currentUser?.fullName || "Guest User";
  const email = currentUser?.email || "guest@demo.com";

  const styles = {
    active: "text-white p-4 rounded-lg bg-purpleColor font-normal",
    inactive:
      "text-black p-4 rounded-lg hover:bg-purple-300 hover:text-white font-normal",
  };

  // Update isActive function to handle an array of paths
  const isActive = (paths) => {
    return paths.some((path) => location.pathname === path);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <aside className="h-full p-4 s bg-rightWitheColor flex flex-col justify-between">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 text-p h-12 rounded-xl border border-gray-300"
        />
        <div>
          <p className="text-black text-base font-bold">{username}</p>
          <p className="text-sm font-normal text-black">{email}</p>
        </div>
      </div>

      <nav className="flex flex-col space-y-2">
        <Link
          to="/dashboard"
          className={`flex text-xl gap-4 ${
            isActive(["/dashboard", "/mycart"])
              ? styles.active
              : styles.inactive
          }`}
        >
          <img
            src={dashboardIcon}
            className="w-6 h-6 transition-colors duration-200 hover:fill-white" // Apply hover effect
            alt="Dashboard"
          />
          Dashboard
        </Link>
        <Link
          to="/products"
          className={`flex text-xl gap-4 ${
            isActive(["/products"]) ? styles.active : styles.inactive
          }`}
        >
          <img
            src={profileIcon}
            className="w-6 h-6 transition-colors duration-200 hover:fill-white" // Apply hover effect
            alt="Profile"
          />
          Products
        </Link>
        <Link
          to="/notifications"
          className={`flex text-xl gap-4 ${
            isActive(["/notifications"]) ? styles.active : styles.inactive
          }`}
        >
          <img
            src={analyticsIcon}
            className="w-6 h-6 transition-colors duration-200 hover:fill-white" // Apply hover effect
            alt="Analytics"
          />
          Notifications
        </Link>
        <Link
          to="/analytics"
          className={`flex text-xl gap-4 ${
            isActive(["/analytics"]) ? styles.active : styles.inactive
          }`}
        >
          <img
            src={coverletterIcon}
            className="w-6 h-6 transition-colors duration-200 hover:fill-white" // Apply hover effect
            alt="AI Cover Letter"
          />
          Analytics
        </Link>
        <Link
          to="/inventory"
          className={`flex text-xl gap-4 ${
            isActive(["/inventory"]) ? styles.active : styles.inactive
          }`}
        >
          <img
            src={resumeScoreIcon}
            className="w-6 h-6 transition-colors duration-200 hover:fill-white" // Apply hover effect
            alt="Resume Score"
          />
          Inventory
        </Link>
      </nav>

      <div className="mt-auto">
        <Button
          onClick={handleLogout}
          className={`flex text-xl w-full gap-4 ${styles.inactive}`}
        >
          <img
            src={logoutIcon}
            className="w-6 h-6 transition-colors duration-200 hover:fill-white" // Apply hover effect
            alt="Logout"
          />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
