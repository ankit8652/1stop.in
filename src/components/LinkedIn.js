import React from "react";
import "./LinkedIn.css";

const LinkedIn = () => {
  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid rgb(216, 215, 215)",
  };

  const bottomStyle = {
    fontSize: "0.8rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "30px",
  };

  const bottomTextStyle = {
    // width: "100%",
    textAlign: "center",
    fontSize: "0.9rem",
  };

  return (
    <>
      <div className="linkedin-container">
        <div className="linkedin-header">
          <h2>LinkedIn</h2>
        </div>
        <div className="linkedin-bottom">
          <h2>
            LinkedIn Profile not linked to Careerflow. Here is how you can link
            your profile.
          </h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/e6TwZg0QXYw?si=5qmysu8OLOKVMLiN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="linkedin-bottom-text">
        <div style={headerStyle} className="linkedin-header">
          <h2>LinkedIn</h2>
          <h4 style={{ marginLeft: "10px" }}>
            LinkedIn Profile not linked to Careerflow. Here is how you can link
            your profile.
          </h4>
        </div>
        <div style={bottomStyle} className="linkedin-bottom">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/e6TwZg0QXYw?si=5qmysu8OLOKVMLiN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div style={bottomTextStyle} className="linkedin-bottom-text">
            <p>
              Note: For updating the LinkedIn profile with Careerflow. Go to
              your LinkedIn profile page, find the Careerflow Icon and link
              "Sync Profile" button.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkedIn;
