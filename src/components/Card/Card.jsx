import React from 'react';
import { useDispatch } from 'react-redux';
import {
	CardStyled,
	CardMiddleLine,
	LogoImg,
	AvatarWrapper,
	AvatarWrapperIns,
	Avatar,
	UserInf,
	Tweets,
	Followers,
	ButtonStyled,
	ButtonStyledActive,
} from './Card.styled';
import Logo from 'images/Logo.png';
import { changeUserFollowers } from 'redux/api';
import { Grid } from '@mui/material';

export default function Card({ user }) {
	const dispatch = useDispatch();

	const toggleBtnFollowers = id => {
		dispatch(changeUserFollowers(id));
	};

	const formatData = number => {
		return new Intl.NumberFormat('en-IN').format(number);
	};

	return (
		<Grid item>
			<CardStyled>
				<LogoImg src={Logo} />
				<CardMiddleLine />
				<AvatarWrapper>
					<AvatarWrapperIns>
						<Avatar src={user.avatar} />
					</AvatarWrapperIns>
				</AvatarWrapper>
				<UserInf>
					<Tweets>{formatData(user.tweets)}</Tweets>
					<Followers>{formatData(user.followers)}</Followers>
				</UserInf>
				{user.isActiveBtn ? (
					<ButtonStyledActive
						onClick={() => toggleBtnFollowers(user.id)}
						type="button"
					>
						FOLLOWING
					</ButtonStyledActive>
				) : (
					<ButtonStyled
						onClick={() => toggleBtnFollowers(user.id)}
						type="button"
					>
						FOLLOW
					</ButtonStyled>
				)}
			</CardStyled>
		</Grid>
	);
}
