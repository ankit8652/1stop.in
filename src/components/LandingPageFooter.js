import React from 'react'
import { Box, Container, Typography } from '@mui/material';

const LandingPageFooter = () => {
    const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" bgcolor="primary.main" py={3}>
      <Container maxWidth="md">
        <Typography variant="body2" color="primary.contrastText" align="center">
          &copy; {currentYear} 1Stop.in Landing Page.
        </Typography>
      </Container>
    </Box>
  )
}

export default LandingPageFooter