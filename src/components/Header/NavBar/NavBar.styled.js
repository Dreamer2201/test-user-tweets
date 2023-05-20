import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBarLink = styled(NavLink)`
	margin-left: 50px;
	color: #fff;
	&.active {
		color: #5736a3;
	}
`;
