import { Switch, Route, Redirect } from 'react-router-dom';
import { Box, Grid, makeStyles, Paper } from '@material-ui/core';

import Assistance from './Assistance';
import Contacts from './Contacts';
import About from './About';
import NotFound from './NotFound';
import Aside from './Aside';

const useStyles = makeStyles({
  root: {
    margin: '0 auto'
  }
})

const Body = () => {
  return (

    <Box mt={2}>
      <Grid container>
        <Grid item md={8}>
          <Paper>
            <Switch>
              <Route path="/assistance">
                <Assistance />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Redirect to="/assistance" />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Paper>
        </Grid>
        <Grid className={useStyles().root} item md={4}>
          <Aside />
        </Grid>
      </Grid>
    </Box>

  )
}

export default Body;