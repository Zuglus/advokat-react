import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default class BlockOfText extends React.Component {
  render() {
    return (
      this.props.paragraphs.map(item => {
        if (!item.linkHref) {
          return (
            <Box p={2} key={item.id} >
              <Typography variant={item.variant} align={item.align}>{item.paragraph}</Typography>
            </Box>
          )
        } else {
          return (
            <Box p={2} key={item.id} >
              <Typography align={item.align}>{item.paragraphBefore}
                <Link
                  href={item.linkHref}
                  target={item.target}
                  rel="noopener"
                  download={item.download}
                  underline="none">
                  {item.linkName}
                </Link>{item.paragraphAfter}
              </Typography>
            </Box>
          )
        }
      }
      ))
  }
}