import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';

const LandingPage = () => {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', padding: '50px' }}>
            <Box>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to the Student Mental Health Portal
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Your safe space to seek support and find resources for mental well-being.
                </Typography>
                <Box marginTop={4}>
                    <Link to="/login" style={{ textDecoration: 'none', marginRight: '10px' }}>
                        <Button variant="contained" color="primary" size="large">
                            Login
                        </Button>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="secondary" size="large">
                            Signup
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default LandingPage;
