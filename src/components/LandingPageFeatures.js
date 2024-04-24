import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import VerticalShadesIcon from '@mui/icons-material/VerticalShades';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import TitleIcon from '@mui/icons-material/Title';
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

const Feature = () => {
  const features = [
    {
      icon: <VerticalShadesIcon />,
      title: "Cover Letter",
      description:
        "Get customized AI Cover letter for each job description highlighting your profile.",
    },
    {
      icon: <TrackChangesIcon />,
      title: "Job Tracker",
      description:
        "Track your job search journey to stay organized and vigilant about your job search.",
    },
    {
      icon: <PersonSearchIcon />,
      title: "Who's Hiring",
      description:
        "Search for who's hiring for your dream job and be able to reach out to them.",
    },
    {
      icon: <PostAddIcon />,
      title: "Post Generator",
      description:
        "Generate LinkedIn posts using AI and share your skills and expertise with your network.",
    },
    {
      icon: <AutoFixHighIcon />,
      title: "Autofill",
      description: "Autofill your job applications with one click.",
    },
    {
      icon: <TitleIcon />,
      title: "Title/Headline Generator",
      description: "Create an intriguing and optimized headline using AI.",
    },
    {
      icon: <OnDeviceTrainingIcon />,
      title: "Contact Tracking",
      description: "Save your job search contacts at one place.",
    },
    {
      icon: <DocumentScannerIcon />,
      title: "Documents",
      description:
        "Keep all your documents in one place which you can access anywhere anytime.",
    },
  ];

  return (
    <Box py={6} sx={{ bgcolor: "#eee" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          FEATURES
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box
                  bgcolor="primary.main"
                  color="primary.contrastText"
                  p={2}
                  borderRadius={4}
                  mb={2}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  align="center"
                  gutterBottom
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" align="center">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Feature;
