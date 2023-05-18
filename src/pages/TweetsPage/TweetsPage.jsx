import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from 'redux/api';
import { changeFilter } from 'redux/filterSlice';
import filterUsers from 'redux/users-selectors';
import CardList from 'components/CardsList/CardList';
import {ButtonLoadMore} from './TweetsPage.styled'
import { Container, TextField } from '@mui/material';
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";


export default function TweetsPage() {
  const navigate= useNavigate()
  const users = useSelector(filterUsers)
  // const isLoading = useSelector((state) => state.loading);
  // const isError = useSelector((state) => state.error);
  const [limit, setLimit] = useState(3)
  const [filter, setFilter] = useState('');
  // const [filteredUsers, setFilteredUsers] = useState([...users])

  let filteredUsers = [...users]

  const filters = ["Show all", "Follow", "Followings"]

  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
}, [dispatch]);


  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3)
  }

  const handleChangeFilter = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value)
    dispatch(changeFilter(e.target.value))
  }

  console.log(filteredUsers)
  const usersLimited = users.slice(0, limit)

  return (
    <Container
    sx={{ mt: '5px'}}
    >
        <button type='button' onClick={() => navigate('/')}>Go back HOME</button>
        <FormControl variant="standard"
            sx={{ 
            marginTop: 5, 
            width: 100 }}>
              <InputLabel shrink>Show All</InputLabel>
        <Select
        sx={{
          width: 250,
          height: 50,
        }}
        label="Show All"
        value={filter}
        onChange={handleChangeFilter}
      >
        {filters.map((item, index) => {
        return <MenuItem key={index} value={item}>{item}</MenuItem>;
        })}
      </Select>
      </FormControl>
        <CardList users={usersLimited} />
        <ButtonLoadMore type='button' onClick={loadMore}>Load more</ButtonLoadMore>
    </Container>
  )
}
