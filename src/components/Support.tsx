import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import HelpIcon from '@mui/icons-material/Help';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const MotionBox = motion(Box);

const supportOptions = [
  {
    title: 'Email Support',
    description: 'Get in touch with our team via email for detailed assistance with your logo animation project.',
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    action: 'Email Us',
    link: 'mailto:support@logoanimation.com',
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our support team for immediate assistance and project updates.',
    icon: <PhoneIcon sx={{ fontSize: 40 }} />,
    action: 'Call Us',
    link: 'tel:+1234567890',
  },
  {
    title: 'Live Chat',
    description: 'Connect with our support team in real-time for quick answers to your questions.',
    icon: <ChatIcon sx={{ fontSize: 40 }} />,
    action: 'Start Chat',
    link: '#',
  },
];

const resources = [
  {
    title: 'File Upload Guide',
    description: 'Learn how to properly prepare and upload your logo files for animation.',
    icon: <FileUploadIcon sx={{ fontSize: 40 }} />,
    link: '#',
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step tutorials on using your animated logo across different platforms.',
    icon: <VideoLibraryIcon sx={{ fontSize: 40 }} />,
    link: '#',
  },
  {
    title: 'FAQ',
    description: 'Find answers to frequently asked questions about our logo animation services.',
    icon: <HelpIcon sx={{ fontSize: 40 }} />,
    link: '/faq',
  },
];

const Support = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Support Center
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            We're here to help you with your logo animation needs
          </Typography>

          {/* Support Options */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {supportOptions.map((option, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {option.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {option.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                      {option.description}
                    </Typography>
                    <Button
                      variant="contained"
                      href={option.link}
                      sx={{
                        backgroundColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Resources */}
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Helpful Resources
          </Typography>
          <Grid container spacing={4}>
            {resources.map((resource, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {resource.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {resource.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                      {resource.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      href={resource.link}
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.dark',
                          backgroundColor: 'rgba(25, 118, 210, 0.04)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Support; 