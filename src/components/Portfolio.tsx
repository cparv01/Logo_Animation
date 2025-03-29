import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
// Import videos
import MinimalistVideo from '../assets/images/Minimalist_Logo_Animation.mp4';
import ThreeDVideo from '../assets/images/3D_Animation.mp4';
import DynamicVideo from '../assets/images/Dynamic_Logo_Animation.mp4';
import NikeVideo from '../assets/images/The_3D_Nike_design.mp4';
import MorphingImage from '../assets/images/Morphing_Logo.jpg';

const MotionBox = motion(Box);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const portfolioItems = [
  {
    id: 1,
    title: 'Minimalist Logo Animation',
    description: 'Clean and elegant animation with subtle movements',
    category: 'minimalist',
    image: MorphingImage,
    video: MinimalistVideo,
  },
  {
    id: 2,
    title: '3D Logo Animation',
    description: 'Stunning 3D logo reveal with depth and dimension',
    category: '3d',
    image: MorphingImage,
    video: ThreeDVideo,
  },
  {
    id: 3,
    title: 'Dynamic Logo Animation',
    description: 'Energetic and bold animation with dynamic effects',
    category: 'dynamic',
    image: MorphingImage,
    video: DynamicVideo,
  },
  {
    id: 4,
    title: 'Nike 3D Design',
    description: 'Professional 3D logo animation with brand identity',
    category: '3d',
    image: MorphingImage,
    video: NikeVideo,
  },
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Minimalist', value: 'minimalist' },
  { label: '3D', value: '3d' },
  { label: 'Dynamic', value: 'dynamic' },
];

const Portfolio = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({});
  const [errorStates, setErrorStates] = useState<{ [key: number]: string | null }>({});

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleCloseDialog = () => {
    setSelectedVideo(null);
  };

  const handleVideoLoad = (id: number) => {
    setLoadingStates(prev => ({ ...prev, [id]: false }));
  };

  const handleVideoError = (id: number, e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video loading error:', e);
    setErrorStates(prev => ({ ...prev, [id]: 'Failed to load video' }));
    setLoadingStates(prev => ({ ...prev, [id]: false }));
  };

  const filteredItems = selectedTab === 0
    ? portfolioItems
    : portfolioItems.filter(item => item.category === categories[selectedTab].value);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Our Portfolio
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Explore our collection of professional logo animations
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="portfolio categories"
          >
            {categories.map((category, index) => (
              <Tab
                key={category.value}
                label={category.label}
                id={`portfolio-tab-${index}`}
                aria-controls={`portfolio-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        {categories.map((category, index) => (
          <TabPanel key={category.value} value={selectedTab} index={index}>
            <Grid container spacing={4}>
              {filteredItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
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
                        cursor: 'pointer',
                        '&:hover': {
                          boxShadow: theme.shadows[8],
                        },
                      }}
                      onClick={() => handleVideoClick(item.video)}
                    >
                      <Box sx={{ position: 'relative', height: 200 }}>
                        {loadingStates[item.id] !== false && (
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
                        {errorStates[item.id] && (
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
                            <Typography color="error">{errorStates[item.id]}</Typography>
                          </Box>
                        )}
                        <Box
                          component="video"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          onLoadedData={() => handleVideoLoad(item.id)}
                          onError={(e) => handleVideoError(item.id, e)}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          src={item.video}
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
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            '&:hover': {
                              opacity: 1,
                            },
                          }}
                        >
                          <PlayArrowIcon sx={{ fontSize: 60, color: 'white' }} />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        ))}

        <Dialog
          open={!!selectedVideo}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton
              onClick={handleCloseDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="video"
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              src={selectedVideo || ''}
            />
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Portfolio; 