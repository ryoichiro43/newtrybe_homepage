import React from 'react';
import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c)',  // お問い合わせページの背景画像
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* 背景の上に半透明のオーバーレイを追加 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 半透明の黒いオーバーレイ
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        
        {/* フォームの外側にマージンと背景を追加してコントラストを強調 */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',  // フォームの背景をほぼ白に
                padding: 3,
                borderRadius: 2,
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',  // シャドウを追加して浮かせる効果
              }}
            >
              <TextField fullWidth label="Name" variant="outlined" margin="normal" />
              <TextField fullWidth label="Email" variant="outlined" margin="normal" />
              <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} />
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
