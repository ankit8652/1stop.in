import React from "react";
import "../styles/JobTracker.css";

const JobForm = ({
  isOpen,
  toggleForm,
  handleSubmit,
  jobTitle,
  setJobTitle,
  companyName,
  setCompanyName,
  jobUrl,
  setJobUrl,
  section,
  setSection,
  description,
  setDescription,
  tags,
  setTags,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="job-form"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "var(--backgroundColor)",
            padding: "35px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            zIndex: 999,
            marginTop: "5px",
            maxHeight: "90%",
            overflowY: "auto",
            webkitScrollbar: {
              width: "5px",
            },
          }}
        >
          <h2
            style={{
              fontFamily: "lexend Deca, sans-serif",
              color: "#fff",
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
                required // Adding the required attribute
                style={{
                  fontFamily: "lexend Deca, sans-serif",
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
                required // Adding the required attribute
                style={{
                  fontFamily: "lexend Deca, sans-serif",
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
                  fontFamily: "lexend Deca, sans-serif",
                  color: "#152C5B",
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="section">* Section</label>
              <select
                id="section"
                value={section}
                required
                onChange={(e) => setSection(e.target.value)}
                style={{
                  fontFamily: "lexend Deca, sans-serif",
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
                  fontFamily: "lexend Deca, sans-serif",
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
                  fontFamily: "lexend Deca, sans-serif",
                  color: "#152C5B",
                }}
              />
            </div>
            <div
              className="form-note"
              style={{
                fontFamily: "lexend Deca, sans-serif",
                color: "#fff",
              }}
            >
              Did you know? You can save jobs directly from your Chrome
              Extension and have all data synced back in a single click?{" "}
            </div>
            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={toggleForm}
                style={{
                  fontFamily: "lexend Deca, sans-serif",
                  color: "#152C5B",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="submit-btn"
                style={{
                  fontFamily: "lexend Deca, sans-serif",
                  color: "var(--backgroundColor)",
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "var(--backgroundColor)",
                    color: "#fff",
                  },
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default JobForm;
