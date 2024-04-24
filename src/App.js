import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div
        style={{ backgroundColor: "var(--backgroundColor)", height: "100vh" }}
      >
        {/* <Layout /> */}
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;
