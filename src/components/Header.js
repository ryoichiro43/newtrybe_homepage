import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          <ListItem button key={text} component="a" href={`#${text.toLowerCase().replace(' ', '')}`}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company Name
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
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" href="#home">Home</Button>
            <Button color="inherit" href="#about">About Us</Button>
            <Button color="inherit" href="#services">Services</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ドロワーメニュー */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerItems}
      </Drawer>
    </>
  );
};

export default Header;
