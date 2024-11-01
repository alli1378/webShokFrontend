import{
    LOGIN_SUCCESS,
    LOGIN_FAIL  ,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    AUTHENTICATED_SUCCESS ,
    AUTHENTICATED_FAIL ,
    AUTHENTICATED_MID,
    PASSWORD_RESET_FAIL ,
    PASSWORD_RESET_SUCCESS ,
    PASSWORD_RESET_CONFIRM_FAIL ,
    PASSWORD_RESET_CONFIRM_SUCCESS ,
    LOGOUT 

}
from '../actions/types'
const intialState={
    access:localStorage.getItem('access'),
    refresh:localStorage.getItem('refresh'),
    is_Autenticated:null,
    user:{}


}


export const UserReducer=(state=intialState,action)=>{
    const {type,payload} =action
    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                is_Autenticated:true
            }


        case LOGIN_SUCCESS:
            console.log(localStorage.getItem('access'));
            localStorage.setItem('access',payload.access)
            localStorage.setItem('refresh',payload.refresh)
    // localStorage.setItem('access')
            return {
                ...state,
                is_Autenticated:true,
                access:payload.access,
                refresh:payload.refresh
                


            };
        case SIGNUP_SUCCESS:
            return{
                ...state,
                is_Autenticated:false
            }
        case USER_LOADED_SUCCESS:
            // console.log(localStorage.getItem('access_token'));
            // localStorage.setItem('access',payload.access)
            // localStorage.setItem('access')
            return {
                ...state,
                user:payload
            };
        case AUTHENTICATED_FAIL:
            // localStorage.setItem('access','dfv')
            
        return{
                ...state,
                is_Autenticated:false
            }
        case   AUTHENTICATED_MID:
            // console.log(localStorage.getItem('access'));
            localStorage.setItem('access',payload.access)
            return {
                ...state,
                // is_Autenticated:true,
                access:payload.access,
            }            
        case USER_LOADED_FAIL:
            return{
                ...state,
                user:null
            }
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access:null,
                refresh:null,
                is_Autenticated:false,
                user:null
                
            };
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return{
                ...state,
                
            }
        default:
            return state;
    }
}