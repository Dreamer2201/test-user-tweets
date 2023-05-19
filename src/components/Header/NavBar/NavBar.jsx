import React from 'react'
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {NavBarLink} from './NavBar.styled'
import imgLogo from '../../../images/Website-Icon.png'

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
          <IconButton edge="start">
            <Link to='/'>
            <img src={imgLogo} />  
            </Link>
                    
          </IconButton>
          <NavBarLink to='/'>Home</NavBarLink>
        <NavBarLink to='/tweets'>Tweets</NavBarLink>
      </Toolbar>
        
        
    </AppBar>
  )
}
