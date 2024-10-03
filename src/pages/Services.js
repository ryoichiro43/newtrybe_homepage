import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Services = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)',  // サービスページの背景画像
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
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          We offer Cloud Solutions, Cybersecurity, and AI & Machine Learning services.
        </Typography>
      </Container>
    </Box>
  );
};

export default Services;
