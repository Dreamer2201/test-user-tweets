import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from 'redux/api';
import CardList from 'components/CardsList/CardList';


export default function TweetsPage() {
  const [limit, setLimit] = useState(3)

  const dispatch = useDispatch();
  
  useEffect(() => {
        dispatch(getAllUsers());
  }, [dispatch]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3)
  }

  const users = useSelector(({users}) => users.users)
  console.log(users)
  const isLoading = useSelector((state) => state.loading);
  const isError = useSelector((state) => state.error);

  const usersLimited = users.slice(0, limit)
  return (
    <div>
      <CardList users={usersLimited} />
      <button type='button' onClick={loadMore}>Load more</button>
    </div>
  )
}
