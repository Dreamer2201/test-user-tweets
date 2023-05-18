import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from 'redux/api';
import CardList from 'components/CardsList/CardList';
import {ButtonLoadMore} from './TweetsPage.styled'


export default function TweetsPage() {
  const navigate= useNavigate()
  const users = useSelector(({users}) => users.users)
  console.log(users)
  const isLoading = useSelector((state) => state.loading);
  const isError = useSelector((state) => state.error);
  const [limit, setLimit] = useState(3)

  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(getAllUsers());
  }, [dispatch]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3)
  }

  const usersLimited = users.slice(0, limit)

  return (
    <div>
      <button type='button' onClick={() => navigate('/')}>Go back HOME</button>
      <CardList users={usersLimited} />
      <ButtonLoadMore type='button' onClick={loadMore}>Load more</ButtonLoadMore>
    </div>
  )
}
