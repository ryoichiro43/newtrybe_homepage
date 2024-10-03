import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Assignment, Transform, Cloud } from '@mui/icons-material';  // アイコンのインポート

const Services = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)',  // サービスページの背景画像
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        py: 8,
      }}
    >
      {/* 背景のオーバーレイ */}
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

      {/* サービスコンテンツ */}
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          Our Services
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mb: 4, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          We provide comprehensive solutions to accelerate your digital transformation and optimize business efficiency.
        </Typography>

        {/* グリッドレイアウトでサービスの表示 */}
        <Grid container spacing={4} justifyContent="center">
          {/* 受託開発 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                height: '100%',  // カードの高さを揃える
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Assignment sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />  {/* アイコン */}
                <Typography variant="h6" gutterBottom>
                  受託開発
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  お客様のニーズに合わせたカスタムソフトウェア開発を提供します。業界固有の要件に対応し、ビジネス目標に合った高品質なソリューションを構築します。
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* DX化（デジタルトランスフォーメーション） */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                height: '100%',  // カードの高さを揃える
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Transform sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />  {/* アイコン */}
                <Typography variant="h6" gutterBottom>
                  DX化
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  デジタル技術を活用して、ビジネスプロセスの革新を支援します。データ駆動型の意思決定と、顧客エンゲージメントの向上を目指します。
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 業務効率化のためのクラウド化 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                height: '100%',  // カードの高さを揃える
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Cloud sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />  {/* アイコン */}
                <Typography variant="h6" gutterBottom>
                  業務効率化のためのクラウド化
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  クラウドソリューションを活用し、業務の効率化とスケーラビリティを提供します。柔軟で安全なITインフラを構築し、コスト削減を支援します。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
