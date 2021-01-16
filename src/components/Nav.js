import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';

import DataNav from '../data/DataNav';

const Nav = () => {
  const { pathname } = useLocation();
  const [value, setValue] = React.useState(pathname);

  if (pathname !== value) {
    setValue(pathname)
  }
  return (
    <Tabs
      variant="fullWidth"
      value={value}
    >
      {DataNav.map(item => {
        return (
          <Tab
            component={NavLink}
            label={item.name}
            to={item.page}
            value={item.page}
          />
        )
      })}
    </Tabs>
  )
}

export default Nav;