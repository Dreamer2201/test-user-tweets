import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { NavBarLink } from '../Header/NavBar/NavBar.styled';
import { FooterStyled } from './Footer.styled';

export default function Footer() {
	return (
		<FooterStyled>
			<AppBar position="static">
				<Toolbar>
					<NavBarLink to="/">Home</NavBarLink>
					<NavBarLink to="/tweets">Tweets</NavBarLink>
				</Toolbar>
			</AppBar>
		</FooterStyled>
	);
}
