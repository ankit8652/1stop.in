import React from "react";
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
import InputAdornment from "@mui/material/InputAdornment";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GmailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ open, onClose, onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleSave = (e) => {
    e.preventDefault();
    const contact = {
      fullName:
        e.target.elements.firstName.value +
        " " +
        e.target.elements.lastName.value,
      company: e.target.elements.company.value,
      jobTitle: e.target.elements.jobTitle.value,
      location: e.target.elements.location.value,
      email: e.target.elements.email.value,
      phoneNumber: e.target.elements.phoneNumber.value,
      linkedIn: e.target.elements.linkedIn.value,
      twitter: e.target.elements.twitter.value,
      github: e.target.elements.github.value,
      facebook: e.target.elements.facebook.value,
      gmail: e.target.elements.gmail.value,
      contactType: e.target.elements.contactType.value,
    };
    onSave(contact);
  };

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <form onSubmit={handleSave}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create Contact
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
          <h3>Select Type</h3>
          <Select
            label="Type"
            variant="standard"
            fullWidth
            required
            name="contactType"
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="recruiter">Recruiter</MenuItem>
            <MenuItem value="candidate">Candidate</MenuItem>
            <MenuItem value="colleague">Colleague</MenuItem>
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="friend">Friend</MenuItem>
            <MenuItem value="hiring-manager">Hiring Manager</MenuItem>
            <MenuItem value="mentor">Mentor</MenuItem>
            <MenuItem value="customer">Customer</MenuItem>
            <MenuItem value="collaborator">Collaborator</MenuItem>
            <MenuItem value="interviewer">Interviewer</MenuItem>
            <MenuItem value="industry-expert">Industry Expert</MenuItem>
          </Select>
          <h3>Contact Details</h3>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            required
            name="firstName"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            required
            name="lastName"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Company"
            variant="outlined"
            fullWidth
            name="company"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Job Title"
            variant="outlined"
            fullWidth
            name="jobTitle"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            name="location"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            name="phoneNumber"
            sx={{ marginBottom: 2 }}
          />
          <Divider sx={{ my: 2 }} />
          <h3>Social Media</h3>
          <TextField
            label="LinkedIn"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkedInIcon />
                </InputAdornment>
              ),
            }}
            name="linkedIn"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Twitter"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon />
                </InputAdornment>
              ),
            }}
            name="twitter"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="GitHub"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GitHubIcon />
                </InputAdornment>
              ),
            }}
            name="github"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Facebook"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon />
                </InputAdornment>
              ),
            }}
            name="facebook"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Gmail"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GmailIcon />
                </InputAdornment>
              ),
            }}
            name="gmail"
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            autoFocus
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            Save Contact
          </Button>
        </DialogActions>
      </form>
    </BootstrapDialog>
  );
}
