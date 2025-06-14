import { useRef } from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, Chip, Button, Rating, IconButton, useTheme, useMediaQuery, CircularProgress, Alert } from '@mui/material';
import { FaClock, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useQuery } from '@tanstack/react-query'; // Import useQuery
import { fetchDestinations } from '../api/destinations.js'; // Import your new API function

function Destinations() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const swiperRef = useRef(null);

  // Use TanStack Query to fetch destinations
  const { data: destinations, isLoading, isError, error } = useQuery({
    queryKey: ['popularDestinations'], 
    queryFn: fetchDestinations,      
    staleTime: 5 * 60 * 1000,          
    cacheTime: 10 * 60 * 1000,         
    retry: 3,                         
  });



  const getSlidesPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <Box id="destinations" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 3,
              color: 'primary.main',
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Explore Most Popular Destinations
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              color: 'text.secondary',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' },
              px: { xs: 2, md: 0 }
            }}
          >
            Plan your perfect trip with out most loved and best selling tour packages.
          </Typography>
        </Box>

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
            <CircularProgress color="primary" />
            <Typography variant="h6" sx={{ ml: 2, color: 'text.secondary' }}>Loading destinations...</Typography>
          </Box>
        )}

        {isError && (
          <Box sx={{ my: 5 }}>
            <Alert severity="error">{error?.message || "Failed to load destinations. Please try again later."}</Alert>
          </Box>
        )}

        {!isLoading && !isError && (!destinations || destinations.length === 0) && (
            <Box sx={{ my: 5 }}>
                <Typography variant="h6" color="text.secondary">No popular destinations available at the moment.</Typography>
            </Box>
        )}
        {!isLoading && !isError && destinations && destinations.length > 0 && (
          <Box sx={{ position: 'relative' }}>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={getSlidesPerView()}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              style={{
                paddingBottom: '60px',
              }}
            >
              {destinations.map((destination) => (
                <SwiperSlide key={destination._id}> 
                  <Card
                    sx={{
                      height: { xs: 420, sm: 450, md: 480 },
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={destination.imageUrl} 
                      alt={destination.name}
                      sx={{
                        objectFit: 'cover',
                        height: { xs: 180, sm: 200, md: 220 }
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 'bold',
                            mb: 1,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            color: 'primary.main'
                          }}
                        >
                          {destination.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'secondary.main',
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', md: '1.25rem' }
                          }}
                        >
                          Starting From {destination.price}/- 
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating value={destination.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                          ({destination.rating})
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        {destination.tags && destination.tags.map((tag) => ( 
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: 'primary.main',
                              color: 'white',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 3,
                          lineHeight: 1.6,
                          fontSize: { xs: '0.875rem', md: '1rem' }
                        }}
                      >
                        {destination.description}
                      </Typography>

                      <Box sx={{ display: 'flex', gap: 2, mb: 3, color: 'text.secondary', flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <FaClock size={14} />
                          <Typography variant="body2">{destination.duration}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <FaUsers size={14} />
                          <Typography variant="body2">{destination.groupSize}</Typography>
                        </Box>
                      </Box>

                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          mt: 'auto',
                          py: 1.5,
                          fontWeight: 600,
                          borderRadius: 2,
                          fontSize: { xs: '0.875rem', md: '1rem' }
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: { xs: 16, md: 32 },
                display: 'flex',
                gap: 1,
                zIndex: 10,
              }}
            >
              <IconButton
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
                sx={{
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 },
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: 'text.secondary',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'primary.main',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <FaChevronLeft size={isMobile ? 16 : 20} />
              </IconButton>
              <IconButton
                onClick={() => swiperRef.current?.swiper?.slideNext()}
                sx={{
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 },
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <FaChevronRight size={isMobile ? 16 : 20} />
              </IconButton>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Destinations;