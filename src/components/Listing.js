import React from 'react';
import { Box, List, ListItem, Typography } from '@material-ui/core';

export default class Listing extends React.Component {
  render() {
    return (
      <List>
        {this.props.list.map(item => {
          return (
            <ListItem key={item.id} button divider={item.notDivider ? false : true}>
              {item.text}
              <Box mt={2}>
                <Typography variant="overline">{item.subheader}</Typography>
              </Box>
            </ListItem>
          )
        })}
      </List>
    )
  }
}