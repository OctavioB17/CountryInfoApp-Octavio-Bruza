import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import themeOptions from './theme/theme.js';
import Home from './components/countries/Home.jsx';
import CountryInfo from './components/countries/CountryInfo.jsx';
import Landing from './components/Landing.jsx';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';

const theme = createTheme(themeOptions);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Countries" replace />} />
          <Route path="/:title" element={<Landing><Home /></Landing>} />
          <Route path="/country/:title" element={<Landing><CountryInfo /></Landing>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);