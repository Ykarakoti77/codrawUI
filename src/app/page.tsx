import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { Sidebar } from './components/Sidebar/SideBar';
import Teams from './components/Teams';
import { theme } from '@/Theme/theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex'}}>
      <Sidebar />
      {/* <Teams /> */}
    </Box>
    </ThemeProvider>
  );
};

export default Home;
