import React from 'react';
import { Box, Button } from '@material-ui/core';

export default class TabButtons extends React.Component {
  render() {
    return (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        {
          this.props.buttons.map(item => {
            return (
              <Box p={1} pl={0} display="flex" justifyContent="center" key={item.id}>
                <Button
                  variant={(this.props.tabIndex === item.tabName) ? "outlined" : "contained"}
                  color="primary"
                  onClick={(e) => this.props.newIndex(e, item.tabName)}
                >
                  {item.buttonName}
                </Button>
              </Box>
            )
          })
        }
      </Box>
    )
  }
}