import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';

const LandingPage = () => {
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundImage: 'url(/assets/background.png)', // Path to your image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Main Content */}
            <Container
                maxWidth="md"
                style={{
                    flex: '1', // Makes this container take up the remaining space
                    textAlign: 'center',
                    padding: '80px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Translucent white background for contrast
                    borderRadius: '15px',
                    marginTop: '50px',
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom
                    style={{ fontWeight: 'bold', color: '#003865' }}
                >
                    Welcome to the Student Mental Health Portal
                </Typography>
                <Typography
                    variant="subtitle1"
                    style={{ marginBottom: '20px', color: '#5271ff' }}
                >
                    A safe space to seek support and explore resources for mental well-being.
                </Typography>
                <Box marginTop={4}>
                    <Link to="/login" style={{ textDecoration: 'none', marginRight: '10px' }}>
                        <Button
                            variant="contained"
                            size="large"
                            style={{
                                backgroundColor: '#5271ff',
                                color: '#fff',
                                borderRadius: '8px',
                                padding: '10px 20px',
                                transition: 'all 0.3s',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#3b5fc9')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#5271ff')}
                        >
                            Login
                        </Button>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            size="large"
                            style={{
                                borderColor: '#5271ff',
                                color: '#5271ff',
                                borderRadius: '8px',
                                padding: '10px 20px',
                                transition: 'all 0.3s',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.color = '#fff';
                                e.target.style.backgroundColor = '#5271ff';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.color = '#5271ff';
                                e.target.style.backgroundColor = 'transparent';
                            }}
                        >
                            Signup
                        </Button>
                    </Link>
                </Box>
            </Container>

            {/* Sticky Footer */}
            <Box
                component="footer"
                style={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#003865',
                    color: '#fff',
                    width: '100%',
                    marginTop: 'auto', // Pushes footer to the bottom
                }}
            >
                <Typography variant="body2" gutterBottom>
                    Need help? <Link to="/help" style={{ color: '#5271ff', textDecoration: 'none' }}>Click here</Link>
                </Typography>
                <Typography variant="caption">
                    © 2024 Student Mental Health Portal. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;
