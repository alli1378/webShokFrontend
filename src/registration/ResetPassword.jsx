import React,{useState,useRef} from 'react'
import { toast } from 'react-toastify'
import {  Link,useHistory,Redirect } from "react-router-dom"
import SimpleReactValidator from 'simple-react-validator'
import '../assets/css/registration.css'
import logo from'../assets/image/logo.png'
import { loginUser } from '../services/userService'
import {reset_password} from '../actions/User'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

function ResetPassword({reset_password}) {
    const history=useHistory()

    const [email, setemail] = useState('')
    const [requestSent, setrequestSent] = useState(false)
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
    const reset =()=>{
        setemail("")
        
    }
    
    const handleSubmit=async event=>{
        event.preventDefault() 
        // const uid=match.params.uid
        // const token=match.params.token
        // login(user)
        reset_password(email)
        if(validator.current.allValid()){
            if(reset_password(email)){
                setrequestSent(true)
                history.push('/')
                reset()
                }
                // console.log(login(user))
            }else{
                // validator.current.showMessages()
                forceUpdate(1)   
            }
        
    }
    return (
        <div className='center rtl   justify-content-center  '>
            {/* <h4 className='d-flex justify-content-center '>ورود</h4>             */}
            <Helmet>
            <title>
                وب شاک|تغییررمز 
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
                    value={email} 
                    onChange={e=>{
                        setemail(e.target.value) 
                        validator.current.showMessageFor("email");}}
                        required='none'
                        />
                    <span></span>
                    <label>ایمیل</label>
                    
                </div>
                <p style={{marginTop:'0',}}>
                    {validator.current.message(
                                "email",
                                email,
                                "required|email"
                            )}
                </p>
                <button className='button-submit w-100 mb-2 mb-4'  >
                    تغییر رمرز عبور
                </button>
                
                
            </form>  
        </div>
    )
}

export default connect(null,{ reset_password}) (ResetPassword);
