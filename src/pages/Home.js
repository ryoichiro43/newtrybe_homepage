import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)',  // 背景画像のURL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // オーバーレイ
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Our IT Company
        </Typography>
        <Typography variant="h5" gutterBottom>
          Cutting-edge solutions to drive your business forward.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
