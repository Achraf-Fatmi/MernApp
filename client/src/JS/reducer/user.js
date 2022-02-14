import { EDIT_USER, GET_USER, GET_USERS_FAIL, GET_USERS_LOAD, GET_USERS_SUCCESS } from "../constant/actionTypes";


const initialState = {
    users:[],
    loadUser : false,
    user: {},
    editUser: "",
    errors: []
}

export const userReducer = (state= initialState, {type, payload})=>{
    switch (type){
        case GET_USERS_LOAD:
            return {...state, loadUser:true}

        case GET_USERS_SUCCESS:
            return {...state, users:payload, loadUser:false}

        case GET_USERS_FAIL:
            return {...state,loadUser:false, errors : payload}
        case GET_USER:
            return {...state , user : payload}
        case EDIT_USER:
            return {...state , editUser:payload}
        default:
            return state;
    }
}