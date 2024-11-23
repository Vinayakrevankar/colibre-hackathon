import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            alert(response.data.message);
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '50px' }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Login
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
                    color="primary"
                    fullWidth
                    style={{ marginTop: '20px' }}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
