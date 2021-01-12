import { Switch, Route, Redirect } from 'react-router-dom';
import { Box, Grid, Paper } from '@material-ui/core';

import AssistanceList from './AssistanceList';
import Contacts from './Contacts';
import About from './About';
import NotFound from './NotFound';
import Aside from './Aside';
import AssistancePage from "./AssistancePage";

const Body = () => {
  return (

    <Box mt={2}>
      <Grid container>
        <Grid item md={8}>
          <Paper>
            <Switch>
              <Route exact path="/assistance">
                <AssistanceList />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/assistance/:id">
                <AssistancePage />
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
        <Grid item md={4}>
          <Aside />
        </Grid>
      </Grid>
    </Box>

  )
}

export default Body;