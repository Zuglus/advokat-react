import React from 'react';

import { Box } from '@material-ui/core';

import Heading from '../components/Heading';
import Listing from '../components/Listing';

import HouseData from '../data/HouseData';


export default class LegacyPage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={HouseData.header} />
        <Listing list={HouseData.list} />
      </Box>
    )
  }
}