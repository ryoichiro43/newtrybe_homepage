import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';  // アイコンをインポート

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* 会社情報 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </Typography>
          </Grid>

          {/* ナビゲーションリンク */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Link href="#home" color="inherit" underline="none" display="block">
              Home
            </Link>
            <Link href="#about" color="inherit" underline="none" display="block">
              About Us
            </Link>
            <Link href="#services" color="inherit" underline="none" display="block">
              Services
            </Link>
            <Link href="#contact" color="inherit" underline="none" display="block">
              Contact
            </Link>
          </Grid>

          {/* ソーシャルメディア */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com" color="inherit" underline="none" display="block" target="_blank" rel="noopener">
              <Facebook sx={{ mr: 1 }} /> Facebook
            </Link>
            <Link href="https://www.twitter.com" color="inherit" underline="none" display="block" target="_blank" rel="noopener">
              <Twitter sx={{ mr: 1 }} /> Twitter
            </Link>
            <Link href="https://www.linkedin.com" color="inherit" underline="none" display="block" target="_blank" rel="noopener">
              <LinkedIn sx={{ mr: 1 }} /> LinkedIn
            </Link>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
