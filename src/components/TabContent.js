import React from 'react';
import { Box } from '@mui/material';
import BlockOfText from './BlockOfText';
import TablePrice from './TablePrice';

export default class TabContent extends React.Component {
  render() {
    return (
      this.props.content.map(item => {
        return (
          <Box key={item.id} hidden={this.props.tabIndex !== item.tabName}>
            <BlockOfText paragraphs={item.text} />
            {(item.table) ?
              <TablePrice table={item.table} /> :
              ''
            }
          </Box>
        )
      })
    )
  }
}