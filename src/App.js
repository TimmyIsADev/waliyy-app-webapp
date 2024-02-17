import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProfileSetup from './pages/ProfileSetup';
import LikePage from './pages/LikePage';
import MatchPage from './pages/MatchPage';
import SettingsPage from './pages/SettingsPage';
import PricingPage from './pages/PricingPage';
import { Filters } from './pages/Filters';
import ProfileDetails from './components/profile/ProfileDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Nunito, san-serif',
    },
    palette: {
      secondary: {
        main: '#BA9FFE',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/likes" element={<LikePage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/pricing" element={<PricingPage />} />

        <Route path="/sign-up" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/sign-up/setup" element={<ProfileSetup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/filter" element={<Filters />} />

        <Route path="/profile" element={<ProfileDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
