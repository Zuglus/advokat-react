import React from 'react';

import { Box } from '@material-ui/core';

import Heading from '../components/Heading';
import Listing from '../components/Listing';

import LegacyData from '../data/LegacyData';


export default class LegacyPage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={LegacyData.header} />
        <Listing list={LegacyData.list} />
      </Box>
    )
  }
}