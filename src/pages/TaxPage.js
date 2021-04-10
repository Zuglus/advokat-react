import React from 'react';

import { Box } from '@material-ui/core';

import Heading from '../components/Heading';
import BlockOfText from '../components/BlockOfText';
import TablePriceHeader from '../components/TablePriceHeader';
import TablePriceBody from '../components/TablePriceBody';

import TaxData from '../data/TaxData';

export default class LegacyPage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={TaxData.header} />
        <BlockOfText paragraphs={TaxData.text} />
        <TablePriceHeader />
        <TablePriceBody table={TaxData.table} />
      </Box>
    )
  }
}