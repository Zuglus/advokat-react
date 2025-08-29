import { Box, Grid, Paper } from '@mui/material';

import Router from '../pages/router';
import Aside from './Aside';

const Body = () => {

  return (

    <Box mt={2}>
      <Grid container>
        <Grid item md={8}>
          <Paper style={{ height: '100%' }}>
            <Router />
          </Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Aside />
        </Grid>
      </Grid>
    </Box>

  )
}

export default Body;