import { Box, AppBar, Toolbar, Button } from '@material-ui/core';

import logo from '../images/logo.svg';
import Nav from './Nav';
import HeaderContacts from './HeaderContacts';

const Header = () => {
  return (
    <Box>
      <AppBar position="relative">
        <Toolbar disableGutters>
          <Box>
            <Box display="flex" color="white">
              <Button href="/">
                <img style={{ width: '100%' }} src={logo} alt="Logo" />
              </Button>
              {/* <Button color="inherit" variant="outlined">En</Button> */}
            </Box>
            <Nav />
          </Box>
          <Box display={{ xs: 'none', sm: 'flex' }} width={1 / 3} p={1} justifyContent="flex-end">
            <HeaderContacts />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;