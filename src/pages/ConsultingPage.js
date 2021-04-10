import React from 'react';
import { Box } from '@material-ui/core';
import BlockOfText from '../components/BlockOfText';
import AlertText from '../components/AlertText';
import TablePrice from '../components/TablePrice';

import ConsultingData from '../data/ConsultingData';

export default class ConsultingPage extends React.Component {
  render() {
    return (
      <Box>
        <BlockOfText paragraphs={ConsultingData.text} />
        <AlertText text={ConsultingData.alertText} />
        <TablePrice table={ConsultingData.table} />
      </Box>
    )
  }
}