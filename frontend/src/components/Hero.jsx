import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { FaMapMarkerAlt, FaUsers, FaStar } from 'react-icons/fa';

function Hero() {
  const stats = [
    { icon: FaMapMarkerAlt, number: '150+', label: 'Destinations' },
    { icon: FaUsers, number: '50k+', label: 'Happy Travelers' },
    { icon: FaStar, number: '4.9/5', label: 'Average Rating' },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Discover Your Next Adventure
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontWeight: 300,
                lineHeight: 1.6,
                maxWidth: 600,
              }}
            >
              Choose from our curated experiences, customized for every kind of traveler.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(255, 152, 0, 0.3)',
                }}
              >
                BOOK NOW
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;