import React from 'react';
import Heading from '../components/Heading';
import BlockOfText from '../components/BlockOfText';

import NotFoundData from '../data/NotFoundData';

import { Box } from '@material-ui/core';

export default class NotFound extends React.Component {
  render() {

    return (
      <Box>
        <Heading heading={NotFoundData.header} />
        <BlockOfText paragraphs={NotFoundData.text} />
      </Box>
    )
  }
}