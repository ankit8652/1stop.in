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

const CoverLetter = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [profileResume, setProfileResume] = useState("");
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
    <Grid container spacing={4} sx={{ padding: "5px" }}>
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
                {/* <DescriptionOutlinedIcon
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "1.2rem",
                    color: "#2196F3",
                    marginRight: 8,
                    backgroundColor: "#E1EDFF",
                    borderRadius: "50%",
                    padding: 5,
                    alignItems: "center",
                  }}
                /> */}
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    marginBottom: "6px",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  AI Cover Letter Generator
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className="input-section" style={{ padding: "10px" }}>
            <div className="job-description-section">
              <Typography variant="p">Job Description</Typography>
              <TextField
                label="Job Description"
                multiline
                rows={4}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </div>
            <Typography variant="p">Job Title</Typography>
            <TextField
              label="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Typography variant="p">Company Name</Typography>
            <TextField
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <FormControl fullWidth margin="normal">
              <Typography variant="p">Your Profile</Typography>
              <Button
                variant="outlined"
                component="label"
                htmlFor="profileResumeInput"
                style={{ marginTop: "5px", marginBottom: "5px" }}
              >
                {profileResume ? profileResume : "Upload your resume"}
                <input
                  id="profileResumeInput"
                  type="file"
                  accept=".doc, .docx, .pdf"
                  style={{ display: "none" }}
                  onChange={(e) => setProfileResume(e.target.files[0].name)}
                />
              </Button>
              <Typography variant="subtitle1" sx={{ fontSize: "12px" }}>
                File names cannot contain spaces or underscores and should be in
                either .doc, .docx, or .pdf.
              </Typography>
            </FormControl>
            <Accordion sx={{ margin: "10px 0" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="advanced-settings-content"
                id="advanced-settings-header"
              >
                <Typography variant="p">Advanced Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  fullWidth
                  margin="normal"
                  sx={{ marginBottom: "10px" }}
                >
                  <Typography variant="p">Additional Content</Typography>
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
                  <Typography variant="subtitle1" sx={{ fontSize: "16px" }}>
                    Tone
                  </Typography>
                  <RadioGroup
                    variant="p"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="Professional"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Professional
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Casual"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Casual
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Enthusiastic"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Enthusiastic
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Informational"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Informational
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Custom"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Custom
                        </Typography>
                      }
                    />
                  </RadioGroup>
                  <Typography variant="subtitle1" sx={{ fontSize: "16px" }}>
                    Length
                  </Typography>
                  <RadioGroup
                    variant="p"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      variant="p"
                      value="Short"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Short
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Medium"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Medium
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Long"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Long
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateCoverLetter}
            fullWidth
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
            border: "2px solid #2196F3", // Add blue border to the left side
            borderRadius: "5px",
            paddingLeft: "16px", // Add padding to separate content from the border
          }}
        >
          {/* <Typography variant="p">Cover Letter Preview</Typography> */}
          <Typography variant="body1">{coverLetterPreview}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default CoverLetter;
