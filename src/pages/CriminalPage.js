import React from 'react';
import { Box } from '@material-ui/core';

import CriminalData from '../data/CriminalData';
import Heading from '../components/Heading';
import BlockOfText from '../components/BlockOfText';
import Tabs from '../components/Tabs';

export default class CriminalPage extends React.Component {
      render() {
            return (
                  <Box height="100%" >
                        <Heading heading={CriminalData.header} />
                        <BlockOfText paragraphs={CriminalData.text} />
                        <Tabs tabs={CriminalData.tabs}
                        />
                  </Box>
            )
      }
}
