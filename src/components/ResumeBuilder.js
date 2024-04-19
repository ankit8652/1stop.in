import React, { useState } from "react";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import UploadResume from "./UploadResume";
import PostAddIcon from "@mui/icons-material/PostAdd";

const ResumeBuilder = () => {
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [openThirdModal, setOpenThirdModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [documents, setDocuments] = useState([]);

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

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleSaveDocument = (document) => {
    setDocuments([...documents, document]);
    setIsDialogOpen(false);
  };

  return (
    <div className="main-container" style={{ padding: 10 }}>
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
                placeholder="Search"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                bgcolor: "var(--buttonColor)",
                "&:hover": {
                  bgcolor: "var(--buttonHoverColor)",
                },
              }}
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
                  width: "70%",
                  bgcolor: "#ffffff", // Light theme background color
                  boxShadow: 24,
                  borderRadius: "10px",
                  // Removed bgColor property
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    width: "100%",
                    height: "100%",
                    color: "#000000", // Light theme text color
                  }}
                >
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Create New Resume
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" sx={{ mt: 2 }}>
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
                        backgroundColor: "#f0f0f0", // Light theme div color
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
                        backgroundColor: "#f0f0f0", // Light theme div color
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
                        backgroundColor: "#f0f0f0", // Light theme div color
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
                  width: "80%",
                  boxShadow: 24,
                  borderRadius: "8px",
                  overflowY: "auto",
                  bgcolor: "#ffffff", // Light theme background color
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#ffffff", // Light theme background color
                    padding: "2%",
                    color: "#000000", // Light theme text color
                  }}
                >
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
                    <Typography variant="h6" sx={{ mt: 2 }}>
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
                        backgroundColor: "#F2F4F7", // Light theme div color
                        padding: "5% 3%",
                        borderRadius: "18px",
                        width: "25%",
                        height: "90%",
                        backgroundColor: "#f0f0f0", // Light theme div color
                      }}
                    >
                      <Typography variant="h6">Sample Resume</Typography>
                      <Typography>sample resume will come over here</Typography>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handlePrevious}
                  sx={{
                    mt: -12,
                    ml: 2,
                  }}
                >
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
                  width: "80%",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 5,
                  borderRadius: "10px",
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
                    <TextField
                      fullWidth
                      label="Search"
                      id="fullWidth"
                      size="small"
                    />
                  </div>
                </div>
                <Button onClick={handlePrevious} sx={{ mt: 2 }}>
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
        <div>
          {documents.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                lineHeight: "5px",
              }}
            >
              <PostAddIcon sx={{ width: "60px", height: "60px" }} />
              <h2>No Resumes Yet</h2>
              <p>
                Get started on crafting your first resume to kickstart your
                career journey.
              </p>
            </div>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Resume Name</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {documents.map((document, index) => (
                    <TableRow key={index}>
                      <TableCell>{document.name}</TableCell>
                      <TableCell>Edit / Delete</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
