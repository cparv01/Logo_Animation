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
} from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// Import videos
import MinimalistVideo from '../assets/images/Minimalist_Logo_Animation.mp4';
import ThreeDVideo from '../assets/images/3D_Animation.mp4';
import DynamicVideo from '../assets/images/Dynamic_Logo_Animation.mp4';
import MorphingImage from '../assets/images/Morphing_Logo.jpg';

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

const Home = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video loading error:', e);
    setError('Failed to load video');
    setIsLoading(false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" gutterBottom>
                  Transform Your Brand with
                  <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                    {' '}
                    Logo Animation
                  </Box>
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Create stunning, professional logo animations that captivate your audience and elevate your brand identity.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/portfolio"
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  View Our Work
                </Button>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Placeholder for hero animation */}
                <Box
                  sx={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 60, opacity: 0.5 }} />
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Animations Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Featured Animations
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Explore our collection of professional logo animations
        </Typography>
        <Grid container spacing={4}>
          {featuredAnimations.map((animation) => (
            <Grid item xs={12} md={4} key={animation.id}>
              <MotionBox
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ position: 'relative', height: 200 }}>
                    {isLoading && (
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
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <CircularProgress />
                      </Box>
                    )}
                    {error && (
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
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <Typography color="error">{error}</Typography>
                      </Box>
                    )}
                    <Box
                      component="video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      onLoadedData={() => setIsLoading(false)}
                      onError={handleVideoError}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src={animation.video}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {animation.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {animation.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 