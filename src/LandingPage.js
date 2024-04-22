import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
// import resumeImage from '../images/resume_image.jpg';
import Navbar from './components/Navbar'

const theme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
    text: {
      primary: '#fff',
    },
    primary: {
      main: '#52057B',
    },
  },
});

const LandingPage = () => {
  return (
      <ThemeProvider theme={theme}>
        <Navbar />
      <div style={{backgroundColor: "#000"}}>
        <div style={{ padding: '64px 0', textAlign: 'center' }}>
          <Container maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom sx={{color:"#fff"}}>
              Build Your Perfect Resume
            </Typography>
            <Typography variant="h5" color="textPrimary" paragraph>
              Stand out with a professional resume. Create yours in minutes.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </Container>
        </div>

        <Container maxWidth="md">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: 345, margin: 'auto', marginBottom: 4, color: "#000" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Easy to Use
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Create a professional resume with our user-friendly interface.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: 345, margin: 'auto', marginBottom: 4, color: "#000" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Customizable Templates
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Choose from a variety of templates to suit your style.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: 345, margin: 'auto', marginBottom: 4, color: "#000" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Download & Share
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Download your resume in PDF format or share it online.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="md">
          {/* <img src={resumeImage} alt="Resume" style={{ width: '100%', marginTop: '50px', marginBottom: '50px' }} /> */}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default LandingPage;
