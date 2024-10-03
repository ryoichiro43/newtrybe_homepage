import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2)',  // 背景画像のURL
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
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          We are a leading IT company, offering top-notch technology solutions.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
