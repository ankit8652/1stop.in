import React, { useState } from "react";
import { Typography, TextField, Button, Select, MenuItem } from "@material-ui/core";
import JobForm from "./JobForm";
import "./JobForm.css";

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

    toggleForm()
  };

  return (
    <>
      <div style={{ margin: "0px", padding: "0px", marginTop: "-0.6%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "lexend, sans-serif", color: "#152C5B" }}>
          <Typography variant="h5"><strong>My 2024 Job Search</strong></Typography>
          <div style={{ display: "flex", padding: "0.2%", gap: "20px" }}>
            <div>
              <TextField placeholder="Search" style={{ width: "200px" }} />
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={toggleForm}>Add Job</Button>
              <JobForm
                isOpen={isOpen}
                toggleForm={toggleForm}
                handleSubmit={handleSubmit}
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
                companyName={companyName}
                setCompanyName={setCompanyName}
                jobUrl={jobUrl}
                setJobUrl={setJobUrl}
                section={section}
                setSection={setSection}
                description={description}
                setDescription={setDescription}
                tags={tags}
                setTags={setTags}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", height: "100vh", overflowY: "overlay", marginTop: "1.6%" }}>
        {Object.keys(jobs).map((jobSection) => (
          <div key={jobSection} style={{ borderRadius: "5px", width: "24.5%", height: "100%", backgroundColor: "#e1edff", padding: "1rem" }}>
            <Typography variant="h6">{jobSection} <span>{jobs[jobSection].length}</span></Typography>
            {jobs[jobSection].map((job, index) => (
              <div key={index} className="job-card" style={{ marginTop: "1rem" }}>
                <div style={{ backgroundColor: "white", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", lineHeight: "0px", padding: "0px 0px 3px 40px" }}>
                  <Typography variant="h6">{job.jobTitle}</Typography>
                  <Typography>{job.companyName}</Typography>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default JobTracker;
