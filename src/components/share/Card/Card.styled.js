import styled from '@emotion/styled'
import BGImage from '../../../images/bgImgUpCard.png'


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

    width: 330px;
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
    
    outline: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: inset 0px 4.39px 3.29px #FBF8FF,
    inset 0px 4.39px  4.39px rgba(0, 0, 0, 0.06),
    inset 0px -2.2px 3.39px #AE7BE3;
`
export const AvatarWrapperIns = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    
    outline: 1px solid green;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    /* box-shadow: inset 0px 3.44px 2.58px #FBF8FF,
    inset 0px 3.44px  3.44px rgba(0, 0, 0, 0.06),
    inset 0px -1.72px 3.44px #AE7BE3; */
`

export const Avatar = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    
    /* box-shadow: 0px 3.44px 2.58px #FBF8FF,
    0px 3.44px  3.44px rgba(0, 0, 0, 0.06),
    0px -1.72px 3.44px #AE7BE3; */

    
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

export const ButtonStyled = styled.button`
    display: block;
    cursor: pointer;
    margin-bottom: 36px;
    padding: 14px 56px;

    border-radius: 10px;
    border: none;
    background-color: #EBD8FF;
`
export const ButtonStyledActive = styled(ButtonStyled)`
    background-color: #5CD3A8;
`