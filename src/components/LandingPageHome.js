import React from 'react';
import resumeImage from '../images/resume_image.jpg';
import resumeImage2 from '../images/resume_image_2.webp';
import resumeImage3 from '../images/resume_image_3.jpg';
import resumeImage4 from '../images/resume_image_4.jpg';

const LandingPageHome = () => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <div style={{ height: "60%", overflow: "hidden" }}>
          <img src={resumeImage4} alt="Resume" width="100%" /> {/* Assuming the image is in the public directory */}
          <div
            style={{
              position: 'absolute',
              top: '66%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              fontSize: '100px',
              fontWeight: 'bold',
              zIndex: '1', // Ensure the text appears above the image
            }}
          >
            We Are 1 Stop Destination
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageHome;