import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/tweets'>Tweets</NavLink>
    </nav>
  )
}
