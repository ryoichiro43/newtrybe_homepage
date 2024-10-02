import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',    // プライマリカラー (例: 青)
      dark: '#115293',    // ダークバージョンのカラー
    },
    secondary: {
      main: '#d32f2f',    // セカンダリカラー (例: 赤)
    },
  },
  typography: {
    h6: {
      fontWeight: 'bold', // h6のテキストに太字を適用
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
