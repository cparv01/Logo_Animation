import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const faqItems = [
  {
    question: 'What is logo animation?',
    answer: 'Logo animation is the process of creating dynamic, moving versions of your static logo. It brings your brand to life through motion, making it more engaging and memorable for your audience. This can include effects like morphing, fading, scaling, or any other motion that enhances your brand identity.',
  },
  {
    question: 'How long does it take to create a logo animation?',
    answer: 'The timeline varies depending on the complexity of your animation. Simple animations might take 1-2 weeks, while more complex ones could take 3-4 weeks. This includes concept development, initial drafts, revisions, and final delivery in various formats.',
  },
  {
    question: 'What formats do you deliver?',
    answer: 'We deliver your logo animation in multiple formats including MP4, MOV, GIF, and After Effects project files. This ensures compatibility across different platforms and use cases, from social media to professional presentations.',
  },
  {
    question: 'Can you animate my existing logo?',
    answer: 'Yes, we can animate your existing logo! We work with various file formats including AI, EPS, PSD, and SVG. Our team will analyze your logo and suggest the best animation approach that maintains your brand identity while adding engaging motion.',
  },
  {
    question: 'What makes a good logo animation?',
    answer: 'A good logo animation should be simple yet memorable, reflect your brand personality, and work well across different platforms. It should maintain readability, be short enough to hold attention, and effectively communicate your brand message.',
  },
  {
    question: `Do you offer revisions?`,
    answer: `Yes, we offer multiple revision rounds to ensure you're completely satisfied with your logo animation. Our process includes initial concepts, feedback incorporation, and final refinements to achieve the perfect result.`,
  },
  {
    question: `How do I use my animated logo?`,
    answer: `Animated logos can be used across various platforms including websites, social media, presentations, video content, and digital marketing materials. We provide guidance on best practices for implementation and usage across different mediums.`,
  },
  {
    question: `What's your pricing structure?`,
    answer: `Our pricing varies based on the complexity of the animation, number of revisions, and delivery formats. We offer different packages to suit various needs and budgets. Contact us for a detailed quote based on your specific requirements.`,
  },
];

const FAQ = () => {
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
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            Find answers to common questions about our logo animation services
          </Typography>

          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                backgroundColor: 'background.paper',
                borderRadius: '8px !important',
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default FAQ; 