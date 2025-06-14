import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Font Awesome icons from react-icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'CEO, Tech Solutions',
    avatar: 'https://picsum.photos/id/1005/150/150', // Random image from Lorem Picsum
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Marketing Manager, Creative Co.',
    avatar: 'https://picsum.photos/id/1011/150/150', // Random image from Lorem Picsum
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    designation: 'Founder, Innovate Labs',
    avatar: 'https://picsum.photos/id/1012/150/150', // Random image from Lorem Picsum
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    designation: 'Lead Designer, Artistry Hub',
    avatar: 'https://picsum.photos/id/1015/150/150', // Random image from Lorem Picsum
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 5,
    name: 'Chris Lee',
    designation: 'Developer, CodeWorks',
    avatar: 'https://picsum.photos/id/1025/150/150', // Random image from Lorem Picsum
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 6, // Added one more for variety
    name: 'Sarah Brown',
    designation: 'Product Analyst, DataDriven Inc.',
    avatar: 'https://picsum.photos/id/1027/150/150', // Random image from Lorem Picsum
    text: 'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const slidesPerView = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;
  const spaceBetween = isSmallScreen ? 30 : 20;

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#f8f8f8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background abstract shapes - REMINDER: Provide actual paths for these images or remove if not used */}
      <Box
        sx={{
          position: 'absolute',
          top: '50px',
          right: '-100px',
          width: '300px',
          height: '300px',
          // Placeholder for your abstract shape image. Example: 'url(/images/abstract-shape.png)'
          // If you don't have this, consider removing or using a simple SVG/CSS shape.
          // backgroundImage: `url(${process.env.PUBLIC_URL}/path/to/your/abstract-shape.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          opacity: 0.1,
          transform: 'rotate(20deg)',
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          // Placeholder for your abstract shape image. Example: 'url(/images/another-abstract-shape.png)'
          // backgroundImage: `url(${process.env.PUBLIC_URL}/path/to/your/another-abstract-shape.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          opacity: 0.1,
          transform: 'rotate(-30deg)',
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 'bold',
            marginBottom: theme.spacing(6),
            color: 'text.primary',
            textAlign: 'left',
            [theme.breakpoints.down('md')]: {
              fontSize: '2.5rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
            },
          }}
        >
          Testimonials
        </Typography>

        <Box sx={{ position: 'relative', pb: 8 }}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
                600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            sx={{
                '.swiper-slide': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                },
                '.swiper-pagination-bullet': {
                    backgroundColor: 'grey !important',
                    opacity: 0.5,
                },
                '.swiper-pagination-bullet-active': {
                    backgroundColor: '#00bcd4 !important',
                    opacity: 1,
                },
            }}
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Card
                  sx={{
                    width: '100%',
                    borderRadius: theme.shape.borderRadius * 1.5,
                    boxShadow: theme.shadows[6],
                    backgroundColor: 'white',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: { xs: '350px', sm: '320px', md: '300px' },
                    height: 'auto',
                  }}
                >
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                    />
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {testimonial.text}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center', mt: 'auto' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {testimonial.designation}
                    </Typography>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <IconButton
              className="swiper-button-prev-custom"
              sx={{
                width: 48,
                height: 48,
                backgroundColor: theme.palette.grey[300],
                color: theme.palette.grey[700],
                '&:hover': {
                  backgroundColor: theme.palette.warning.main,
                  color: 'white',
                },
                transition: 'background-color 0.3s, color 0.3s',
                borderRadius: '50%',
                boxShadow: theme.shadows[2],
                mr: 2,
              }}
            >
              <FaArrowLeft size={24} />
            </IconButton>
            <IconButton
              className="swiper-button-next-custom"
              sx={{
                width: 48,
                height: 48,
                backgroundColor: theme.palette.warning.main,
                color: 'white',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                  color: theme.palette.grey[700],
                },
                transition: 'background-color 0.3s, color 0.3s',
                borderRadius: '50%',
                boxShadow: theme.shadows[2],
              }}
            >
              <FaArrowRight size={24} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;