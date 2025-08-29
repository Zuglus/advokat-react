import React from 'react';
import { Box } from '@mui/material';

export default class AlertText extends React.Component {
  render() {
    return (
      this.props.text.map(item => {
        return (
          <Box
            key={item.id}
            style={{ textDecoration: item.textDecoration }}
            color="secondary.main"
            fontWeight="fontWeightBold"
            alignContent={item.align}
            textAlign={item.align}
            m={1}
          >
            {item.paragraph}
          </Box>
        )
      })
    )
  }
}