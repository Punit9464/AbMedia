import React from 'react';
import { Box, Typography, Grid, Container, useTheme, useMediaQuery } from '@mui/material';
import { MdOutlineAccessTime, MdOutlineMonetizationOn, MdOutlinePeople, MdOutlineMenuBook } from 'react-icons/md';

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const advantages = [
    {
      icon: <MdOutlineAccessTime size={isSmallScreen ? 50 : 60} color="#00bcd4" />,
      title: 'Save Time',
      description: 'No More Switching For Packages Or Plans.',
    },
    {
      icon: <MdOutlineMonetizationOn size={isSmallScreen ? 50 : 60} color="#00bcd4" />,
      title: 'Save Money',
      description: 'Compare, Negotiate, And Choose The Best.',
    },
    {
      icon: <MdOutlinePeople size={isSmallScreen ? 50 : 60} color="#00bcd4" />,
      title: 'Trusted Network',
      description: 'A Trusted Network Of 7000+ Travel Agents',
    },
    {
      icon: <MdOutlineMenuBook size={isSmallScreen ? 50 : 60} color="#00bcd4" />,
      title: 'Multiple Options',
      description: 'Itineraries & Travel Tips From Trusted Agents',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#66DAB7', // A light teal/blue color similar to the image
        padding: theme.spacing(8, 0),
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: 'white', // Changed to white for better contrast as per image
            fontWeight: 'bold',
            marginBottom: theme.spacing(2),
            [theme.breakpoints.down('md')]: {
              fontSize: '2.5rem',
            },
          }}
        >
          Our Advantages
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'white', // Changed to white as per image
            marginBottom: theme.spacing(6),
            [theme.breakpoints.down('md')]: {
              fontSize: '1rem',
            },
          }}
        >
          You can rely on our experience and the quality of services we provide.
          <br />
          Here are other reasons to book tours at Treat Holidays
        </Typography>

        <Grid container spacing={isSmallScreen ? 4 : 8} justifyContent="center">
          {advantages.map((advantage, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: theme.spacing(3),
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    width: isSmallScreen ? 120 : 150,
                    height: isSmallScreen ? 120 : 150,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: theme.spacing(3),
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: subtle shadow for depth
                  }}
                >
                  {advantage.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: theme.spacing(1.5),
                    [theme.breakpoints.down('md')]: {
                      fontSize: '1.2rem',
                    },
                  }}
                >
                  {advantage.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    [theme.breakpoints.down('md')]: {
                      fontSize: '0.9rem',
                    },
                  }}
                >
                  {advantage.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;