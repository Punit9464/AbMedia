import { Box, Typography, Grid, Container, Card, CardMedia, CardContent, CardActions, Button, useTheme, useMediaQuery, CircularProgress, Alert } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchTopPackages } from '../api/packages.js'; // Assuming fetchTopPackages now calls your /api/packages endpoint

function Packages() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const { data: packages, isLoading, isError, error } = useQuery({
        queryKey: ['topSellingPackages'],
        queryFn: fetchTopPackages,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
        retry: 3,
    });

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                padding: theme.spacing(8, 0),
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        color: '#00bcd4',
                        fontWeight: 'bold',
                        marginBottom: theme.spacing(2),
                        [theme.breakpoints.down('md')]: {
                            fontSize: '2.5rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '2rem',
                        },
                    }}
                >
                    Top Selling Tour Packages of India
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        color: '#666',
                        marginBottom: theme.spacing(6),
                        [theme.breakpoints.down('md')]: {
                            fontSize: '1rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '0.9rem',
                        },
                    }}
                >
                    Stay updated with our latest news and happenings through
                    <br />
                    Informe.
                </Typography>

                {isLoading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                        <CircularProgress color="primary" />
                        <Typography variant="h6" sx={{ ml: 2, color: '#666' }}>Loading packages...</Typography>
                    </Box>
                )}

                {isError && (
                    <Box sx={{ my: 5 }}>
                        <Alert severity="error">{error?.message || "Failed to load tour packages. Please try again later."}</Alert>
                    </Box>
                )}

                {!isLoading && !isError && (!packages || packages.length === 0) && (
                    <Box sx={{ my: 5 }}>
                        <Typography variant="h6" color="text.secondary">No top selling packages available at the moment.</Typography>
                    </Box>
                )}
                {!isError && !isLoading && console.log("Packages data for rendering:", packages)} {/* Keep this console log for verification */}

                {!isLoading && !isError && packages && packages.length > 0 && (
                    <Grid container spacing={isSmallScreen ? 3 : 4} justifyContent="center">
                        {packages.map((pkg) => (
                            <Grid item xs={12} sm={6} md={4} key={pkg._id}>
                                <Card
                                    sx={{
                                        borderRadius: theme.shape.borderRadius * 2,
                                        boxShadow: theme.shadows[8],
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: theme.shadows[12],
                                        },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={pkg.imageUrl || '/placeholder.jpg'} // ✅ Added image prop with fallback
                                        height="200"
                                        alt={pkg.name || pkg.topic || "Tour Package"}
                                        sx={{
                                            borderTopLeftRadius: theme.shape.borderRadius * 2,
                                            borderTopRightRadius: theme.shape.borderRadius * 2,
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                color: '#333',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                [theme.breakpoints.down('sm')]: {
                                                    fontSize: '1rem',
                                                },
                                            }}
                                        >
                                            {pkg.name || pkg.topic || "Untitled Package"} {/* ✅ Added fallback */}
                                        </Typography>

                                        {pkg.price ? (
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{ textAlign: 'center', mt: 1 }}
                                            >
                                                From ₹{pkg.price}
                                            </Typography>
                                        ) : null}

                                        {pkg.duration ? (
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ textAlign: 'center' }}
                                            >
                                                Duration: {pkg.duration}
                                            </Typography>
                                        ) : null}
                                    </CardContent>

                                    <CardActions sx={{ justifyContent: 'center', paddingBottom: theme.spacing(2) }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#00bcd4',
                                                color: 'white',
                                                borderRadius: theme.shape.borderRadius * 1.5,
                                                padding: theme.spacing(1, 4),
                                                '&:hover': {
                                                    backgroundColor: '#0097a7',
                                                },
                                            }}
                                        >
                                            VIEW DETAILS
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default Packages;