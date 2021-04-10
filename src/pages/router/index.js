import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AssistancePage from '../AssistancePage';
import ContactsPage from '../ContactsPage';
import AboutPage from '../AboutPage';
import CriminalPage from '../CriminalPage';
import NotFound from '../NotFoundPage';
import ConsultingPage from '../ConsultingPage';
import ArbitrajPage from '../ArbitrajPage';
import CivilPage from '../CivilPage';
import FamilyPage from '../FamilyPage';
import LegacyPage from '../LegacyPage';
import HousePage from '../HousePage';
import TaxPage from '../TaxPage';


export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/assistance'>
          <AssistancePage />
        </Route>
        <Route path='/contacts'>
          <ContactsPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/assistance/criminal'>
          <CriminalPage />
        </Route>
        <Route path='/assistance/arbitraj'>
          <ArbitrajPage />
        </Route>
        <Route path='/assistance/consulting'>
          <ConsultingPage />
        </Route>
        <Route path='/assistance/civil'>
          <CivilPage />
        </Route>
        <Route path='/assistance/family'>
          <FamilyPage />
        </Route>
        <Route path='/assistance/legacy'>
          <LegacyPage />
        </Route>
        <Route path='/assistance/house'>
          <HousePage />
        </Route>
        <Route path='/assistance/tax'>
          <TaxPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/assistance" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    )
  }
}