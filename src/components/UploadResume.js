// DocumentsDialog.js
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Select from "@mui/material/Select";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: 500, // Adjust width as needed
  },
}));

const DocumentsDialog = ({ open, onClose, onSave }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Set the title to the name of the uploaded file
    if (uploadedFile) {
      setTitle(uploadedFile.name);
    }
  };

  const handleSave = () => {
    const document = {
      file: file,
      title: title,
      category: category,
      description: description,
    };
    onSave(document);
    onClose();
  };

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        sx={{ ml: 2, p: 1, fontSize: "20px" }}
        id="customized-dialog-title"
      >
        Add Document
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        <input
          accept=".pdf,.doc,.docx"
          id="contained-button-file"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <Typography variant="body2" sx={{marginTop:"2"}}>Enter Document Url</Typography>
        <TextField
          label="Enter Url here"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 4 }}
          size="small"
        />

        <Typography variant="body2">Select File</Typography>
        <label htmlFor="contained-button-file">
          <Button
            variant="outlined"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Upload File
          </Button>
        </label>

        <Typography variant="body2" sx={{marginTop: 4}}>Title</Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 4, }}
          size="small"
        />
        <Typography variant="body2">Document Category</Typography>
        <Select
          label="Category"
          variant="standard"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ marginBottom: 4 }}
          inputProps={{
            style: { color: "#000000" }, // Adjust the color as needed
          }}
        >
          <MenuItem value="resume">Resume</MenuItem>
          <MenuItem value="portfolio">Portfolio</MenuItem>
          <MenuItem value="cover-letter">Cover Letter</MenuItem>
          <MenuItem value="recommendation">Recommendation</MenuItem>
          <MenuItem value="article">Article</MenuItem>
          <MenuItem value="resource">Resource</MenuItem>
          <MenuItem value="work-history">Work History</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>

        <Typography variant="body2">Description</Typography>
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: 4 }}
        />
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          autoFocus
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={handleSave}
        >
          Save Document
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default DocumentsDialog;
