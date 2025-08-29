import React from 'react';

import { Box } from '@mui/material';

import Heading from '../components/Heading';
import BlockOfText from '../components/BlockOfText';
import TablePriceHeader from '../components/TablePriceHeader';
import TablePriceBody from '../components/TablePriceBody';

import ArbitrajData from '../data/ArbitrajData';


export default class ArbitrajPage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={ArbitrajData.header} />
        <BlockOfText paragraphs={ArbitrajData.text} />
        <TablePriceHeader />
        <TablePriceBody table={ArbitrajData.table} />
      </Box>
    )
  }
}
