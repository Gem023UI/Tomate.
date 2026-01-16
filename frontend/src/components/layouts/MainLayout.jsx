import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col relative overflow-x-hidden">
      {/* Header Section */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 z-10">{children}</main>

      {/* Footer Section */}
      <Footer />

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default MainLayout;