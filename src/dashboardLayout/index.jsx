import React from "react";
import DashboardSidebar from "../dashboardSidebar";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <aside className="hidden lg:block w-1/5 bg-rightWitheColor">
          <DashboardSidebar />
        </aside>

        <main className="flex-grow bg-offWhiteColor">{children}</main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
