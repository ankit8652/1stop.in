import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Avatar,
  Grid,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GmailIcon from "@mui/icons-material/Mail";

const ContactDetailsDialog = ({ open, onClose, contact }) => {
  const initialName = contact?.fullName
    ? contact.fullName
        .split(" ")
        .map((name) => name.charAt(0))
        .join("")
    : "";

  return (
    <Dialog open={open} onClose={onClose} sx={{ width: "90%" }}>
      <DialogTitle>Contact Details</DialogTitle>
      <DialogContent>
        {contact && (
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  bgcolor: "secondary.main",
                  width: 120,
                  height: 120,
                  margin: "0 auto",
                }}
              >
                {initialName}
              </Avatar>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="h6">{contact.fullName}</Typography>
              <Typography variant="body1">Company: {contact.company}</Typography>
              <Typography variant="body1">
                Location: {contact.location}
              </Typography>
              <Typography variant="body1">
                Relationship: {contact.contactType}
              </Typography>
              <Typography variant="body1">Email: {contact.email}</Typography>
              <Typography variant="body1">
                Phone Number: {contact.phoneNumber}
              </Typography>
              <Box mt={2}>
                {contact.linkedin && (
                  <Box display="flex" alignItems="center" mb={1}>
                    <LinkedInIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      LinkedIn: {contact.linkedin}
                    </Typography>
                  </Box>
                )}
                {contact.twitter && (
                  <Box display="flex" alignItems="center" mb={1}>
                    <TwitterIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      Twitter: {contact.twitter}
                    </Typography>
                  </Box>
                )}
                {contact.github && (
                  <Box display="flex" alignItems="center" mb={1}>
                    <GitHubIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      GitHub: {contact.github}
                    </Typography>
                  </Box>
                )}
                {contact.facebook && (
                  <Box display="flex" alignItems="center" mb={1}>
                    <FacebookIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      Facebook: {contact.facebook}
                    </Typography>
                  </Box>
                )}
                {contact.gmail && (
                  <Box display="flex" alignItems="center">
                    <Typography variant="body1">
                      Gmail: {contact.gmail}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDetailsDialog;
