import React from 'react';
import Header from './components/Header';  // Headerコンポーネントのインポート
import Footer from './components/Footer';  // Footerコンポーネントのインポート
import { Container, Typography, Box, Button, Grid, TextField } from '@mui/material';

function App() {
  return (
    <div>
      <Header />

      {/* ヒーローセクション */}
      <Box
        sx={{
          position: 'relative',
          height: '600px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)',
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
            zIndex: 1,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Welcome to Our IT Company
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Cutting-edge solutions to drive your business forward.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Learn More
          </Button>
        </Container>
      </Box>

      {/* 会社概要セクション */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            About Us
          </Typography>
          <Typography variant="body1" paragraph align="center">
            We are a leading IT company, offering top-notch technology solutions. Our team of experts is dedicated to driving innovation and delivering exceptional service to our clients worldwide.
          </Typography>
        </Container>
      </Box>

      {/* サービスセクション */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 8,
          color: 'white',
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
            zIndex: 1,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Our Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, textAlign: 'center', bgcolor: 'rgba(0, 0, 0, 0.7)', borderRadius: 2 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Cloud Solutions
                </Typography>
                <Typography variant="body1" paragraph>
                  Scalable cloud infrastructure tailored to your business needs.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, textAlign: 'center', bgcolor: 'rgba(0, 0, 0, 0.7)', borderRadius: 2 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Cybersecurity
                </Typography>
                <Typography variant="body1" paragraph>
                  Cutting-edge security solutions to protect your data.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, textAlign: 'center', bgcolor: 'rgba(0, 0, 0, 0.7)', borderRadius: 2 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  AI & Machine Learning
                </Typography>
                <Typography variant="body1" paragraph>
                  Innovative AI solutions to drive smarter decisions.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* お問い合わせセクション */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c)',  // フリー素材（チームワーク）
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 8,
          color: 'white',
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
            zIndex: 1,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Get in touch with us for consultations or support.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  backgroundColor: 'white',  // フォームの背景色を白に
                  padding: 3,
                  borderRadius: 2,
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',  // ボックスシャドウを追加してフォームを際立たせる
                }}
              >
                <TextField fullWidth label="Name" variant="outlined" margin="normal" />
                <TextField fullWidth label="Email" variant="outlined" margin="normal" />
                <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} />
                <Button variant="contained" color="primary" fullWidth>
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}

export default App;
