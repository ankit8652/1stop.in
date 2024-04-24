import React from "react";
import LandingPageNavbar from "./LandingPageNavbar";
import LandingPageHome from "./LandingPageHome";
import LandingPageAboutUs from "./LandingPageAboutUs";
import LandingPageFeatures from "./LandingPageFeatures";
import LandingPageFooter from "./LandingPageFooter";

const LandingPage = () => {
  return (
    <>
      <LandingPageNavbar />
      <LandingPageHome />
      <LandingPageAboutUs />
      <LandingPageFeatures />
      <LandingPageFooter />
    </>
  );
};

export default LandingPage;
