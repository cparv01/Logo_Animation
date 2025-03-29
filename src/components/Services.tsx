import React from 'react';
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
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MotionBox = motion(Box);

const services = [
  {
    title: 'Basic Animation',
    price: '₹4,999',
    description: 'Perfect for small businesses and startups',
    features: [
      'Simple logo reveal animation',
      'Basic color transitions',
      'Standard resolution (1080p)',
      '2 revision rounds',
      'Delivery in 3 business days',
      'MP4 format delivery',
      'WhatsApp support',
      'Basic social media variations',
    ],
    popular: false,
  },
  {
    title: 'Professional Animation',
    price: '₹9,999',
    description: 'Ideal for growing businesses and brands',
    features: [
      'Complex logo animation',
      'Advanced motion effects',
      'High resolution (4K)',
      'Unlimited revisions',
      'Delivery in 5 business days',
      'Multiple format delivery',
      'Custom sound effects',
      'Social media variations',
      'Priority WhatsApp support',
      'Source file delivery',
      'Brand guidelines integration',
    ],
    popular: true,
  },
  {
    title: 'Premium Animation',
    price: '₹19,999',
    description: 'For established brands and enterprises',
    features: [
      'Custom-designed animation',
      '3D effects and transitions',
      'Ultra-high resolution (8K)',
      'Priority revisions',
      'Delivery in 7 business days',
      'All format deliveries',
      'Custom sound design',
      'Complete social media kit',
      'Brand guidelines integration',
      'Technical consultation',
      '24/7 priority support',
      'Commercial usage rights',
      'Source files with project',
      'One year of free updates',
    ],
    popular: false,
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Choose the perfect logo animation package for your brand
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: service.popular
                      ? `2px solid ${theme.palette.primary.main}`
                      : 'none',
                    '&:hover': {
                      boxShadow: theme.shadows[8],
                      transform: 'translateY(-8px)',
                      transition: 'all 0.3s ease-in-out',
                    },
                  }}
                >
                  {service.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                      }}
                    >
                      Most Popular
                    </Box>
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="h3"
                      color="primary"
                      sx={{ mb: 2, fontWeight: 700 }}
                    >
                      {service.price}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature) => (
                        <ListItem key={feature} sx={{ py: 1 }}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      fullWidth
                      variant={service.popular ? 'contained' : 'outlined'}
                      size="large"
                      sx={{
                        borderRadius: '8px',
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                      }}
                    >
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Need a custom solution?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Contact us for a personalized quote based on your specific requirements
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: '8px',
              py: 1.5,
              textTransform: 'none',
              fontSize: '1.1rem',
            }}
          >
            Contact for Custom Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 