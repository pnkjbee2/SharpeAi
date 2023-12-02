import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxWidth={false} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #1b1e3e, #2f5f8a)',
      color: '#fff',
    }}>
      <Typography variant="h1" sx={{
        fontSize: '3em',
        marginBottom: '20px',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      }}>
        Welcome to the Web3 Universe!
      </Typography>
      <Typography variant="body1" sx={{
        fontSize: '1.2em',
        marginBottom: '40px',
        maxWidth: '600px',
        textAlign: 'center',
        lineHeight: '1.5',
      }}>
        Embark on a journey through the decentralized cosmos. Explore the limitless possibilities of Web3 technologies.
      </Typography>
      <Button sx={{
        display: 'inline-block',
        padding: '15px 30px',
        margin: '15px',
        fontSize: '1.2em',
        textDecoration: 'none',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '8px',
        transition: 'background-color 0.3s, color 0.3s',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#2f5f8a',
        },
      }} component={Link} to="/on_transaction">
        Make a Decentralized Transaction
      </Button>
      <Button sx={{
        display: 'inline-block',
        padding: '15px 30px',
        margin: '15px',
        fontSize: '1.2em',
        textDecoration: 'none',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '8px',
        transition: 'background-color 0.3s, color 0.3s',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#2f5f8a',
        },
      }} component={Link} to="/data_page">
        Discover Decentralized Data
      </Button>
    </Container>
  );
}

export default HomePage;
