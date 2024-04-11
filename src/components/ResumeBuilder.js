import React, { useState } from "react";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadIcon from "@mui/icons-material/Upload";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import UploadResume from "./UploadResume"

const ResumeBuilder = () => {
  const [openFirstModal, setOpenFirstModal] = React.useState(false);
  const [openSecondModal, setOpenSecondModal] = React.useState(false);
  const [openThirdModal, setOpenThirdModal] = React.useState(false);
  // eslint-disable-next-line
  const [selectedFeature, setSelectedFeature] = React.useState("");

  // First Modal Function
  const handleFirstModalOpen = () => setOpenFirstModal(true);
  const handleFirstModalClose = () => setOpenFirstModal(false);

  // Second Modal Function
  const handleSecondModalOpen = (feature) => {
    setSelectedFeature(feature);
    setOpenSecondModal(true);
    setOpenFirstModal(false);
  };
  const handleSecondModalClose = () => setOpenSecondModal(false);

  // Third Modal Function
  const handleThirdModalOpen = (feature) => {
    setSelectedFeature(feature);
    setOpenThirdModal(true);
    setOpenFirstModal(false);
  };
  const handleThirdModalClose = () => setOpenThirdModal(false);

  const handlePrevious = () => {
    if (openFirstModal === false && openSecondModal === true) {
      setOpenFirstModal(true);
      setOpenSecondModal(false);
    } else if (openFirstModal === false && openThirdModal === true) {
      setOpenFirstModal(true);
      setOpenThirdModal(false);
    }
  };

  const downloadExtension = () => {
    // navigate to extension page
  };


  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [documents, setDocuments] = useState([]);
  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  }
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  const handleSaveDocument = (document) => {
    setDocuments([...documents, document]);
  };


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
            <Button
              variant="contained"
              color="primary"
              onClick={handleFirstModalOpen}
            >
              Create New Resume
            </Button>
            <Modal open={openFirstModal} onClose={handleFirstModalClose}>
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
                      onClick={() => handleSecondModalOpen("Feature 1")}
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
                      onClick={() => downloadExtension}
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
                      onClick={() => handleThirdModalOpen("Feature 3")}
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

            <Modal open={openSecondModal} onClose={handleSecondModalClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 840,
                  height: 480,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: "8px",
                  overflowY: "auto",
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
                      Select a professionally designed template for your resume
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
                      onClick={() => handleSecondModalOpen("Feature 3")}
                      className="upload-resume"
                      style={{
                        backgroundColor: "#F2F4F7",
                        padding: "5% 3%",
                        borderRadius: "18px",
                        width: "25%",
                        height: "90%",
                      }}
                    >
                      <Typography variant="h6">Sample Resume</Typography>
                      <Typography>sample resume will come over here</Typography>
                    </div>
                  </div>
                </div>
                {/* 
          <Typography variant="h5">Feature Details</Typography>
          <Typography variant="body1">Details of {selectedFeature}</Typography> */}
                <Button onClick={handlePrevious} sx={{ mt: -2 }}>
                  Previous
                </Button>
              </Box>
            </Modal>

            <Modal open={openThirdModal} onClose={handleThirdModalClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 850,
                  height: 350,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: "8px",
                  overflowY: "auto",
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
                      By Resume
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Resume from your documents
                    </Typography>
                    <Button
                      sx={{
                        mt: 2,
                        border: "1px solid #d1d5dc",
                        color: "#354055",
                      }}
                      onClick={handleDialogOpen}
                    >
                      <UploadIcon />
                      Upload New Resume
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      gap: "3%",
                      marginTop: "2%",
                    }}
                  >
                    <TextField fullWidth label="Search" id="fullWidth" size="small" />
                  </div>
                </div>
                <Button onClick={handlePrevious} sx={{ mt: -2 }}>
                  Previous
                </Button>
              </Box>
            </Modal>

            <UploadResume 
            open={isDialogOpen}
            onClose={handleDialogClose}
            onSave={handleSaveDocument}
            />
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
            <img src="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.5%2015V28.5H7.47V7.5H20.97V4.5H7.5C5.85%204.5%204.5%205.85%204.5%207.5V28.5C4.5%2030.15%205.85%2031.5%207.5%2031.5H28.5C30.15%2031.5%2031.5%2030.15%2031.5%2028.5V15H28.5ZM24.09%2011.91L25.5%2015L26.91%2011.91L30%2010.5L26.91%209.09L25.5%206L24.09%209.09L21%2010.5L24.09%2011.91ZM18%2012L16.125%2016.125L12%2018L16.125%2019.875L18%2024L19.875%2019.875L24%2018L19.875%2016.125L18%2012Z'%20fill='%23508DE8'/%3e%3c/svg%3e"  alt=""/>
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
