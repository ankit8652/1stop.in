import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  Grid,
} from "@mui/material";

const HeadlineGenerator = () => {
  const [targetJobTitle, setTargetJobTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [profile, setProfile] = useState("");
  const [resume, setResume] = useState("");
  const [useLinkedin, setUseLinkedin] = useState(false);

  const handleGenerateHeadline = () => {
    // Logic to generate headline preview based on input values
    // Implement your logic here
  };

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={6}
        style={{
          padding: "30px",
        }}
      >
        <div
          className="left-column"
          style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}
        >
          <div className="header">
            <Grid container alignItems="center">
              <Grid item></Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    marginBottom: "6px",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  AI About Generator
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className="input-section" style={{ padding: "10px" }}>
            <Typography variant="p">Target Job Title*</Typography>
            <TextField
              label="Target Job Title"
              value={targetJobTitle}
              onChange={(e) => setTargetJobTitle(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Typography variant="p">Keywords to Include</Typography>
            <TextField
              label="Keywords to Include"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <FormControl fullWidth margin="normal">
              <Typography variant="p">Resume Upload</Typography>
              <Button
                variant="outlined"
                component="label"
                htmlFor="resumeInput"
                sx={{ marginTop: "5px", marginBottom: "5px" }}
              >
                {resume ? resume : "Upload your resume"}
                <input
                  id="resumeInput"
                  type="file"
                  accept=".doc, .docx, .pdf"
                  style={{ display: "none" }}
                  onChange={(e) => setResume(e.target.files[0].name)}
                />
              </Button>
            </FormControl>
            <FormControl
              fullWidth
              margin="normal"
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            ></FormControl>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateHeadline}
            fullWidth
          >
            Generate
          </Button>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          border: "2px solid #2196F3", // Add blue border to the left side
          borderRadius: "5px",
          paddingLeft: "16px", // Add padding to separate content from the border
        }}
      >
        {/* Preview section */}
      </Grid>
    </Grid>
  );
};

export default HeadlineGenerator;
