import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LOGO_SAVA_AI from '../assets/images/LOGO_SAVA_AI.png';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Plans', path: '/plans' },
    { text: 'FAQ', path: '/faq' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: '#000000',
        boxShadow: 'none',
        borderBottom: 'none'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: '80px !important',
            py: 1
          }}
        >
          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleMobileMenu}
                sx={{ color: '#ffffff' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={mobileMenuAnchor}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    bgcolor: '#000000',
                    color: '#ffffff',
                    '& .MuiMenuItem-root': {
                      color: '#ffffff',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    },
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleClose}
                    sx={{
                      color: '#ffffff',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: '#ffffff',
                      mx: 1,
                      py: 1,
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    bgcolor: '#ffffff',
                    color: '#000000',
                    py: 1,
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 