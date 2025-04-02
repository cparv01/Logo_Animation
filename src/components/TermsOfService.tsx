import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const sections = [
  {
    title: '1. Services',
    content: `We provide logo animation services, including but not limited to:
    • Creating animated versions of existing logos
    • Designing new animated logos
    • Providing multiple animation variations
    • Delivering files in various formats
    • Offering revision rounds as specified in the project agreement`,
  },
  {
    title: '2. Project Agreement',
    content: `Each project requires a written agreement that includes:
    • Project scope and deliverables
    • Timeline and milestones
    • Number of revision rounds
    • Payment terms and schedule
    • File formats to be delivered`,
  },
  {
    title: '3. Client Responsibilities',
    content: `As our client, you agree to:
    • Provide necessary logo files in appropriate formats
    • Provide timely feedback during review periods
    • Make payments according to the agreed schedule
    • Provide clear direction and requirements
    • Respect project timelines and deadlines`,
  },
  {
    title: '4. Intellectual Property',
    content: `Upon full payment:
    • You receive rights to use the final animation
    • We retain rights to showcase the work in our portfolio
    • You may not resell or redistribute the source files
    • We maintain rights to the animation techniques and processes used`,
  },
  {
    title: '5. Payment Terms',
    content: `Our standard payment terms include:
    • 50% deposit to begin work
    • 50% upon project completion
    • All payments are non-refundable
    • Additional revisions beyond agreed rounds may incur extra charges`,
  },
  {
    title: '6. Project Timeline',
    content: `Timelines are based on:
    • Project complexity
    • Client feedback response time
    • Number of revision rounds
    • Current workload and availability`,
  },
  {
    title: '7. Cancellation Policy',
    content: `In case of project cancellation:
    • Deposit is non-refundable
    • Work completed up to cancellation point remains our property
    • Final payment is due for any work completed beyond deposit`,
  },
  {
    title: '8. Confidentiality',
    content: `We agree to:
    • Keep project details confidential
    • Not share source files or techniques
    • Protect client information
    • Only showcase work with permission`,
  },
];

const TermsOfService = () => {
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
            Terms of Service
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            Please read these terms carefully before engaging our services
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              backgroundColor: 'background.paper',
              borderRadius: 2,
            }}
          >
            {sections.map((section, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, color: 'primary.main' }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ whiteSpace: 'pre-line' }}
                >
                  {section.content}
                </Typography>
              </Box>
            ))}
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default TermsOfService; 