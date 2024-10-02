import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Slide, Fade } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerItems = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About Us', 'Services', 'Contact'].map((text, index) => (
          <ListItem
            button
            key={text}
            component="a"
            href={`#${text.toLowerCase().replace(' ', '')}`}
            sx={{
              transition: 'all 0.3s ease',   // アニメーション追加
              '&:hover': {
                backgroundColor: theme.palette.primary.light, // ホバー時の背景色変更
                transform: 'scale(1.05)', // ホバー時に少し大きく
              },
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* ロゴ部分 */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              transition: 'transform 0.5s ease', // アニメーション追加
              '&:hover': {
                // ロゴホバー時に拡大
              },
            }}
          >
            New Trybe
          </Typography>

          {/* モバイル用のメニューアイコン */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* PC画面用のナビゲーションリンク */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, transition: 'all 0.5s ease' }}>
            <Button
              color="inherit"
              href="#home"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)', // ナビゲーションリンクのホバーアニメーション
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              href="#about"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              href="#services"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              Services
            </Button>
            <Button
              color="inherit"
              href="#contact"
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ドロワーメニュー */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        
      >
        {drawerItems}
      </Drawer>
    </>
  );
};

export default Header;
