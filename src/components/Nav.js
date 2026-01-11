import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import DataNav from '../data/DataNav';

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(pathname);

  React.useEffect(() => {
    // Если путь корневой, устанавливаем false чтобы MUI Tabs не показывал предупреждение
    if (pathname === '/') {
      setValue(false);
    } else if (pathname.startsWith('/assistance')) {
      // Для всех вложенных маршрутов /assistance/* активна вкладка /assistance
      setValue('/assistance');
    } else {
      setValue(pathname);
    }
  }, [pathname]);

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <Tabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
    >
      {DataNav.map(item => {
        return (
          <Tab
            label={item.name}
            value={item.page}
            key={item.name}
            sx={{
              '&.Mui-selected': {
                fontWeight: 'bold',
              }
            }}
          />
        )
      })}
    </Tabs>
  )
}

export default Nav;