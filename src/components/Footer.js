import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';  // アイコンをインポート
import { useInView } from 'react-intersection-observer';  // アニメーションのトリガーに使用

const Footer = () => {
  const [footerRef, footerInView] = useInView({ triggerOnce: true });

  return (
    <Box
      ref={footerRef}
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 4,
        opacity: footerInView ? 1 : 0,
        transform: footerInView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 1s ease, transform 1s ease',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* 会社情報 */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                transition: 'transform 0.5s ease',
                '&:hover': { transform: 'scale(1.1)' },
              }}
            >
              Company Name
            </Typography>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </Typography>
          </Grid>

          {/* ナビゲーションリンク */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                transition: 'transform 0.5s ease',
                '&:hover': { transform: 'scale(1.1)' },
              }}
            >
              Links
            </Typography>
            <Link
              href="#home"
              color="inherit"
              underline="none"
              display="block"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              Home
            </Link>
            <Link
              href="#about"
              color="inherit"
              underline="none"
              display="block"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              About Us
            </Link>
            <Link
              href="#services"
              color="inherit"
              underline="none"
              display="block"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              Services
            </Link>
            <Link
              href="#contact"
              color="inherit"
              underline="none"
              display="block"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              Contact
            </Link>
          </Grid>

          {/* ソーシャルメディア */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                transition: 'transform 0.5s ease',
                '&:hover': { transform: 'scale(1.1)' },
              }}
            >
              Follow Us
            </Typography>
            <Link
              href="https://www.facebook.com"
              color="inherit"
              underline="none"
              display="block"
              target="_blank"
              rel="noopener"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Facebook sx={{ mr: 1 }} /> Facebook
            </Link>
            <Link
              href="https://www.twitter.com"
              color="inherit"
              underline="none"
              display="block"
              target="_blank"
              rel="noopener"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Twitter sx={{ mr: 1 }} /> Twitter
            </Link>
            <Link
              href="https://www.linkedin.com"
              color="inherit"
              underline="none"
              display="block"
              target="_blank"
              rel="noopener"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <LinkedIn sx={{ mr: 1 }} /> LinkedIn
            </Link>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
