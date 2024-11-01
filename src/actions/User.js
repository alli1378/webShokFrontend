import axios from 'axios'
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
    AUTHENTICATED_MID ,

    PASSWORD_RESET_FAIL ,
    PASSWORD_RESET_SUCCESS ,
    PASSWORD_RESET_CONFIRM_FAIL ,
    PASSWORD_RESET_CONFIRM_SUCCESS ,
    LOGOUT 


}
from './types'
import { toast } from 'react-toastify'



export const load_user=()=> async dispatch =>{
    // console.log(localStorage.getItem('access'));
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
            
        }
        try {
            const res =await axios.get(`http://localhost:8000/api/auth/users/me/` ,config)
            dispatch({
                type:USER_LOADED_SUCCESS,
                payload:res.data
            })
            

        } catch (error) {
            dispatch({
                type:USER_LOADED_FAIL
            })
        }

    } else {
        
        dispatch({
            type:USER_LOADED_FAIL
        })
        
    }
}

export const checkAuthenticated=()=> async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'
            }
        }
        const body=JSON.stringify({ token: localStorage.getItem('access')})
        const body2=JSON.stringify({ refresh: localStorage.getItem('refresh')})
        try {
            const res =await axios.post(`http://localhost:8000/api/auth/jwt/verify/`, body ,config)
            console.log(res.data.code);
            if(res.data.code !== 'token_not_valid'){
                console.log(res.data.code);
                dispatch({
                    type:AUTHENTICATED_SUCCESS
                })
            }else{
                // console.log(res.data.code);
                // const res2 =await axios.post(`http://localhost:8000/api/auth/jwt/refresh/`, body2 ,config)
                // const body3=JSON.stringify({ refresh: res2.data.access})
                
                // if (localStorage.getItem('access')) {
                    // const res3 =await axios.post(`http://localhost:8000/api/auth/jwt/verify/`, body3 ,config)
                    //         console.log(res3.data.code);
                    //         if(res3.data.code !== 'token_not_valid'){
                        //             console.log(res3.data.code);
                            dispatch({
                                type:AUTHENTICATED_FAIL,
                                // payload:res2.data
                            })  
                            // } 
                            // else {
                                
                                //     dispatch({
                                    //         type:AUTHENTICATED_FAIL
                                    //     })
                                    // }
                                    // }
                                }
                                
        } catch (error) {
            const res2 =await axios.post(`http://localhost:8000/api/auth/jwt/refresh/`, body2 ,config)
            localStorage.setItem('access',res2.data.access)
            const body3=JSON.stringify({ refresh: res2.data.access})
        
        if (localStorage.getItem('access')) {
            const res3 =await axios.post(`http://localhost:8000/api/auth/jwt/verify/`, body3 ,config)
                    console.log(res3.data.code);
                    if(res3.data.code !== 'token_not_valid'){
                            console.log(res3.data.code);
                    dispatch({
                        type:AUTHENTICATED_SUCCESS,
                        // payload:res2.data
                    })  
                    } 
                    else {
                        
                            dispatch({
                                    type:AUTHENTICATED_FAIL
                                })
                            }
                            }

            // dispatch({
            //     type:AUTHENTICATED_MID,
            //     payload:res2.data
    // })  
        //     dispatch({
        //         type:AUTHENTICATED_FAIL
        //     })
        // }


    }}
    else{
        // const config={
        //     headers:{
        //         'Content-Type':'application/json',
        //         'Accept': 'application/json'
        //     }
        // }
        // const body2=JSON.stringify({ refresh: localStorage.getItem('refresh')})

        // const res2 =await axios.post(`http://localhost:8000/api/auth/jwt/refresh/`, body2 ,config)

        dispatch({
            type:AUTHENTICATED_FAIL,
            // payload:res2.data
})  
    }
}


export const login=user=> async dispatch =>{
    // await dispatch({type:"SET_USER",payload:user})
    const config={
        headers:{
            'Content-Type':'application/json'
        }

    }
    const body=JSON.stringify(user)
    try {
        const res =await axios.post(`http://localhost:8000/api/auth/jwt/create/` ,body,config)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data,
            payload2:res.status
        })
        if(res.status === 200){
            console.log('hello');
            toast.success("شما با موفقیت وارد شدید.",
                {position:'top-right',
                closeOnClick:true})
            console.log(res.data);
            // history.push('/')

    }   

        console.log(res.status);
        dispatch(load_user())
        return true
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL
        })
        console.log('hello');
        // console.log(ex);
        toast.error("مشکلی پیش آمده.",
                {position:'top-right',
                closeOnClick:true})
        return false
    }
    
}
export const siginup=user=> async dispatch =>{
    // await dispatch({type:"SET_USER",payload:user})
    const config={
        headers:{
            'Content-Type':'application/json'
        }

    }
    const body=JSON.stringify(user)
    try {
        const res =await axios.post(`http://localhost:8000/api/auth/users/` ,body,config)
        dispatch({
            type:SIGNUP_SUCCESS,
            payload:res.data,
            payload2:res.status
        })
        if(res.status === 201){
            console.log('hello');
            toast.success("شما با موفقیت وارد شدید.",
                {position:'top-right',
                closeOnClick:true})

    }   

        
        return true
    } catch (error) {
        dispatch({
            type:SIGNUP_FAIL
        })
        // toast.error("مشکلی پیش آمده.",
        //         {position:'top-right',
        //         closeOnClick:true})
        return false
    }
    
}
export const activate=(uid,token)=> async dispatch =>{
    // await dispatch({type:"SET_USER",payload:user})
    const config={
        headers:{
            'Content-Type':'application/json'
        }

    }
    const body=JSON.stringify({uid,token})
    try {
        await axios.post(`http://localhost:8000/api/auth/users/activation/` ,body,config)
        dispatch({
            type:ACTIVATION_SUCCESS
        })
        
        
    } catch (error) {
        dispatch({
            type:ACTIVATION_FAIL
        })
        
    }
    
}
export const reset_password=(email)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }

    }
    const body=JSON.stringify(email)
    try {
        const res =await axios.post(`http://localhost:8000/api/auth/users/reset_password/` ,body,config)
        dispatch({
            type:PASSWORD_RESET_SUCCESS,
            
        })
        return true
    } catch (error) {
        dispatch({
            type:PASSWORD_RESET_FAIL
        })
        return false
    }
}

export const reset_password_confirm=(uid,token,new_password,re_new_password)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }


    }
    const body=JSON.stringify({uid,token,new_password,re_new_password})
    try {
        const res =await axios.post(`http://localhost:8000/api/auth/users/reset_password_confirm/` ,body,config)
        dispatch({
            type:PASSWORD_RESET_CONFIRM_SUCCESS,
            
        })
        return true
    } catch (error) {
        dispatch({
            type:PASSWORD_RESET_CONFIRM_FAIL
        })
        return false
    }

}

export const logout=()=>{
    return  dispatch=>{
         dispatch({type:LOGOUT})
    }
}
