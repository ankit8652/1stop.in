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

const PostGenerator = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [additionalContent, setAdditionalContent] = useState("");
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");
  const [coverLetterPreview, setCoverLetterPreview] = useState("");

  const handleGenerateCoverLetter = () => {
    // Logic to generate cover letter preview based on input values
    const preview = `Dear Hiring Manager,

    I am writing to express my interest in the ${jobTitle} position at ${companyName}. ${jobDescription}

    Sincerely,
    [Your Name]`;
    setCoverLetterPreview(preview);
  };

  return (
    <Grid container spacing={4} sx={{ padding: "5px", fontSize: "0.9em" }}>
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
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    marginBottom: "6px",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  AI Post Generator
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className="input-section" style={{ padding: "10px" }}>
            <div className="job-description-section">
              <TextField
                placeholder="Topic"
                sx={{ backgroundColor: "white", borderRadius: "4px" }}
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                placeholder="Description"
                multiline
                sx={{ backgroundColor: "white", borderRadius: "4px" }}
                rows={4}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </div>
            <Accordion sx={{ margin: "10px 0" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="advanced-settings-content"
                id="advanced-settings-header"
              >
                <Typography variant="body2">Advanced Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  fullWidth
                  margin="normal"
                  sx={{ marginBottom: "10px" }}
                >
                  <Typography variant="body2">Additional Content</Typography>
                  <TextField
                    id="additionalContent"
                    multiline
                    rows={4}
                    value={additionalContent}
                    onChange={(e) => setAdditionalContent(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Typography variant="body2">Tone</Typography>
                  <RadioGroup
                    variant="body2"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="Professional"
                      control={<Radio />}
                      label="Professional"
                    />
                    <FormControlLabel
                      value="Casual"
                      control={<Radio />}
                      label="Casual"
                    />
                    <FormControlLabel
                      value="Enthusiastic"
                      control={<Radio />}
                      label="Enthusiastic"
                    />
                    <FormControlLabel
                      value="Informational"
                      control={<Radio />}
                      label="Informational"
                    />
                    <FormControlLabel
                      value="Custom"
                      control={<Radio />}
                      label="Custom"
                    />
                  </RadioGroup>
                  <Typography variant="body2">Length</Typography>
                  <RadioGroup
                    variant="body2"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="Short"
                      control={<Radio />}
                      label="Short"
                    />
                    <FormControlLabel
                      value="Medium"
                      control={<Radio />}
                      label="Medium"
                    />
                    <FormControlLabel
                      value="Long"
                      control={<Radio />}
                      label="Long"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </div>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#1E1E1E" }}
            onClick={handleGenerateCoverLetter}
            fullWidth
            style={{
              backgroundColor: "var(--buttonColor)",
              "&:hover": {
                backgroundColor: "var(--buttonHoverColor)", // Define the color for hover off
              },
            }}
          >
            Generate
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div
          className="right-column"
          style={{
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            border: "1px solid #892CDC",
            borderRadius: "5px",
            paddingLeft: "16px",
          }}
        >
          <Typography variant="body2" sx={{ padding: "40px" }}>
            {coverLetterPreview}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default PostGenerator;
