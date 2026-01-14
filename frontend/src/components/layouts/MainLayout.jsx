import React from "react";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col relative overflow-x-hidden">
      {/* Header Section */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 p-6 z-10">{children}</main>
    </div>
  );
};

export default MainLayout;
