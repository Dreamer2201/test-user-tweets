import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {CardStyled, CardMiddleLine, LogoImg, AvatarWrapper, AvatarWrapperIns, Avatar, UserInf, Tweets, Followers, ButtonStyled, ButtonStyledActive } from './Card.styled'
import Logo from '../../../images/Logo.png'
import { changeUserFollowers } from 'redux/api'

export default function Card({user}) {
  const dispatch = useDispatch();

  const toggleBtnFollowers = (id) => {
    console.log('click')
    console.log(id)
    dispatch(changeUserFollowers(id))
  }

  const formatData =(number) => {
    return new Intl.NumberFormat('en-IN').format(number)
  }

  return (
    <CardStyled>
        <LogoImg src={Logo} />
        <CardMiddleLine />
        <AvatarWrapper>
          <AvatarWrapperIns>
            <Avatar src={user.avatar} />
          </AvatarWrapperIns>
        </AvatarWrapper>
        <UserInf>
            <Tweets>
                {formatData(user.tweets)}
            </Tweets>
            <Followers>
              {formatData(user.followers)}
            </Followers>
        </UserInf>
        {user.isActiveBtn ? <ButtonStyledActive onClick={() => toggleBtnFollowers(user.id)} type="button" >FOLLOWING</ButtonStyledActive> : <ButtonStyled onClick={() => toggleBtnFollowers(user.id)} type="button" >FOLLOW</ButtonStyled>}
    </CardStyled>
  )
}
