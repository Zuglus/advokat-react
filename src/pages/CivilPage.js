import React from 'react';

import { Box } from '@material-ui/core';

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