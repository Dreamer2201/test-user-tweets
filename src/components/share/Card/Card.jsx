import React from 'react'
import {CardStyled, CardMiddleLine, LogoImg, AvatarWrapper, Avatar, UserInf, Tweets, Followers } from './Card.styled'
import Logo from '../../../images/Logo.png'
import Button from '../Button/Button'

export default function Card({user}) {
  return (
    <CardStyled>
        <LogoImg src={Logo} />
        <CardMiddleLine />
        <AvatarWrapper>
                <Avatar />
        </AvatarWrapper>
        <UserInf>
            <Tweets>
                {user.tweets}
            </Tweets>
            <Followers>
              {user.followers}
            </Followers>
        </UserInf>
        <Button>FOLLOW</Button>
    </CardStyled>
  )
}
