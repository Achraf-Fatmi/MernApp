import axios from 'axios';
import { EDIT_USER, GET_USER, GET_USERS_FAIL, GET_USERS_LOAD, GET_USERS_SUCCESS } from "../constant/actionTypes";

export const getUsers=()=> async(dispatch)=>{
    dispatch({type: GET_USERS_LOAD})
    try {
        let result =  await axios.get(`/api/user/`)
        dispatch ({type: GET_USERS_SUCCESS, payload : result.data.response})
        console.log(result);
    } catch (error) {
        dispatch ({type: GET_USERS_FAIL , payload: error})
        console.log(error)
    }
}

export const deleteUser = (id)=>(dispatch)=>{
    axios.delete(`api/user/${id}`)
    .then((res)=>dispatch(getUsers()))
    .catch((err)=>console.log(err))
}

export const getUser= (id)=>(dispatch)=>{
    axios.get(`/api/user/${id}`)
    .then ((res)=>dispatch({type:GET_USER, payload:res.data.response}))
    .catch((err)=>console.log(err))
}

export const  editUser= (id, user)=>(dispatch)=>{
    axios.put(`/api/user/${id}`, user)
    .then((res)=>{
        dispatch ({type: EDIT_USER, payload: res.data.response})
    })
    .then (dispatch(getUsers()))
    .catch((err)=>console.log(err))
}

export const addUser= (user)=> async(dispatch)=>{
    try {
        await axios.post(`/api/user/users`, user)
        dispatch (getUsers())
    } catch (error) {
        console.log(error)
    }
}