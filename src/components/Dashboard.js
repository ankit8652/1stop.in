import React, { useState, useCallback } from "react";
import Checklist from "./DashboardChecklist";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  ThemeProvider,
  createTheme,
  Button,
  Modal,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import aiResumeBuilderImage from "../images/aiResumeBuilder.a1134912b7df1342a289.png";
import linkedinOptimizationImage from "../images/linkedinOptimization.d3b5e62759d7c877b06b.svg";
import coverLetterImage from "../images/coverLetter.fb0f13e24dbe25453993.svg";
import jobTrackerImage from "../images/jobTracker.8d304056b7293dea28cf.svg";
import headlineGeneratorImage from "../images/headlineGenerator.8b3302a543486e03ebbb.svg";
import whosHiringImage from "../images/whosHiring.df0a49b2a6e2ec10a6c4.svg";

// Define a custom theme with Lexend and sans-serif fonts
const theme = createTheme({
  typography: {
    fontFamily: [
      "Lexend, sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleMenuItemClick = useCallback(
    (menuItem) => {
      navigate(menuItem); // Navigate to the specified path
      handleModalClose(); // Close the modal after navigation
    },
    [navigate, handleModalClose]
  );

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ width: "86%" }}>
        <Box
          sx={{ borderBottom: "1px solid rgb(216, 215, 215)", padding: "0px" }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontSize: "24px" }}>
            👋 Welcome to Careerflow!
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: "14px" }}>
            Welcome to your personalized career hub! Discover the tools and
            resources to accelerate your professional journey.
            <Link
              variant="contained"
              style={{
                color: "lightblue",
                marginLeft: "5px",
                textDecoration: "underline",
              }}
              onClick={handleModalOpen}
            >
              Explore Features
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "var(--divColor)",
            border: "1px solid #a8c6f4",
            borderRadius: "10px",
            padding: "2%",
            marginTop: "2%",
          }}
        >
          <Checklist />
        </Box>
      </Container>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflow: "auto",
            maxHeight: "80vh",
          }}
        >
          <Typography id="modal-modal-title" variant="p" component="h2">
            Discover AI-powered Tools
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, fontSize: "15px" }}
          >
            Explore our suite of AI-driven tools designed to supercharge your
            career growth and job search!
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Modal Content */}
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={aiResumeBuilderImage}
                  alt="AI Resume Builder"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    AI Resume Builder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Use AI to create customized resumes tailored to your dream
                    jobs.
                  </Typography>
                  <Button
                    onClick={() => handleMenuItemClick("/resume-builder")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={linkedinOptimizationImage}
                  alt="LinkedIn Optimization"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    LinkedIn Optimization
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Enhance your LinkedIn profile with expert recommendations
                    and stand out to recruiters.
                  </Typography>
                  <Button
                    onClick={() =>
                      handleMenuItemClick("/linkedin-about-section-generator")
                    }
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={coverLetterImage}
                  alt="Cover Letter"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Cover Letter Generator
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Generate tailored cover letters for each job application
                    using AI.
                  </Typography>
                  <Button onClick={() => handleMenuItemClick("/cover-letter")}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={jobTrackerImage}
                  alt="Job Tracker"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Job Tracker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Keep track of your job applications and manage your job
                    search more effectively.
                  </Typography>
                  <Button onClick={() => handleMenuItemClick("/job-tracker")}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={headlineGeneratorImage}
                  alt="Headline Generator"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Headline Generator
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create compelling LinkedIn headlines with AI-powered
                    assistance.
                  </Typography>
                  <Button
                    onClick={() =>
                      handleMenuItemClick("/linkedin-headline-generator")
                    }
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={whosHiringImage}
                  alt="Who's Hiring"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Who's Hiring
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discover companies hiring for your dream job and connect
                    with them directly.
                  </Typography>
                  <Button
                    onClick={() => handleMenuItemClick("/find-recruiters")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Dashboard;
