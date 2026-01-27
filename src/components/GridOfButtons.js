import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

import SocialIcon from './SocialIcon';

export default class GridOfButtons extends React.Component {
  render() {
    return (
      <Box m={2}>
        <Grid container justifyContent="center" spacing={1}>
          {this.props.buttons.map((item) => {
            return (
              <Grid
                item
                key={item.id}
                xs={item.gridXS}
                sm={item.gridSM}
                md={item.gridMD}
              >
                <Button
                  component={item.component ? RouterLink : Button}
                  to={item.link}
                  href={item.href}
                  variant="contained"
                  color={item.color}
                  fullWidth
                  align="center"
                >
                  <Box
                    display="flex"
                    flexDirection={item.text ? "column" : "inherit"}
                    alignItems="center"
                    height={item.icon ? 1 : 60}
                  >
                    <Box display="flex">

                      <Box
                        display="flex"
                        alignItems="center">
                        <SocialIcon iconName={item.icon} />
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        style={item.icon ? { textTransform: 'none' } : {}}
                      >
                        <Typography
                          variant={item.icon ? "h6" : "inherit"}
                          align="center"
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center" style={{ textTransform: 'none' }}>
                      <Typography variant="subtitle1">
                        {item.text}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" style={{ textTransform: 'none' }}>
                      <Typography variant="subtitle2">
                        {item.text2}
                      </Typography>
                    </Box>
                  </Box>
                </Button>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    )
  }
}