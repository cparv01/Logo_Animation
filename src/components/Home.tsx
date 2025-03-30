import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  CircularProgress,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SpeedIcon from '@mui/icons-material/Speed';
import PaletteIcon from '@mui/icons-material/Palette';
import SupportIcon from '@mui/icons-material/Support';
// Import videos
import MinimalistVideo from '../assets/images/Minimalist_Logo_Animation.mp4';
import ThreeDVideo from '../assets/images/3D_Animation.mp4';
import DynamicVideo from '../assets/images/Dynamic_Logo_Animation.mp4';
import MorphingImage from '../assets/images/Morphing_Logo.jpg';
import HomePageVideo from '../assets/images/home_page.mp4';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const MotionBox = motion(Box);

const featuredAnimations = [
  {
    id: 1,
    title: 'Minimalist Logo Animation',
    description: 'Clean and elegant animation with subtle movements',
    image: MorphingImage,
    video: MinimalistVideo,
  },
  {
    id: 2,
    title: '3D Logo Animation',
    description: 'Stunning 3D logo reveal with depth and dimension',
    image: MorphingImage,
    video: ThreeDVideo,
  },
  {
    id: 3,
    title: 'Dynamic Logo Animation',
    description: 'Energetic and bold animation with dynamic effects',
    image: MorphingImage,
    video: DynamicVideo,
  },
];

const features: Feature[] = [
  {
    title: 'Fast Delivery',
    description: 'Get your logo animation within 3-7 days with our efficient workflow',
    icon: <SpeedIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
  },
  {
    title: 'Professional Design',
    description: 'Our expert designers create stunning animations that match your brand identity',
    icon: <PaletteIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support to help you with any questions or concerns',
    icon: <SupportIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
  },
];

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: '#000000',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: isMobile ? '2.5rem' : '4rem',
                    fontWeight: 700,
                    mb: 3,
                    color: '#ffffff',
                  }}
                >
                  Transform Your Brand with Stunning Logo Animations
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 4, color: '#ffffff' }}
                >
                  Professional logo animations that bring your brand to life
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#fff',
                      color: '#1a237e',
                      '&:hover': {
                        bgcolor: '#e3f2fd',
                      },
                    }}
                  >
                    View Portfolio
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#fff',
                      color: '#fff',
                      '&:hover': {
                        borderColor: '#e3f2fd',
                        color: '#e3f2fd',
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    display: 'block',
                    margin: '0 auto',
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                  }}
                >
                  <video
                    src={HomePageVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Animations Section */}
      <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#1a237e',
                mb: 6,
                fontSize: isMobile ? '2.5rem' : '3.5rem',
              }}
            >
              Featured Animations
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 8, color: '#546e7a' }}
            >
              Explore our collection of professional logo animations
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {featuredAnimations.map((animation, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      },
                      bgcolor: '#fff',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        paddingTop: '56.25%',
                        overflow: 'hidden',
                        borderRadius: '16px 16px 0 0',
                      }}
                    >
                      <video
                        src={animation.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'rgba(0,0,0,0.3)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out',
                          '&:hover': {
                            opacity: 1,
                          },
                        }}
                      >
                        <PlayArrowIcon sx={{ fontSize: 60, color: '#fff' }} />
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600, color: '#1a237e' }}
                      >
                        {animation.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ color: '#546e7a' }}
                      >
                        {animation.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#1a237e',
                mb: 6,
                fontSize: isMobile ? '2.5rem' : '3.5rem',
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 8, color: '#546e7a' }}
            >
              Professional logo animation services tailored to your needs
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderRadius: 4,
                      bgcolor: '#f8f9fa',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        margin: '0 auto 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        bgcolor: '#e3f2fd',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 600, color: '#1a237e' }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ color: '#546e7a' }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          bgcolor: '#1a237e',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 4,
                fontSize: isMobile ? '2.5rem' : '3.5rem',
              }}
            >
              Ready to Transform Your Brand?
            </Typography>
            <Typography
              variant="h5"
              align="center"
              paragraph
              sx={{ mb: 6, color: '#e3f2fd' }}
            >
              Get started with your logo animation project today
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#fff',
                  color: '#1a237e',
                  '&:hover': {
                    bgcolor: '#e3f2fd',
                  },
                }}
              >
                View Plans
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  '&:hover': {
                    borderColor: '#e3f2fd',
                    color: '#e3f2fd',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 