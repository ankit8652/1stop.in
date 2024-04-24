import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import resumeImage from "../images/resume_image.jpg"; // Import your office image

const AboutUs = () => {
  const whyChooseUs = [
    "User-Freindly Interface",
    "Customizable Templates",
    "Expert Tips and Guidance",
    "Secure and Confidential",
  ];

  return (
    <Box py={6}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={resumeImage}
              alt="Office"
              style={{ maxWidth: "100%", height: "auto"}}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              ABOUT US
            </Typography>
            <Typography variant="body1" paragraph>
              At 1Stop.in, we understand the importance of crafting a
              compelling resume that highlights your skills, experiences, and
              achievements. Our mission is to empower individuals like you to
              create professional resumes that stand out in today's competitive
              job market.
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
              Why Choose Us?
            </Typography>
            <List>
              {whyChooseUs.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
