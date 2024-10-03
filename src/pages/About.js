import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2)',  // 背景画像
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',  // 背景がスクロールに固定される
        color: 'white',  // テキストの色を白に設定
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',  // 背景にオーバーレイを追加
          zIndex: 1,
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 2, py: 8 }}>

        {/* 会社概要のセクション */}
        <Typography variant="h4" component="h2" gutterBottom align="center">
          私たちの会社について
        </Typography>
        <Typography variant="body1" paragraph align="center">
          私たちは革新的なITソリューションを提供するリーディングカンパニーです。品質と顧客満足への取り組みが、私たちの成長と成功を支えています。
        </Typography>

        {/* ビジョンとミッション */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  私たちのビジョン
                </Typography>
                <Typography variant="body2">
                  世界の技術ソリューションのリーダーとなり、革新を推進し、ビジネスの効率と成長を高める最高のサービスを提供します。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  私たちのミッション
                </Typography>
                <Typography variant="body2">
                  最新技術を活用してビジネスが最大の可能性を発揮できるよう、最先端のソリューションを提供し続けます。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* コアバリュー */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" component="h3" gutterBottom align="center">
            私たちのコアバリュー
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    誠実さ
                  </Typography>
                  <Typography variant="body2">
                    私たちは最高の倫理基準に基づいてビジネスを行い、透明性と説明責任を確保します。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    革新
                  </Typography>
                  <Typography variant="body2">
                    私たちは新しいアイデアを受け入れ、常に革新を追求し、テクノロジーの可能性を広げていきます。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    顧客の成功
                  </Typography>
                  <Typography variant="body2">
                    私たちの成功は、顧客の成功で測られます。お客様がビジネス目標を達成できるよう全力でサポートします。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* チーム紹介 */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" component="h3" gutterBottom align="center">
            私たちのチーム紹介
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* メンバー1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    src="https://via.placeholder.com/150"  // メンバーの写真
                    alt="Team Member 1"
                    sx={{ width: 100, height: 100, mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    千葉太河
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    CEO & 創業者
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* メンバー2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    src="https://via.placeholder.com/150"  // メンバーの写真
                    alt="Team Member 2"
                    sx={{ width: 100, height: 100, mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    蓑羽諒一朗
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  CEO & 創業者
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* メンバー3 */}
        {/*
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    src="https://via.placeholder.com/150"  // メンバーの写真
                    alt="Team Member 3"
                    sx={{ width: 100, height: 100, mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    COO
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            */}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default About;
