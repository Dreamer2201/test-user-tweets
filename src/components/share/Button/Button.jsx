import React from 'react'
import {ButtonStyled} from './Button.styled'


export default function Button({children}) {
  return (
    <ButtonStyled>
        {children}
    </ButtonStyled>
  )
}
