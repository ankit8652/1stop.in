import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard"; // Removed curly braces around 'Dashboard'
import Sidebar from "./components/Sidebar"; // Removed curly braces around 'Dashboard'
import JobTracker from "./components/JobTracker"; // Removed curly braces around 'Dashboard'

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
