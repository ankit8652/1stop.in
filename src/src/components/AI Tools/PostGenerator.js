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
    <Grid container spacing={4} sx={{ padding: "5px", fontSize: "0.2rem" }}>
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
                  AI Post Generator
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className="input-section" style={{ padding: "10px" }}>
            <div className="job-description-section">
              <TextField
                label="Topic"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Description"
                multiline
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
                <Typography variant="p" sx={{ fontSize: "16px" }}>
                  Advanced Settings
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  fullWidth
                  margin="normal"
                  sx={{ marginBottom: "10px" }}
                >
                  <Typography variant="p" sx={{ fontSize: "16px" }}>
                    Additional Content
                  </Typography>
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
                  <Typography variant="subtitle1" sx={{ fontSize: "15px" }}>
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
                  <Typography variant="p" sx={{ fontSize: "15px" }}>
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

export default PostGenerator;
