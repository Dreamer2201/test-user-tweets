import styled from '@emotion/styled'
import BGImage from '../../../images/bgImgUpCard.png'


export const CardStyled = styled.div`
    position: relative;
    width: 360px;
    height: 460px;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 26px;

    border-radius: 20px;
    background-color: #5736A3;

    background-image: url(${BGImage});
    /* background-size: 25px 50px; */
    background-repeat: no-repeat;
    background-position: 36px 28px;
`
export const CardMiddleLine = styled.div`
    position: absolute;
    top: 214px;
    left: 0px;

    width: 360px;
    height: 8px;

    /* background-color: #EBD8FF; */
    box-shadow: inset 0px 3.44px 2.58px #FBF8FF,
    inset 0px 3.44px  3.44px rgba(0, 0, 0, 0.06),
    inset 0px -1.72px 3.44px #AE7BE3;
`
export const LogoImg = styled.img`
    position: absolute;
    top: 20px;
    left: 20px;
`
export const AvatarWrapper = styled.div`
    position: absolute;
    top: 214px;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80px;
    height: 80px;
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: inset 0px 3.44px 2.58px #FBF8FF,
    inset 0px 3.44px  3.44px rgba(0, 0, 0, 0.06),
    inset 0px -1.72px 3.44px #AE7BE3;
`

export const Avatar = styled.img`
    display: block;
    width: 72px;
    height: 72px;
    object-fit: cover;
`
export const UserInf = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`
export const Tweets = styled.p`
    font-size: 20px;
    line-height: 1.22;
    color: #fff;
`
export const Followers = styled(Tweets)`

`