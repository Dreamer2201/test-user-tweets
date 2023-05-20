import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { NavBarLink } from './NavBar.styled';
import imgLogo from 'images/Website-Icon.png';

export default function NavBar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<nav>
					<IconButton edge="start">
						<Link to="/">
							<img src={imgLogo} alt="logo" />
						</Link>
					</IconButton>
					<NavBarLink to="/">Home</NavBarLink>
					<NavBarLink to="/tweets">Tweets</NavBarLink>
				</nav>
			</Toolbar>
		</AppBar>
	);
}
