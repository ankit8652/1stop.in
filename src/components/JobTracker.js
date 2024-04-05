import React, { useState } from "react";
import "./JobForm.css";

const jobTrackerHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "lexend, sans-serif",
  color: "#152C5B",
};

const inputStyle = {
  width: "200px",
  height: "32px",
  fontFamily: "lexend, sans-serif",
  color: "#152C5B",
};

const buttonStyle = {
  width: "120px",
  height: "32px",
  backgroundColor: "#4280DL",
  fontFamily: "lexend, sans-serif",
  color: "#152C5B",
};

const sectionStyle = {
  borderRadius: "5px",
  width: "24.5%",
  height: "100%",
  backgroundColor: "#e1edff",
  padding: "1rem",
  fontFamily: "lexend, sans-serif",
  color: "#152C5B",
};

const JobTracker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [section, setSection] = useState("Saved");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [jobs, setJobs] = useState({
    Saved: [],
    Applied: [],
    Interviewing: [],
    Offer: [],
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      jobTitle,
      companyName,
      jobUrl,
      section,
      description,
      tags,
    };

    setJobs((prevJobs) => ({
      ...prevJobs,
      [section]: [...prevJobs[section], newJob],
    }));

    // Reset form fields
    setJobTitle("");
    setCompanyName("");
    setJobUrl("");
    setDescription("");
    setTags("");
  };

  return (
    <>
      <div style={{ margin: "0px", padding: "0px", marginTop: "-28px" }}>
        <div style={jobTrackerHeaderStyle}>
          <div>
            <h2 style={{ fontFamily: "lexend, sans-serif", color: "#152C5B" }}>
              My 2024 Job Search
            </h2>
          </div>
          <div style={{ display: "flex", padding: "1.5%", gap: "20px" }}>
            <div>
              <input type="text" placeholder="Search" style={inputStyle} />
            </div>
            <div>
              <button style={buttonStyle} onClick={toggleForm}>
                Add Job
              </button>
              {isOpen && (
                // <div
                //   className="form-container"
                //   style={{
                //     position: "fixed",
                //     top: "50%",
                //     left: "50%",
                //     transform: "translate(-50%, -50%)",
                //     // backgroundColor: "#fff",
                //     padding: "20px",
                //     // borderRadius: "8px",
                //     // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                //     // zIndex: 999,
                //     maxHeight: "85%",
                //     overflowY: "auto"
                //   }}
                // >
                  // <div className="job-form-container" style={{
                  //   position: "fixed",
                  //   top: "50%",
                  //   left: "50%",
                  //   transform: "translate(-50%, -50%)",
                  //   backgroundColor: "#fff",
                  //   padding: "20px",
                  //   borderRadius: "8px",
                  //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  //   zIndex: 999,
                  //   maxHeight: "80%",
                  //   overflowY: "auto"
                  // }}>
                    <div className="job-form" style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#fff",
                    padding: "35px",
                    borderRadius: "8px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    zIndex: 999,
                    maxHeight: "90%",
                    overflowY: "auto",
                    webkitScrollbar: {
                      width: "5px"
                    }
                  }}>
                      <h2
                        style={{
                          fontFamily: "lexend, sans-serif",
                          color: "#152C5B",
                        }}
                      >
                        Add Job
                      </h2>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="jobTitle">* Job Title</label>
                          <input
                            type="text"
                            id="jobTitle"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            style={{
                              fontFamily: "lexend, sans-serif",
                              color: "#152C5B",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="companyName">* Company Name</label>
                          <input
                            type="text"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            style={{
                              fontFamily: "lexend, sans-serif",
                              color: "#152C5B",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="jobUrl">Job Url</label>
                          <input
                            type="text"
                            id="jobUrl"
                            value={jobUrl}
                            onChange={(e) => setJobUrl(e.target.value)}
                            style={{
                              fontFamily: "lexend, sans-serif",
                              color: "#152C5B",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="section">* Section</label>
                          <select
                            id="section"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            style={{
                              fontFamily: "lexend, sans-serif",
                              color: "#152C5B",
                            }}
                          >
                            <option value="Saved">Saved</option>
                            <option value="Applied">Applied</option>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Offer">Offer</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Paste or Type the Job Description here"
                            style={{
                              fontFamily: "lexend, sans-serif",
                              color: "#152C5B",
                              height: 150,
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="tags">Tags</label>
                          <input
                            type="text"
                            id="tags"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            style={{
                              fontFamily: "lexend, sans-serif",
                              color: "#152C5B",
                            }}
                          />
                        </div>
                        <div
                          className="form-note"
                          style={{
                            fontFamily: "lexend, sans-serif",
                            color: "#152C5B",
                          }}
                        >
                          Did you know? You can save jobs directly from your
                          Chrome Extension and have all data synced back in a
                          single click? <a href="#">Learn more</a>
                        </div>
                        <div className="form-actions">
                          <button
                            type="button"
                            className="cancel-btn"
                            onClick={toggleForm}
                            style={{
                              fontFamily: "lexend, sans-serif",
                              color: "#152C5B",
                            }}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="submit-btn"
                            style={{
                              fontFamily: "lexend, sans-serif",
                              color: "#152C5B",
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  // </div>
                // </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="job-sections"
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "100vh",
          overflowY: "overlay",
        }}
      >
        <div className="section" style={sectionStyle}>
          <div>
            <h3>Saved <span>{jobs.Saved.length}</span></h3>
          </div>
          <div>
            {jobs.Saved.map((job, index) => (
              <div key={index} className="job-card" style={{marginTop: "1rem"}}>
              <div style={{ backgroundColor: "white", borderRadius: "15px", display:"flex", flexDirection:"column", justifyContent:"space-around", lineHeight:"0px", paddingLeft: "12px"}}>
                <h4>{job.jobTitle}</h4>
                <p>{job.companyName}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section" style={sectionStyle}>
          <div>
            <h3>Applied <span>{jobs.Applied.length}</span></h3>
            
          </div>
          <div>
            {jobs.Applied.map((job, index) => (
              <div key={index} className="job-card" style={{marginTop: "1rem"}}>
              <div style={{ backgroundColor: "white", borderRadius: "15px", display:"flex", flexDirection:"column", justifyContent:"space-around", lineHeight:"0px", paddingLeft: "12px"}}>
                <h4>{job.jobTitle}</h4>
                <p>{job.companyName}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section" style={sectionStyle}>
          <div>
            <h3>Interviewing <span>{jobs.Interviewing.length}</span></h3>
          </div>
          <div>
            {jobs.Interviewing.map((job, index) => (
              <div key={index} className="job-card" style={{marginTop: "1rem"}}>
              <div style={{ backgroundColor: "white", borderRadius: "15px", display:"flex", flexDirection:"column", justifyContent:"space-around", lineHeight:"0px", paddingLeft: "12px"}}>
                <h4>{job.jobTitle}</h4>
                <p>{job.companyName}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section" style={sectionStyle}>
          <div>
            <h3>Offer <span>{jobs.Offer.length}</span></h3>
          </div>
          <div>
            {jobs.Offer.map((job, index) => (
              <div key={index} className="job-card" style={{marginTop: "1rem"}}>
                <div style={{ backgroundColor: "white", borderRadius: "15px", display:"flex", flexDirection:"column", justifyContent:"space-around", lineHeight:"0px", paddingLeft: "12px"}}>
                  <h4 style={{}}>{job.jobTitle}</h4>
                  <p style={{}}>{job.companyName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobTracker;
