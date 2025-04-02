import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid,
  Paper,
  Alert,
  CircularProgress,
  SelectChangeEvent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  logo_branding_style: 'Modern' | 'Vintage' | 'Other';
  animation_style: 'Basic' | 'Professional' | 'Premium';
  project_deadline: string;
  custom_requirements: string;
  budget_range: 'Low' | 'Medium' | 'High';
  preferred_contact_method: 'Email' | 'Phone' | 'WhatsApp';
  file_upload: string;
  agree_to_terms: boolean;
  promo_code: string;
  newsletter_subscription: boolean;
}

const UserSubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    logo_branding_style: 'Modern',
    animation_style: 'Basic',
    project_deadline: '',
    custom_requirements: '',
    budget_range: 'Medium',
    preferred_contact_method: 'Email',
    file_upload: '',
    agree_to_terms: false,
    promo_code: '',
    newsletter_subscription: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form. Please try again later.');
      }

      const data = await response.json();
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        logo_branding_style: 'Modern',
        animation_style: 'Basic',
        project_deadline: '',
        custom_requirements: '',
        budget_range: 'Medium',
        preferred_contact_method: 'Email',
        file_upload: '',
        agree_to_terms: false,
        promo_code: '',
        newsletter_subscription: false,
      });
    } catch (err) {
      if (err instanceof Error && err.message.includes('Failed to fetch')) {
        setError('Unable to connect to the server. Please check if the server is running and try again.');
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred while submitting the form. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #e8eaf6 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(26, 35, 126, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Get Started with Your Logo Animation
          </Typography>

          {success && (
            <Alert 
              severity="success" 
              sx={{ 
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)',
                backgroundColor: '#e8f5e9',
                color: '#2e7d32',
              }}
            >
              Thank you for your submission! We'll contact you soon.
            </Alert>
          )}

          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(244, 67, 54, 0.2)',
                backgroundColor: '#ffebee',
                color: '#c62828',
              }}
            >
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                      '& input': {
                        color: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1a237e',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                      '& input': {
                        color: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1a237e',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                      '& input': {
                        color: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1a237e',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                      '& input': {
                        color: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1a237e',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel sx={{ 
                    color: '#1a237e',
                    '&.Mui-focused': {
                      color: '#1a237e',
                    },
                  }}>
                    Branding Style
                  </InputLabel>
                  <Select
                    name="logo_branding_style"
                    value={formData.logo_branding_style}
                    onChange={handleSelectChange}
                    label="Branding Style"
                    sx={{
                      backgroundColor: '#ffffff',
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1a237e',
                      },
                      '& .MuiSelect-select': {
                        color: '#1a237e',
                      },
                    }}
                  >
                    <MenuItem value="Modern">Modern</MenuItem>
                    <MenuItem value="Vintage">Vintage</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel sx={{ 
                    color: '#1a237e',
                    '&.Mui-focused': {
                      color: '#1a237e',
                    },
                  }}>
                    Animation Style
                  </InputLabel>
                  <Select
                    name="animation_style"
                    value={formData.animation_style}
                    onChange={handleSelectChange}
                    label="Animation Style"
                    sx={{
                      backgroundColor: '#ffffff',
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1a237e',
                      },
                      '& .MuiSelect-select': {
                        color: '#1a237e',
                      },
                    }}
                  >
                    <MenuItem value="Basic">Basic</MenuItem>
                    <MenuItem value="Professional">Professional</MenuItem>
                    <MenuItem value="Premium">Premium</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  type="date"
                  label="Project Deadline"
                  name="project_deadline"
                  value={formData.project_deadline}
                  onChange={handleInputChange}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                      '& input': {
                        color: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1a237e',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Custom Requirements"
                  name="custom_requirements"
                  value={formData.custom_requirements}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                      '& textarea': {
                        color: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1a237e',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel sx={{ 
                    color: '#1a237e',
                    '&.Mui-focused': {
                      color: '#1a237e',
                    },
                  }}>
                    Budget Range
                  </InputLabel>
                  <Select
                    name="budget_range"
                    value={formData.budget_range}
                    onChange={handleSelectChange}
                    label="Budget Range"
                    sx={{
                      backgroundColor: '#ffffff',
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1a237e',
                      },
                      '& .MuiSelect-select': {
                        color: '#1a237e',
                      },
                    }}
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel sx={{ 
                    color: '#1a237e',
                    '&.Mui-focused': {
                      color: '#1a237e',
                    },
                  }}>
                    Preferred Contact Method
                  </InputLabel>
                  <Select
                    name="preferred_contact_method"
                    value={formData.preferred_contact_method}
                    onChange={handleSelectChange}
                    label="Preferred Contact Method"
                    sx={{
                      backgroundColor: '#ffffff',
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1a237e',
                      },
                      '& .MuiSelect-select': {
                        color: '#1a237e',
                      },
                    }}
                  >
                    <MenuItem value="Email">Email</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                    <MenuItem value="WhatsApp">WhatsApp</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Promo Code (Optional)"
                  name="promo_code"
                  value={formData.promo_code}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#ffffff',
                      '&:hover fieldset': {
                        borderColor: '#1a237e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1a237e',
                      },
                      '& input': {
                        color: '#1a237e',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1a237e',
                      '&.Mui-focused': {
                        color: '#1a237e',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      required
                      name="agree_to_terms"
                      checked={formData.agree_to_terms}
                      onChange={handleInputChange}
                      sx={{
                        color: '#1a237e',
                        '&.Mui-checked': {
                          color: '#1a237e',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(26, 35, 126, 0.08)',
                        },
                      }}
                    />
                  }
                  label="I agree to the terms and conditions"
                  sx={{ 
                    color: '#1a237e',
                    '& .MuiTypography-root': {
                      color: '#1a237e',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="newsletter_subscription"
                      checked={formData.newsletter_subscription}
                      onChange={handleInputChange}
                      sx={{
                        color: '#1a237e',
                        '&.Mui-checked': {
                          color: '#1a237e',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(26, 35, 126, 0.08)',
                        },
                      }}
                    />
                  }
                  label="Subscribe to our newsletter"
                  sx={{ 
                    color: '#1a237e',
                    '& .MuiTypography-root': {
                      color: '#1a237e',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={loading}
                  sx={{
                    background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                    color: 'white',
                    py: 2,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(26, 35, 126, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)',
                      boxShadow: '0 6px 16px rgba(26, 35, 126, 0.4)',
                    },
                    '&:disabled': {
                      background: 'linear-gradient(45deg, #9fa8da 30%, #b3e5fc 90%)',
                    },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default UserSubmissionForm; 