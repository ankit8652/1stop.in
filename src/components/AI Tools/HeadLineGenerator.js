import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

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
          padding: "40px",
        }}
      >
        <div
          className="left-column"
          style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}
        >
          <div className="header">
            <Grid container alignItems="center" sx={{ margin: "10px" }}>
              <Grid item></Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    marginBottom: "6px",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                  }}
                >
                  Headline Generator
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className="input-section">
            <Typography variant="h6">Target Job Title*</Typography>
            <TextField
              label="Target Job Title"
              value={targetJobTitle}
              onChange={(e) => setTargetJobTitle(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Typography variant="h6">Keywords to Include</Typography>
            <TextField
              label="Keywords to Include"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <FormControl fullWidth margin="normal">
              <Typography variant="h6">Resume Upload</Typography>
              <Button
                variant="outlined"
                component="label"
                htmlFor="resumeInput"
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
            <FormControl fullWidth margin="normal">
              <Typography variant="h6">Use LinkedIn Profile</Typography>
              <FormControlLabel
                control={
                  <Radio
                    checked={useLinkedin}
                    onChange={(e) => setUseLinkedin(e.target.checked)}
                  />
                }
                label="Yes"
              />
            </FormControl>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateHeadline}
            fullWidth
          >
            Generate Headline
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
