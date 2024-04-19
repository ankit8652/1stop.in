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
  colors,
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
            This is your hub for career insights, activities, and more. Explore
            your personalized dashboard to stay on top of your professional
            journey.
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
            // bgcolor:"#595B83",
            boxShadow: 24,
            p: 4,
            overflow: "auto", // Add this line
            maxHeight: "80vh", // Add this line to limit the modal height
          }}
        >
          <Typography id="modal-modal-title" variant="p" component="h2">
            Explore AI Tools
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, fontSize: "15px" }}
          >
            Your AI Career Copilot is here. Discover the array of 1stop.in
            features designed to streamline your job search and enhance your
            professional journey!
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
                    Leverage the power of AI to customize your resume for
                    targeted jobs.
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
                    Follow our expert suggestions for your profile and build a
                    star profile.
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
                    Cover Letter
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get customized AI Cover letter for each job description
                    highlighting your profile.
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
                    Track your job search journey to stay organized about your
                    job search.
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
                    Create an intriguing and optimized headline using AI.
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
                    Search for who's hiring for your dream job and be able to
                    reach out to them.
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
