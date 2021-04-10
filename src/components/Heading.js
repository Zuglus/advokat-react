import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default class Heading extends React.Component {
  render() {
    return (
      <Box pl={2} pt={3}>
        <Typography variant="h4">{this.props.heading}</Typography>
        <Typography variant="h5">{this.props.subHeading}</Typography>
      </Box>
    )
  }
}