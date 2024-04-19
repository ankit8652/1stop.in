import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import DocumentIcon from "@mui/icons-material/Description";
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // Add this line
import { blue } from "@mui/material/colors";
import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import DocumentsDialog from "./DocumentsDialog";
import DocumentItem from "./DocumentItem";

const Documents = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [category, setCategory] = useState("resource");
  const [documents, setDocuments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleSaveDocument = (document) => {
    setDocuments([...documents, document]);
  };

  // Filtering documents based on the search query and selected category
  const filteredDocuments = documents.filter(
    (document) =>
      document.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category === "resource" || document.category === category)
  );

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
        <Button
          variant="contained"
          onClick={handleDialogOpen}
          endIcon={<CloudUploadIcon />}
          sx={{
            bgcolor: "var(--buttonColor)",
            "&:hover": {
              bgcolor: "var(--buttonHoverColor)",
            },
          }}
        >
          Upload Documents
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
        />
        <Box sx={{ minWidth: "30%", margin: "10px" }}>
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
      </div>

      {/* No Documents Added */}
      {filteredDocuments.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredDocuments.map((document, index) => (
            <DocumentItem key={index} document={document} />
          ))}
        </div>
      ) : (
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
          <Button
            variant="contained"
            onClick={handleDialogOpen}
            endIcon={<CloudUploadIcon />}
            sx={{
              bgcolor: "var(--buttonColor)",
              "&:hover": {
                bgcolor: "var(--buttonHoverColor)",
              },
            }}
          >
            Upload Documents
          </Button>
        </div>
      )}

      {/* Render the dialog */}
      <DocumentsDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        onSave={handleSaveDocument}
      />
    </>
  );
};

export default Documents;
