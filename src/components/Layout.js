import React from "react";
import Navbar from "./components/Navbar"; // Removed curly braces around 'Dashboard'
import Sidebar from "./components/Sidebar"; // Removed curly braces around 'Dashboard'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
