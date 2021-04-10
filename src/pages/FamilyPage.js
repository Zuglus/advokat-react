import React from 'react';

import { Box } from '@material-ui/core';

import Heading from '../components/Heading';
import Listing from '../components/Listing';

import FamilyData from '../data/FamilyData';


export default class FamilyPage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={FamilyData.header} />
        <Listing list={FamilyData.list} />
      </Box>
    )
  }
}