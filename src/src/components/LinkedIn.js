import React from "react";
import "../styles/LinkedIn.css";

const LinkedIn = () => {
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
          <div className="linkedin-bottom-text">
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
