import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../JS/action/user';
import User from './User';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export const UserList = () => {
    const dispatch = useDispatch()
    const users = useSelector((state)=>state.userReducer.users)
    const loadUsers =  useSelector((state)=>state.userReducer.loadUsers);

useEffect(()=>{
    dispatch(getUsers())
}, [])

  return (
    <div>
        <Link to='/'>
        <Button content='Home' primary  className='HomeButton' />
        </Link>
        {loadUsers? (<h3>loading ...</h3>)
        :users.length===0? (<h3>there are no users</h3>)
        :(users.map((el)=> <User key={el._id} user={el}/>))
    }

    </div>

);
};
