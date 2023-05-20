import styled from '@emotion/styled';
import BGImage from '../../images/bgImgUpCard.png';

export const CardStyled = styled.div`
	position: relative;
	width: 330px;
	height: 460px;

	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: center;
	gap: 26px;

	border-radius: 20px;
	background-color: #5736a3;

	background-image: url(${BGImage});
	background-repeat: no-repeat;
	background-position: 36px 28px;
`;
export const CardMiddleLine = styled.div`
	position: absolute;
	top: 214px;
	left: 0px;

	width: 330px;
	height: 8px;

	background-color: #ebd8ff;

	box-shadow: inset 0px 3.44px 2.58px #fbf8ff,
		inset 0px 3.44px 3.44px rgba(0, 0, 0, 0.06),
		inset 0px -1.72px 3.44px #ae7be3;
`;
export const LogoImg = styled.img`
	position: absolute;
	top: 20px;
	left: 20px;
`;
export const AvatarWrapper = styled.div`
	box-sizing: border-box;
	position: absolute;
	top: 214px;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	justify-content: center;
	align-items: center;

	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #ebd8ff;

	box-shadow: inset 0px 4.39px 3.29px #fbf8ff,
		inset 0px 4.39px 4.39px rgba(0, 0, 0, 0.06),
		inset 0px -2.2px 3.39px #ae7be3;
`;
export const AvatarWrapperIns = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;

	overflow: hidden;
	box-shadow: 0px 4.39px 3.29px #fbf8ff, 0px 4.39px 4.39px rgba(0, 0, 0, 0.06),
		0px -2.2px 3.39px #ae7be3;
`;

export const Avatar = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const UserInf = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`;
export const Tweets = styled.p`
	font-size: 20px;
	line-height: 1.22;
	color: #fff;
`;
export const Followers = styled(Tweets)``;

export const ButtonStyled = styled.button`
	display: block;
	cursor: pointer;
	margin-bottom: 36px;
	padding: 14px 56px;

	border-radius: 10px;
	border: none;
	background-color: #ebd8ff;
`;
export const ButtonStyledActive = styled(ButtonStyled)`
	background-color: #5cd3a8;
`;
