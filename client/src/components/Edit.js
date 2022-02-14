import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editUser, addUser} from '../JS/action/user';
import { Button,  Form } from 'semantic-ui-react'

function Edit  ({userID}) {
    const dispatch= useDispatch()
    const userReducer = useSelector((state=> state.userReducer.user))
    const [user,setUser]= useState({name:"",email:"", phone:"" })
    const edit = useSelector((state)=> state.editReducer.edit)
    
    useEffect(()=>{
        edit? setUser(userReducer): setUser({name:"", email:"", phone:""})
    },[userReducer, edit])

    const handleUser =()=>{
      if (!edit){
        dispatch (addUser(user))
      }else{
        dispatch(editUser(userReducer._id, user))
      }
        
    }

    const handleChange= (e)=>{
        e.preventDefault ()
        setUser({...user,[e.target.name]:e.target.value})
    }

  return(
    <Form>
    <Form.Field>
      <label>Name</label>
      <input type="text" placeholder='Name' name ='name' value={user.name} onChange={handleChange}  />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange}/>
    </Form.Field>
    <Form.Field>
     <label> Phone </label>
      <input type= "text" placeholder='Phone Number' name= 'phone' value={user.phone} onChange={handleChange} />
    </Form.Field>
    <Link to="/users" >
    <Button type='submit' onClick={handleUser}>{edit? "Edit" :"Save"}</Button>
    </Link>
  </Form>
  )
};

export default Edit;
