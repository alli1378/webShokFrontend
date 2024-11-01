import { isEmpty } from 'lodash'
import React from 'react'
import { Link, Redirect,useHistory } from 'react-router-dom'
import {useSelector} from 'react-redux'
import A from '../assets/image/men.jpg' 
import { Helmet } from 'react-helmet'
function Profile() {
    const user = useSelector(state => state.User.user)
    const isAuthenticated = useSelector(state => state.User.is_Autenticated)
    const history=useHistory()
    console.log(isAuthenticated);
    if(isAuthenticated===false){
        history.push('/')
    }
    // else{
        
        
    // }
    // console.log('k');
    return (
        <div>
            <Helmet>
            <title>
                وب شاک|پروفایل 
            </title>
        </Helmet>
            <div className="container mt-5">
                <div className="row rtl">
                    <div className="col-lg-3 col-md-8 col-12"> 
                        <div class="card" >
                            <img class="card-img-top" src={A} alt="Card image cap"/>
                            <div class="card-body">
                                    {isAuthenticated===true &&user.is_seller || user.is_superuser?
                                <Link to='/dashboard'><p class="card-text">ورود به داشبورد</p></Link>:
                                <p></p>
                                }
                                {isAuthenticated===true &&user.is_author ?
                                <Link to='/dashboard/article-list'><p class="card-text">ورود به داشبورد</p></Link>:
                                <p></p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-12">
                    { user ?
                        <div class="card">
                            <div class="card-header">
                                <h5>
                                    اطلاعات کاربری
                                </h5>
                            </div>
                            
                                <div class="card-body">
                                <p className='d-flex'>
                                    {user.email}
                                </p>
                                <p className='d-flex'>
                                    {user.first_name}{user.last_name}
    
                                </p>
                                <p className='d-flex'>
                                    {user.is_author?"kk":''}
                                </p>
                                <p className='d-flex'>
                                    {user.is_seller?"kk":''}
                                </p>
                                <p className='d-flex'>
                                    {user.username}
                                </p>
                            </div>
                        </div>
                    :    
                        <></> 
                        }
                    </div>
                    <div className="col-3"></div>

                </div>
            </div>
        </div>
    )
}

export default Profile
// const mapStateToProps=state=>({
//     isAutenticated:state.User.is_Autenticated,
//     user:state.User.user 
//   })