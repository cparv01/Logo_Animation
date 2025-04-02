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
    title: '1. Information We Collect',
    content: `We collect information that you provide directly to us, including:
    • Contact information (name, email, phone)
    • Logo files and design assets
    • Project requirements and specifications
    • Communication history
    • Payment information`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the collected information for:
    • Providing logo animation services
    • Processing payments
    • Communicating about your project
    • Improving our services
    • Sending service updates
    • Marketing (with your consent)`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell or rent your information. We may share your information with:
    • Service providers who assist in our operations
    • Payment processors
    • Legal authorities when required
    • Business partners with your consent`,
  },
  {
    title: '4. Data Security',
    content: `We implement security measures to protect your information:
    • Secure file storage
    • Encrypted communications
    • Regular security assessments
    • Access controls
    • Secure payment processing`,
  },
  {
    title: '5. Your Rights',
    content: `You have the right to:
    • Access your personal information
    • Correct inaccurate data
    • Request data deletion
    • Opt-out of marketing communications
    • Export your data`,
  },
  {
    title: '6. Cookies and Tracking',
    content: `We use cookies and similar technologies to:
    • Improve website functionality
    • Analyze site usage
    • Remember your preferences
    • Provide personalized content`,
  },
  {
    title: '7. Children\'s Privacy',
    content: `Our services are not intended for children under 13. We do not knowingly collect or maintain information from children under 13 years of age.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.`,
  },
];

const PrivacyPolicy = () => {
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
            Privacy Policy
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            Last updated: {new Date().toLocaleDateString()}
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

export default PrivacyPolicy; 