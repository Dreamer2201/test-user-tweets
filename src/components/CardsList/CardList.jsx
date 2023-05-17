import React from 'react'
import Card from 'components/share/Card/Card'
import {CardsList} from './CardList.styled'

export default function CardList({users}) {

    const elements = users.map((item) => {
        return (<Card key={item.id} user={item} />)
   });
   
   return (
           <CardsList> {elements}</CardsList>
   )
}
