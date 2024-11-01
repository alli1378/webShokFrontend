import React,{useState,useEffect} from 'react'
import {getAllarticleList} from '../../../actions/Dashboard'
// import from ''
import { useSelector, useDispatch } from "react-redux";
import Sidebar from '../../../dashboard/sidebar/Sidebar'
import '../../../assets/css/Al.css'
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'
const Al = ({toggle3,toggleCollapsed}) => {
    const [num, setnum] = useState(1)
    const [toggle, settoggle] = useState(false)
    const [toggle2, settoggle2] = useState(false)
    const [toggle4, settoggle4] = useState(false)
    const [toggle5, settoggle5] = useState(false)
    const [toggle6, settoggle6] = useState(false)
    const [toggle7, settoggle7] = useState(false)
    const [toggle8, settoggle8] = useState(false)
    // const [toggle3, settoggle3] = useState(true)
    // const Li=(key)=>{setnum(key);settoggle(true)}

    const user = useSelector(state => state.User.user);
    const Articles = useSelector(state => state.ArticleList);
    const dispatch = useDispatch();
    return (

        <div className={toggle3?' sidebar-main ':' sidebar-main nav-link-min'}>
           {/* <div className="" onClick={toggleCollapsed} style={{color:'red'}}> سلام</div> */}
           <div className="logo-sidebar">
           
           </div>
            {/* <section className="hexagon-gallery d-flex  justify-content-center  " >
                <div className="hex "><img className='img-logo' src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/></div>
            </section> */}
            {/* <section className="section  rtl"> */}
                    <div className=' mt-4 mr-2 rtl d-flex'>       
                        <img className='art-img' alt="" src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg"/>
                        <h5  className={toggle3?"d-flex  justify-content-center mt-3 ml-3 link_name ":'link-name-2'} style={{color:'wheat'}}>{user.last_name}</h5>
                        
                    </div>
                {/* <u></u>
                </section>  */}
            {/* <h4  className="d-flex  justify-content-center ">علی رضا</h4> */}
           <ul className="nav_link rtl " style={{paddingRight:'0' ,paddingBottom:'0'}}>
                <li className='li-link ' >
                    <div className="icon-link" >
                        <Link className='li-link'>
                            {/* <i className='icon-link-main  bx bxs-edit'></i> */}
                            <i class='icon-link-main bx bxl-blogger'></i>
                            <span className={toggle3?"link_name":' link-name-2 '} >مقالات</span>
                        </Link>
                        <i className={toggle3?'bx bxs-chevron-down arrow ':''} onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i>
                    </div>
                    <ul className='pr-0  sub-menu rtl  '>
                        <li className={!toggle?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link'to='/dashboard/article-list'>
                                    
                                    {/* <i className='icon-link-main bx bxs-edit'></i> */}
                                    <i class='icon-link-main bx bx-list-ul'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >لیست مقالات </span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        <li className={!toggle?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/article-create'>
                                    <i className='icon-link-main bx bxs-edit'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >ایجادمقاله </span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                               
                           
                    </ul>
                </li>
                <li className='li-link ' >
                    <div className="icon-link" >
                        <Link className='li-link'>
                            {/* <i className='icon-link-main  bx bxs-edit'></i> */}
                            <i className='icon-link-main bx bx-package'></i>
                            <span className={toggle3?"link_name":' link-name-2 '} >محصولات</span>
                        </Link>
                        <i className={toggle3?'bx bxs-chevron-down arrow ':''} onClick={()=>{settoggle2(!toggle2);console.log(toggle2);}}></i>
                    </div>
                    <ul className='pr-0  sub-menu rtl  '>
                        <li className={!toggle2?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/product-list'>
                                    {/* <i className='icon-link-main bx bxs-edit'></i> */}
                                    <i class='icon-link-main bx bx-list-ul'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >لیست محصولات</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        <li className={!toggle2?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/product-create'>
                                    <i className='icon-link-main bx bxs-edit'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >ایجاد محصول</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        
                               
                        
                    </ul>
                </li>
                <li className='li-link ' >
                    <div className="icon-link" >
                        <Link className='li-link'>
                            {/* <i className='icon-link-main  bx bxs-edit'></i> */}
                            <i class='icon-link-main bx bx-briefcase-alt-2'></i>
                            <span className={toggle3?"link_name":' link-name-2 '} >ویژگی(کفش)</span>
                        </Link>
                        <i className={toggle3?'bx bxs-chevron-down arrow ':''} onClick={()=>{settoggle4(!toggle4);console.log(toggle4);}}></i>
                    </div>
                    <ul className='pr-0  sub-menu rtl  '>
                        <li className={!toggle4?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/shose-list'>
                                    {/* <i className='icon-link-main bx bxs-edit'></i> */}
                                    <i class='icon-link-main bx bx-list-ul'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >لیست کفش</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        <li className={!toggle4?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/shose-create'>
                                    <i className='icon-link-main bx bxs-edit'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >ایجاد کفش</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        
                               
                        
                    </ul>
                </li>
                <li className='li-link ' >
                    <div className="icon-link" >
                        <Link className='li-link'>
                            {/* <i className='icon-link-main  bx bxs-edit'></i> */}
                            <i class='icon-link-main bx bxs-t-shirt'></i>
                            <span className={toggle3?"link_name":' link-name-2 '} >ویژگی(پیراهن)</span>
                        </Link>
                        <i className={toggle3?'bx bxs-chevron-down arrow ':''} onClick={()=>{settoggle6(!toggle6);console.log(toggle6);}}></i>
                    </div>
                    <ul className='pr-0  sub-menu rtl  '>
                        <li className={!toggle6?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/shirt-list'>
                                    {/* <i className='icon-link-main bx bxs-edit'></i> */}
                                    <i class='icon-link-main bx bx-list-ul'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >لیست پیراهن</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        <li className={!toggle6?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/shirt-create'>
                                    <i className='icon-link-main bx bxs-edit'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >ایجاد پیراهن</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        
                        <li className='li-link ' >
                    <div className="icon-link" >
                        <Link className='li-link'>
                            {/* <i className='icon-link-main  bx bxs-edit'></i> */}
                            <i class='icon-link-main bx bxs-component'></i>
                            <span className={toggle3?"link_name":' link-name-2 '} >ویژگی(شلوار)</span>
                        </Link>
                        <i className={toggle3?'bx bxs-chevron-down arrow ':''} onClick={()=>{settoggle5(!toggle5);console.log(toggle5);}}></i>
                    </div>
                    <ul className='pr-0  sub-menu rtl  '>
                        <li className={!toggle5?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/pants-list'>
                                    {/* <i className='icon-link-main bx bxs-edit'></i> */}
                                    <i class='icon-link-main bx bx-list-ul'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >لیست شلوار</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        <li className={!toggle5?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/pants-create'>
                                    <i className='icon-link-main bx bxs-edit'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >ایجاد شلوار</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        
                               
                        
                    </ul>
                </li>
                           
                        
                    </ul>
                </li>
                <li className='li-link ' >
                    <div className="icon-link" >
                        <Link className='li-link'>
                            {/* <i className='icon-link-main  bx bxs-edit'></i> */}
                            <i class='icon-link-main bx bx-category-alt'></i>
                            <span className={toggle3?"link_name":' link-name-2 '} >دسته بندی</span>
                        </Link>
                        <i className={toggle3?'bx bxs-chevron-down arrow ':''} onClick={()=>{settoggle7(!toggle7);console.log(toggle7);}}></i>
                    </div>
                    <ul className='pr-0  sub-menu rtl  '>
                        <li className={!toggle7?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/category-list'>
                                    {/* <i className='icon-link-main bx bxs-edit'></i> */}
                                    <i class='icon-link-main bx bx-list-ul'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >لیست دسته بندی</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        <li className={!toggle7?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/category-create'>
                                    <i className='icon-link-main bx bxs-edit'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >ایجاد دسته بندی</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        
                               
                        
                    </ul>
                </li>                       
                <li className='li-link ' >
                    <div className="icon-link" >
                        <Link className='li-link'>
                            {/* <i className='icon-link-main  bx bxs-edit'></i> */}
                            <i class='icon-link-main bx bxl-sketch'></i>
                            <span className={toggle3?"link_name":' link-name-2 '} >برند</span>
                        </Link>
                        <i className={toggle3?'bx bxs-chevron-down arrow ':''} onClick={()=>{settoggle8(!toggle8);console.log(toggle8);}}></i>
                    </div>
                    <ul className='pr-0  sub-menu rtl  '>
                        <li className={!toggle8?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/brand-list'>
                                    {/* <i className='icon-link-main bx bxs-edit'></i> */}
                                    <i class='icon-link-main bx bx-list-ul'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >لیست برند</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        <li className={!toggle8?'li-link  sidebar-close  ':'li-link show-menu  '} >
                            <div className=" sidebar-menu-special " >
                                <Link className='li-link' to='/dashboard/brand-create'>
                                    <i className='icon-link-main bx bxs-edit'></i>
                                    <span className={toggle3?"link_name":' link-name-2 '} >ایجاد برند</span>
                                </Link>
                                {/* <i className='bx bxs-chevron-down arrow 'onClick={()=>{settoggle(!toggle);console.log(toggle);}}></i> */}
                            </div>
                        </li>
                        
                               
                        
                    </ul>
                </li>      
           </ul>
        </div>
        
    )
}

export default Al
