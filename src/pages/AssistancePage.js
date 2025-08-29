import React from 'react';

import { Box } from '@mui/material';

import Heading from '../components/Heading';
import BlockOfText from '../components/BlockOfText';
import GridOfButtons from '../components/GridOfButtons';

import AssistanceData from '../data/AssistanceData';


export default class AssistancePage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={AssistanceData.header} />
        <BlockOfText paragraphs={AssistanceData.text} />
        <GridOfButtons buttons={AssistanceData.buttons} />
      </Box>
    )
  }
}
