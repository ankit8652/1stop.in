import React from "react";
import Container from "@mui/material/Container";

const LandingPageNavbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around", position: "absolute", backgroundColor: "#fff", width: "100%" }}>
        <div>
          <h2>1Stop.in</h2>
        </div>
        <div style={{width: "30%", fontSize: "18px"}}>
          <ul style={{display: "flex", listStyle: "none", justifyContent: "space-between",}}>
            <li>
              <a href="/" style={{textDecoration: "none", color: "#444"}}>Home</a>
            </li>
            <li>
              <a href="/" style={{textDecoration: "none", color: "#444"}}>Login</a>
            </li>
            <li>
              <a href="/" style={{textDecoration: "none", color: "#444"}}>Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingPageNavbar;
