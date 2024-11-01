import React,{useRef,useState} from 'react'
import { toast } from 'react-toastify' 
import SimpleReactValidator from 'simple-react-validator'
import {  Link,useHistory,Redirect } from "react-router-dom"
import '../assets/css/registration.css'
import logo from'../assets/image/logo.png'
import { registerUser } from '../services/userService'
import {siginup} from '../actions/User'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

const Register = ({siginup,isAutenticated}) => {
    // "email":"ali.devnasri@gmail.com",
    // "username":"alii",
    // "password":"hosein1374",
    // "re_password":"hosein1374"

    // const
    const history=useHistory()
    const [email, setemail] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [re_password, setre_password] = useState('')
    const [,forceUpdate]=useState()
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
    const reset=()=>{
        setemail("")
        setusername("")
        setpassword("")
        setre_password("")
    }
    if (isAutenticated===true) {
        return <Redirect to='/'></Redirect>
    }
    const handleSubmit=async event=>{
        event.preventDefault()
        const user={email,username,password,re_password}
        if (validator.current.allValid()) {
            if( siginup(user))
                reset()
                history.push('/login')
            
        }
        else{
            validator.current.showMessages()
            forceUpdate(1)
        }
    
    }


    return (
        <div className='center rtl '>
        {/* <h4 className='d-flex justify-content-center '>ورود</h4>             */}
        <Helmet>
            <title>
                وب شاک|ثبت نام 
            </title>
        </Helmet>
        <img src={logo}  alt="" style={{height:'6rem',width:'6rem',marginRight:'6.9rem'}}/>
        <div className="button d-flex justify-content-center">
            <button className="button-registration1 mr-1" >
                <Link
                    to="/login"
                    className='link-registration'
                >
                   ورود
                </Link></button>
            <button className="button-registration">
                            <Link
                                to="/register"
                                activeStyle={{ color:'' }}
                                className='link-registration'
                            >
                                ثبت نام
                            </Link>
                </button>
        </div>
        <form method="post" className="" onSubmit={handleSubmit}>
        <div className="text_filed">
                <input  type='text'name='email' value={email} onChange={e=>{
                    setemail(e.target.value)
                    validator.current.showMessageFor('email')
                }
                } 
                    
                    required='none'/>
                <span></span>
                <label>ایمیل</label>
                
            </div>
            <p>
                {validator.current.message('email',email,'required|email')}
            </p>
            <div className="text_filed">
                <input type='text' name='username' value={username} 
                onChange={e=>{
                    setusername(e.target.value)
                    validator.current.showMessageFor('username')
                }} required='none'/>
                <span></span>
                <label>نام کاربری 

                </label>
                
            </div>
            <p>{validator.current.message('username',username,'required|min:5')}</p>
            <div className="text_filed">
                <input type={passwordIcon?'password':'text'} name='password' value={password}
                 onChange={e=>{
                     setpassword(e.target.value)
                     validator.current.showMessageFor('password')
                     }} required='none'/>
                <span></span>
                <label>رمز عبور</label>
                <i class={passwordIcon?'bx bx-lock-alt':'bx bx-lock-open-alt'}onClick={toggle} ></i>

            </div>
            <p> {validator.current.message('password',password,'required|min:5')}</p>
            <div className="text_filed">
                <input type={passwordIcon?'password':'text'} name='re_password' value={re_password} 
                onChange={
                    e=>{
                        setre_password(e.target.value)
                        validator.current.showMessageFor('re_password')
                }} required='none'/>
                <span></span>
                <label>رمز عبور</label>
               
                <i class={passwordIcon?'bx bx-lock-alt':'bx bx-lock-open-alt'}onClick={toggle} ></i>
                
            </div>  
            <p>{validator.current.message('re_password',re_password,'required|min:5')}</p>
            <div className="button-mother">
                <input className='button-submit w-100  mb-3' type="submit" value='ورود'/>
            </div>
            {/* <div className="pass pb-4">آیارمز عبور را فراموش کرده اید؟</div> */}
            
            
        </form>  
    </div>
    )
}
const mapStateToProps=state=>({
    isAutenticated:state.User.is_Autenticated
})
export default connect(mapStateToProps,{siginup})(Register)
