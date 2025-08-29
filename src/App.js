import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

import Header from './components/Header';
import Body from './components/Body';

const App = () => (
  <Container disableGutters maxWidth="md">
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
    <Box p={1}>
      <Typography align="center">
        &#169; 2021, Кынтэрец Людмила Николаевна
        </Typography>
    </Box>
  </Container>
);

export default App;