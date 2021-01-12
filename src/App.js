import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, Container, Typography } from '@material-ui/core';

import Header from './Header';
import Body from './Body';

const App = () => (
  <Container disableGutters maxWidth="md">
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
    <Box p={1}>
      <Typography align="center">
        &#169; 2020-2021, Кынтэрец Людмила Николаевна
        </Typography>
    </Box>
  </Container>
);

export default App;