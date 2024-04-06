import React from "react";
import Checklist from "./DashboardChecklist";
import {
  Typography,
  Container,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";

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
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "14px", marginBottom: "2%" }}
          >
            Not sure where to start? Explore Features
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#e1edff",
            border: "1px solid #a8c6f4",
            borderRadius: "10px",
            padding: "2%",
            marginTop: "2%",
          }}
        >
          <Checklist />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
