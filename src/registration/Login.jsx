import React,{useState,useRef} from 'react'
import { toast } from 'react-toastify'
import {  Link,useHistory,Redirect } from "react-router-dom"
import SimpleReactValidator from 'simple-react-validator'
import '../assets/css/registration.css'
import logo from'../assets/image/logo.png'
import { loginUser } from '../services/userService'
import {login} from '../actions/User'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import {Sugar} from 'react-preloaders2'

function Login({login,isAutenticated}) {
    const history=useHistory()
    // const [,] =useState()
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [, forceUpdate] = useState()
    const validator= useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی میباشد",
            min: "کمتر از 5 کاراکتر نباید باشد",
            email: "ایمیل نوشته شده صحیح نمی باشد"
        }, 
        element: message => <div style={{ color: "red" }}>{message}</div>
    }))
    const [passwordIcon, setpasswordIcon] = useState(true)
    const toggle=()=>{
        setpasswordIcon(!passwordIcon)
    }
    
    const [loading, setloading] = useState(false)
    const reset =()=>{
        setusername("")
        setpassword("")
    }
    if (isAutenticated===true) {
        return <Redirect to='/'></Redirect>
    }
    // console.log(loading);
    // setloading(true)

    const handleSubmit=async event=>{
        event.preventDefault() 
        const user={username,password}
        // login(user)
        if(validator.current.allValid()){
                setloading(true)
                console.log(loading);
                if(login(user)){
                    setloading(false)

                    history.push('/')
                    reset()
                }
                // console.log(login(user))
            }else{
                // validator.current.showMessages()
                // setloading(false)

                forceUpdate(1)   
            }
        
    }
    return (<>
            {/* {loading==true?(<Sugar  customLoading={loading} time={3000}/>):(<p>klk</p>)} */}
        <div className='center rtl   justify-content-center  '>
            {/* <h4 className='d-flex justify-content-center '>ورود</h4>             */}
            <Helmet>
            <title>
                وب شاک|ورود 
            </title>
        </Helmet>
            <img src={logo}  alt="" style={{height:'6rem',width:'6rem',marginRight:'6.9rem'}}/>
            <div className="button d-flex justify-content-center">
            <button className="button-registration1 mr-1" >
                <Link
                    to="/login"
                    className='link-registration'
                >ورود
                </Link>
            </button>
            <button className="button-registration">
                    <Link
                        to="/register"
                        activeStyle={{ color:'' }}
                        className='link-registration'
                        >ثبت نام
                    </Link>
            </button>
            </div>
            <form method="post" onSubmit={handleSubmit}>
                <div className="text_filed">
                    <input type='text' name='username'  
                    value={username} 
                    onChange={e=>{
                        setusername(e.target.value) 
                        validator.current.showMessageFor("username");}}
                        required='none'
                        />
                    <span></span>
                    <label>نام کاربری</label>
                    
                </div>
                <p style={{marginTop:'0',}}>
                    {validator.current.message(
                        "username",
                        username,
                        "required|email"
                        )}
                </p>
                <div className="text_filed">
                    <input type={passwordIcon?'password':'text'}name='password'   value={password} 
                    onChange={e=>{
                        setpassword(e.target.value)
                        validator.current.showMessageFor("password")
                    }}
                    required='none'
                    />
                    <span></span>
                    <label>رمز عبور</label>
                    <i class={passwordIcon?'bx bx-lock-alt':'bx bx-lock-open-alt'}onClick={toggle} ></i>
                    
                </div>
                <p >{validator.current.message('password',password,"required|min:5")}</p>
  
                <button className='button-submit w-100 mb-2 mb-4'  >
                    ورود
                </button>
                <div className="pass pb-4">آیارمز عبور را فراموش کرده اید؟</div>
                
                
            </form>  
        </div>
</>
    )
}
const mapStateToProps=state=>({
    isAutenticated:state.User.is_Autenticated
})
export default connect(mapStateToProps,{ login}) (Login);
