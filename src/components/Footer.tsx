import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialLinks = [
  { icon: <FacebookIcon />, url: 'https://facebook.com' },
  { icon: <TwitterIcon />, url: 'https://twitter.com' },
  { icon: <InstagramIcon />, url: 'https://instagram.com' },
  { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Logo Animation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Transform your brand with professional logo animations that captivate your audience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company
            </Typography>
            <Box>
              <Link
                component={RouterLink}
                to="/portfolio"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                Portfolio
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                Services
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Support
            </Typography>
            <Box>
              <Link
                component={RouterLink}
                to="/faq"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                FAQ
              </Link>
              <Link
                component={RouterLink}
                to="/support"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                Support Center
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                Get Help
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Box>
              <Link
                component={RouterLink}
                to="/terms"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                Terms of Service
              </Link>
              <Link
                component={RouterLink}
                to="/privacy"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                Privacy Policy
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="text.secondary"
                sx={{ display: 'block', mb: 1 }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Logo Animation. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.url}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 