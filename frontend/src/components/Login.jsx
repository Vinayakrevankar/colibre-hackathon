import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Card } from '@mui/material';
import axios from 'axios';
import {BASE_URL} from '../constant';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/api/login`, { emailAddress: email, password });
            alert(response.data.message);
        } catch (error) {
            alert('Login failed. Try again.');
        }
    };

    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5', // Neutral background color
            }}
        >
            <Card
                style={{
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    maxWidth: '400px',
                    width: '90%',
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    style={{
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#333',
                    }}
                >
                    Login
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    style={{
                        marginBottom: '20px',
                        color: '#777',
                    }}
                >
                    Welcome back! Please login to continue.
                </Typography>
                <Box component="form" onSubmit={handleLogin} noValidate>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        style={{
                            marginTop: '20px',
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            fontWeight: 'bold',
                        }}
                    >
                        Login
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
                    Don't have an account?{' '}
                    <a
                        href="/signup"
                        style={{
                            color: '#007bff',
                            textDecoration: 'none',
                        }}
                    >
                        Signup
                    </a>
                </Typography>
            </Card>
        </Box>
    );
};

export default Login;
