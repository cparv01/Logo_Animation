import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
  Button,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const MotionBox = motion(Box);

const Contact = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'savanjaviya1@gmail.com',
      link: 'mailto:savanjaviya1@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: '+91 96019 49394',
      link: 'tel:+919601949394',
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      content: '123 Animation Street, Design City, DC 12345',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
    { icon: <InstagramIcon />, url: 'https://instagram.com' },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Let's discuss how we can bring your logo to life
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'background.paper',
                  borderRadius: '16px',
                  width: 'fit-content',
                  minWidth: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>
                  Reach out to us through any of these channels
                </Typography>

                {contactInfo.map((info) => (
                  <Box
                    key={info.title}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3,
                      width: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        mr: 2,
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" component="div">
                        {info.title}
                      </Typography>
                      <Button
                        href={info.link}
                        sx={{
                          textTransform: 'none',
                          p: 0,
                          minWidth: 'auto',
                          color: 'text.primary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {info.content}
                      </Button>
                    </Box>
                  </Box>
                ))}

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social) => (
                      <IconButton
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'text.primary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 