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
          padding: "40px",
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
                    fontWeight: "700",
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
                <Typography variant="h6">Advanced Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  fullWidth
                  margin="normal"
                  sx={{ marginBottom: "10px" }}
                >
                  <Typography variant="h6">Additional Content</Typography>
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
                  <Typography variant="h6">Tone</Typography>
                  <RadioGroup
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
                  <Typography variant="h6">Length</Typography>
                  <RadioGroup
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
          {/* <Typography variant="h6">Cover Letter Preview</Typography> */}
          <Typography variant="body1">{coverLetterPreview}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default PostGenerator;
