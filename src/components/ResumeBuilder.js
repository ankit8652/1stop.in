import React, { useState } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PhotoFilterIcon from "@mui/icons-material/PhotoFilter";
import AddIcon from "@mui/icons-material/Add";

const ResumeBuilder = () => {
  const [open, setOpen] = useState(false);
  const [startFromScratch, setStartFromScratch] = useState(false);
  const [linkedin, setLinkedIn] = useState(false);
  const [uploadResume, setUploadResume] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleStartFromScratchOpen = () => setStartFromScratch(true);
  const handleStartFromScratchClose = () => setStartFromScratch(false);
  const handleLinkedinOpen = () => setLinkedIn(true);
  const handleinkedinClose = () => setLinkedIn(false);
  const handleUploadResumeOpen = () => setUploadResume(false);
  const handleUploadResumeClose = () => setUploadResume(true);

  return (
    <div className="main-container" style={{ padding: 10, height: "144%" }}>
      <div className="header-container" style={{ marginBottom: "2%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "2%",
            }}
          >
            <h2>My Resumes</h2>
            <p>
              Create/Edit, analyze, and organize your resumes for diverse
              opportunities.
            </p>
            <div style={{ paddingTop: "3%" }}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ width: "74%" }}
                placeholder="Search for resumes"
              />
            </div>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              <AddIcon sx={{ marginRight: "5px" }} />
              Create New Resume
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 900,
                  height: 450,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: "8px",
                }}
              >
                <div style={{ width: "100%", height: "100%" }}>
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{ borderBottom: "1px solid #e5e7eb" }}
                    >
                      Create New Resume
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      How do you want to get started?
                    </Typography>
                    <Typography>
                      Browse styles to match your profile and aspirations. Your
                      pick forms the base of your polished resume
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      gap: "3%",
                      marginTop: "2%",
                    }}
                  >
                    <div
                      onClick={handleStartFromScratchOpen}
                      className="start-from-scratch"
                      style={{
                        backgroundColor: "#F2F4F7",
                        padding: "5% 3%",
                        borderRadius: "18px",
                        width: "45%",
                      }}
                    >
                      <AddToPhotosIcon
                        sx={{ fontSize: 50, color: "#508de8" }}
                      />
                      <Typography variant="h6">Start From Scratch</Typography>
                      <Typography>
                        Build your resume from the ground up using our intuitive
                        editor.
                      </Typography>
                    </div>
                    <div
                      onClick={handleLinkedinOpen}
                      className="linkedin"
                      style={{
                        backgroundColor: "#F2F4F7",
                        padding: "5% 3%",
                        borderRadius: "18px",
                        width: "45%",
                      }}
                    >
                      <LinkedInIcon sx={{ fontSize: 50, color: "#508de8" }} />
                      <Typography variant="h6">LinkedIn</Typography>
                      <Typography>
                        Import your existing LinkedIn profile to kickstart your
                        resume.
                      </Typography>
                    </div>
                    <div
                      onClick={handleUploadResumeOpen}
                      className="upload-resume"
                      style={{
                        backgroundColor: "#F2F4F7",
                        padding: "5% 3%",
                        borderRadius: "18px",
                        width: "45%",
                      }}
                    >
                      <UploadFileIcon sx={{ fontSize: 50, color: "#508de8" }} />
                      <Typography variant="h6">Upload Resume</Typography>
                      <Typography>
                        Upload an existing resume file to streamline the
                        process.
                      </Typography>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <div
        className="bottom-container"
        style={{
          border: "1px solid #e5e7eb",
          height: "80%",
          borderRadius: "5px",
        }}
      >
        <div style={{ borderBottom: "1px solid #e5e7eb", paddingLeft: "2%" }}>
          <h3>All Resumes</h3>
        </div>
        <div style={{}}>
          <div
            style={{
              transform: "translate(0%, 100%)",
              textAlign: "center",
              lineHeight: "15%",
            }}
          >
            <PhotoFilterIcon sx={{ fontSize: 50, color: "#508de8" }} />
            <h2>No Resumes Yet</h2>
            <p>
              Get started on crafting your first resume to kickstart your career
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
