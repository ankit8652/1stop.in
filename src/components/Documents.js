import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DocumentIcon from "@mui/icons-material/Description";
import { blue } from "@mui/material/colors";
import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

const Documents = (props) => {
  const [category, setCategory] = React.useState("category");
  const [type, setType] = React.useState("type");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      {/* Section 1 */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <DocumentIcon
          sx={{ fontSize: "30px", color: blue[500], marginRight: "10px" }}
        />
        <h2 style={{ flexGrow: 1 }}>Documents</h2>
        <Button variant="contained" endIcon={<CloudUploadIcon />}>
          Upload Documents
        </Button>
      </div>

      {/* Section 2 */}
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
        }}
      >
        <Button variant="outlined" style={{ margin: "5px" }}>
          All Documents
        </Button>
        <Button variant="outlined" style={{ margin: "5px" }}>
          Careerflow Documents
        </Button>
        <Button variant="outlined" style={{ margin: "5px" }}>
          Imported Documents
        </Button>
      </div>

      {/* Section 3 */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <TextField
          label="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ minWidth: 120, margin: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="category-simple-select-label">Category</InputLabel>
            <Select
              labelId="category-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              onChange={handleChangeCategory}
            >
              <MenuItem value="resource">All</MenuItem>
              <MenuItem value="resume">Resume</MenuItem>
              <MenuItem value="cover-letter">Cover Letter</MenuItem>
              <MenuItem value="portfolio">Portfolio</MenuItem>
              <MenuItem value="recommendation">Recommendation</MenuItem>
              <MenuItem value="article">Article</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, margin: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="type-simple-select-label">Type</InputLabel>
            <Select
              labelId="type-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="type"
              onChange={handleChangeType}
            >
              <MenuItem value="article">All</MenuItem>
              <MenuItem value="resume">pdf</MenuItem>
              <MenuItem value="cover-letter">docx</MenuItem>
              <MenuItem value="portfolio">url</MenuItem>
              <MenuItem value="recommendation">other</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* No Documents Added */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <DocumentIcon
          sx={{ fontSize: "100px", color: blue[500], marginBottom: "10px" }}
        />
        <h1>No Documents Added</h1>
        <p>
          You have not created any documents yet. You can upload your resume
          versions, cover letters, and more, and link them to jobs you are
          tracking!
        </p>
        <Button variant="contained" endIcon={<CloudUploadIcon />}>
          Upload Documents
        </Button>
      </div>
    </>
  );
};

export default Documents;
