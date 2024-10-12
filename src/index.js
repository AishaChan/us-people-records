import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack'
import { ThemeProvider, alpha, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {

    primary: {
      main: "#28539c" //"#06416B"
    },
    secondary: {
      main: "#cf5765" //  "#B91C2F"
    },
    action: {
      hover: 'rgba(80,80,80, 0.9)',
      hoverOpacity: 0.05
    },
    background: {
      paper: '#424242',
      default: '#303030',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#28539c', 0.5),

        },
        rounded: {
          borderRadius: 8,
        },
        elevation1: {
          boxShadow: '0px 1px 3px 0px rgba(142, 142, 142, 0.2), 0px 1px 1px 0px rgba(243, 243, 243, 0.14), 0px 2px 1px -1px rgba(204, 204, 204, 0.12)',
        },
        elevation4: {
          boxShadow:
            '0px 2px 4px -1px rgba(142, 142, 142, 0.2), 0px 4px 5px 0px rgba(243, 243, 243, 0.14), 0px 1px 10px 0px rgba(204, 204, 204, 0.12)',
        },
      }
    },


  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider autoHideDuration={2000} anchorOrigin={{ horizontal: "right", vertical: 'top' }}>
      <App />
    </SnackbarProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
