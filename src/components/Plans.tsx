import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Dialog,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import UserSubmissionForm from './UserSubmissionForm';

const plans = [
  {
    title: 'Basic Animation',
    price: '₹4,999',
    description: 'Perfect for small businesses and startups',
    features: [
      'Simple logo animation',
      '2 revision rounds',
      '3-7 days delivery',
      'MP4 format',
      'Social media variations',
      'WhatsApp support',
    ],
    color: '#FF6B6B', // Coral Red
  },
  {
    title: 'Professional Animation',
    price: '₹9,999',
    description: 'Ideal for growing businesses and brands',
    features: [
      'Complex logo animation',
      '5 revision rounds',
      '5-10 days delivery',
      'MP4 + Source files',
      'Social media variations',
      'Priority WhatsApp support',
      'Commercial usage rights',
    ],
    color: '#4ECDC4', // Turquoise
  },
  {
    title: 'Premium Animation',
    price: '₹19,999',
    description: 'Best for large enterprises and premium brands',
    features: [
      'Advanced logo animation',
      'Unlimited revisions',
      '7-14 days delivery',
      'MP4 + Source files',
      'Complete social media kit',
      '24/7 priority support',
      'Commercial usage rights',
      'One year free updates',
    ],
    color: '#45B7D1', // Sky Blue
  },
];

const Plans: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#000000' }}>
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
              color: '#ffffff',
              mb: 6,
              fontSize: isMobile ? '2.5rem' : '3.5rem',
            }}
          >
            Choose Your Plan
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{ mb: 8, color: '#e3f2fd' }}
          >
            Select the perfect plan for your logo animation needs
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {plans.map((plan, index) => (
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
                    boxShadow: '0 8px 24px rgba(255,255,255,0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                    border: `2px solid ${plan.color}`,
                    bgcolor: '#1a1a1a',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{ fontWeight: 700, color: '#ffffff' }}
                    >
                      {plan.title}
                    </Typography>
                    <Typography
                      variant="h3"
                      align="center"
                      gutterBottom
                      sx={{ fontWeight: 700, color: plan.color, mb: 2 }}
                    >
                      {plan.price}
                      <Typography
                        component="span"
                        variant="h6"
                        sx={{ color: '#e3f2fd', ml: 1 }}
                      >
                        /month
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      paragraph
                      sx={{ color: '#e3f2fd', mb: 4 }}
                    >
                      {plan.description}
                    </Typography>
                    <List>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ color: '#ffffff' }}>
                          <ListItemIcon>
                            <CheckCircleIcon sx={{ color: plan.color }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions sx={{ p: 4, pt: 0 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={handleOpenForm}
                      sx={{
                        bgcolor: plan.color,
                        color: '#ffffff',
                        py: 1.5,
                        '&:hover': {
                          bgcolor: `${plan.color}dd`,
                        },
                      }}
                    >
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 4,
            bgcolor: '#1a1a1a',
            boxShadow: '0 8px 24px rgba(255,255,255,0.1)',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, color: '#ffffff', mb: 2 }}
          >
            Need a Custom Quote?
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{ mb: 4, color: '#e3f2fd' }}
          >
            Contact us for a personalized quote based on your specific requirements
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleOpenForm}
              sx={{
                bgcolor: '#1a237e',
                color: '#ffffff',
                '&:hover': {
                  bgcolor: '#0d47a1',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>

      <Dialog
        open={openForm}
        onClose={handleCloseForm}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: '#f8f9fa',
          },
        }}
      >
        <UserSubmissionForm />
      </Dialog>
    </Box>
  );
};

export default Plans; 