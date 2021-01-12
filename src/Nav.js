import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';

const dataNav = [
  {
    id: 1,
    name: 'Юридическая помощь',
    page: '/assistance'
  },
  {
    id: 2,
    name: 'Контактная информация',
    page: '/contacts'
  },
  {
    id: 3,
    name: 'О себе',
    page: '/about'
  },
]

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
      {dataNav.map(item => {
        return (
          <Tab
            component={NavLink}
            label={item.name}
            to={item.page}
            value={item.page} />
        )
      })}
    </Tabs>


    // <ButtonGroup variant="text" fullWidth>
    //   {dataNav.map(item => {
    //     return (
    //       <Button
    //         component={NavLink}
    //         to={item.page}
    //         style={{ textTransform: 'none' }}
    //         variant="outlined"
    //       >
    //         <Box color="white"
    //           fontSize={{ xs: 'subtitle.fontSize', md: 'h6.fontSize' }}
    //           align="center">
    //           {item.name}
    //         </Box>
    //       </Button>
    //     )
    //   })}
    // </ButtonGroup >
  )
}

export default Nav;