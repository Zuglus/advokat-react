import React from 'react';

import { Box } from '@mui/material';

import Heading from '../components/Heading';
import Listing from '../components/Listing';

import CivilData from '../data/CivilData';


export default class CivilPage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={CivilData.header} />
        <Listing list={CivilData.list} />
      </Box>
    )
  }
}