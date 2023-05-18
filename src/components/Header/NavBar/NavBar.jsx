import React from 'react'
import { NavLink } from 'react-router-dom'
import {AppBar, Toolbar, Typography } from '@mui/material';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
          <Typography
            variant='h3'
            component='span'
          >Tweets
          </Typography>
      </Toolbar>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/tweets'>Tweets</NavLink>
    </AppBar>
  )
}
