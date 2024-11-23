import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Card } from '@mui/material';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', { name, email, password });
            alert(response.data.message);
        } catch (error) {
            alert('Signup failed. Try again.');
        }
    };

    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundImage: 'url(/assets/signup-background.jpg)', // Add your background image here
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Card
                style={{
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    maxWidth: '400px',
                    width: '90%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    style={{
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#003865',
                    }}
                >
                    Create an Account
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    style={{
                        marginBottom: '20px',
                        color: '#5271ff',
                    }}
                >
                    Join us and start your journey today.
                </Typography>
                <Box component="form" onSubmit={handleSignup} noValidate>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '5px',
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        style={{
                            marginTop: '20px',
                            padding: '10px',
                            backgroundColor: '#5271ff',
                            color: '#fff',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            transition: 'all 0.3s',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#3b5fc9')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#5271ff')}
                    >
                        Signup
                    </Button>
                </Box>
                <Typography
                    variant="body2"
                    align="center"
                    style={{
                        marginTop: '20px',
                        color: '#555',
                    }}
                >
                    Already have an account?{' '}
                    <a
                        href="/login"
                        style={{
                            color: '#5271ff',
                            textDecoration: 'none',
                        }}
                    >
                        Login
                    </a>
                </Typography>
            </Card>
        </Box>
    );
};

export default Signup;
