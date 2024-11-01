import React,{useState,useRef} from 'react'
import { toast } from 'react-toastify'
import {  Link,useHistory,Redirect } from "react-router-dom"
import SimpleReactValidator from 'simple-react-validator'
import '../assets/css/registration.css'
import logo from'../assets/image/logo.png'
import { loginUser } from '../services/userService'
import {activate} from '../actions/User'
import { connect } from 'react-redux'

function Activate({match,activate}) {
    const history=useHistory()

    
    // const [activate, setactivate] = useState(false)
    // const validator= useRef(new SimpleReactValidator({
    //     messages: {
    //         required: "پر کردن این فیلد الزامی میباشد",
    //         min: "کمتر از 5 کاراکتر نباید باشد",
    //         email: "ایمیل نوشته شده صحیح نمی باشد"
    //     },
    //     element: message => <div style={{ color: "red" }}>{message}</div>
    // }))
    // const [passwordIcon, setpasswordIcon] = useState(true)
    // const toggle=()=>{
    //     setpasswordIcon(!passwordIcon)
    // }
    // const reset =()=>{
    //     setnew_password("")
    //     setre_new_password("")
        
    // }
    
    const handleSubmit= event=>{
        const uid=match.params.uid
        const token=match.params.token
        
        // login(user)
        // reset_password_confirm()
        
            if(activate(uid,token)){
                // setrequestSent(true)
                history.push('/login')
                }
                // console.log(login(user))
            // else{
            //     // validator.current.showMessages()
            //     forceUpdate(1)   
            // }
}
    return (
        <div className='center rtl   justify-content-center  '>
            {/* <h4 className='d-flex justify-content-center '>ورود</h4>             */}
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
            
                {/* <div className="text_filed">
                    <input type={passwordIcon?'password':'text'}name='new_password'   value={new_password} 
                    onChange={e=>{
                        setnew_password(e.target.value)
                        validator.current.showMessageFor("new_password")
                    }}
                    required='none'
                    />
                    <span></span>
                    <label>رمز عبور</label>
                    <i class={passwordIcon?'bx bx-lock-alt':'bx bx-lock-open-alt'}onClick={toggle} ></i>
                    
                </div>
                <p >{validator.current.message('new_password',new_password,"required|min:5")}</p>

                <div className="text_filed">
                    <input type={passwordIcon?'password':'text'}name='re_new_password'   value={re_new_password} 
                    onChange={e=>{
                        setre_new_password(e.target.value)
                        validator.current.showMessageFor("re_new_password")
                    }}
                    required='none'
                    />
                    <span></span>
                    <label>تکراررمز عبور</label>
                    <i class={passwordIcon?'bx bx-lock-alt':'bx bx-lock-open-alt'}onClick={toggle} ></i>
                    
                </div>
                <p >{validator.current.message('re_new_password',re_new_password,"required|min:5")}</p> */}

                <button className='button-submit w-100 mb-2 mb-4'  >
                    تایید عضویت
                </button>
                
                
            </form>  
        </div>
    )
}

export default connect(null,{ activate}) (Activate);
