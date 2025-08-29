import React from 'react';
import { Box } from '@mui/material';

import ContactsData from '../data/ContactsData';
import Heading from '../components/Heading';
import BlockOfText from '../components/BlockOfText';
import GridOfButtons from '../components/GridOfButtons';

export default class ContactsPage extends React.Component {
  render() {
    return (
      <Box>
        <Heading heading={ContactsData.header} />
        <BlockOfText paragraphs={ContactsData.text} />
        <GridOfButtons buttons={ContactsData.buttons} />
        <BlockOfText paragraphs={ContactsData.text2} />
      </Box>
    )
  }
}
