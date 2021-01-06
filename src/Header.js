import { Box, AppBar, Toolbar, Button } from '@material-ui/core';

import logo from './logo.svg';
import Nav from './Nav';
import HeaderContacts from './HeaderContacts';

const Header = () => {
  return (
    <Box>
      <AppBar position="relative">
        <Toolbar>
          <Box>
            <Button href="/">
              <img style={{ width: '100%' }} src={logo} alt="Logo" />
            </Button>
            <Nav />
          </Box>
          <Box display={{ xs: 'none', sm: 'block' }} width={1 / 3} p={1}>
            <HeaderContacts />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;