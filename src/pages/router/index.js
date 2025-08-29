import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
      <Routes>
        <Route path='/assistance' element={<AssistancePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/assistance/criminal' element={<CriminalPage />} />
        <Route path='/assistance/arbitraj' element={<ArbitrajPage />} />
        <Route path='/assistance/consulting' element={<ConsultingPage />} />
        <Route path='/assistance/civil' element={<CivilPage />} />
        <Route path='/assistance/family' element={<FamilyPage />} />
        <Route path='/assistance/legacy' element={<LegacyPage />} />
        <Route path='/assistance/house' element={<HousePage />} />
        <Route path='/assistance/tax' element={<TaxPage />} />
        <Route path="/" element={<Navigate to="/assistance" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }
}