import React from 'react'
import {AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {NavBarLink} from './NavBar.styled'


export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
          <IconButton edge="start">
            <HowToRegIcon />
          </IconButton>
          <NavBarLink to='/'>Home</NavBarLink>
        <NavBarLink to='/tweets'>Tweets</NavBarLink>
      </Toolbar>
        
        
    </AppBar>
  )
}
