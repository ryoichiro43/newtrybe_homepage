import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';  // アイコンをインポート
import { Link } from 'react-router-dom';  // React RouterのLinkを使用
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link
                to="/"
                style={{ textDecoration: 'none', color: 'inherit', marginBottom: '8px' }}
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: 'none', color: 'inherit', marginBottom: '8px' }}
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                About Us
              </Link>
              <Link
                to="/services"
                style={{ textDecoration: 'none', color: 'inherit', marginBottom: '8px' }}
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                Services
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: 'none', color: 'inherit' }}
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                Contact
              </Link>
            </Box>
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <MuiLink
                href="https://www.facebook.com"
                color="inherit"
                underline="none"
                target="_blank"
                rel="noopener"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <Facebook sx={{ mr: 1 }} /> Facebook
              </MuiLink>
              <MuiLink
                href="https://www.twitter.com"
                color="inherit"
                underline="none"
                target="_blank"
                rel="noopener"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <Twitter sx={{ mr: 1 }} /> Twitter
              </MuiLink>
              <MuiLink
                href="https://www.linkedin.com"
                color="inherit"
                underline="none"
                target="_blank"
                rel="noopener"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <LinkedIn sx={{ mr: 1 }} /> LinkedIn
              </MuiLink>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
