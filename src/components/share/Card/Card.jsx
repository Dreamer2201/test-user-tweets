import React from 'react'
import {CardStyled, CardMiddleLine, LogoImg, AvatarWrapper, Avatar, UserInf, Tweets, Followers } from './Card.styled'
import Logo from '../../../images/Logo.png'
import Button from '../Button/Button'

export default function Card() {
  return (
    <CardStyled>
        <LogoImg src={Logo} />
        <CardMiddleLine />
        <AvatarWrapper>
                <Avatar />
        </AvatarWrapper>
        <UserInf>
            <Tweets>
                4444
            </Tweets>
            <Followers>
                222222
            </Followers>
        </UserInf>
        <Button>FOLLOW</Button>
    </CardStyled>
  )
}
