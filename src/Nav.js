import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: '0.7rem',
  }
}
)

const Nav = () => {
  const classes = useStyles();

  return (
    <ButtonGroup variant="text" fullWidth>
      <Button
        component={NavLink}
        to="/assistance"
        classes={{ label: classes.text }}
      >
        Юридическая помощь
        </Button>
      <Button
        component={NavLink}
        to="/contacts"
        classes={{ label: classes.text }}
      >
        Контактная информация
        </Button>
      <Button
        component={NavLink}
        to="/about"
        classes={{ label: classes.text }}
      >
        О себе
       </Button>
    </ButtonGroup >
  )
}

export default Nav;