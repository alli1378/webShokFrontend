import {React,Fragment,useState,useEffect} from 'react'
import Sidebar from '../../dashboard/sidebar/Sidebar'
import S from '../../dashboard/sidebar/S'
import Routes from '../Routes'
import Header from '../../dashboard/sidebar/header'
import LayoutList from './LayoutList'
import ArticleList from '../../dashboard/components/ArticleList'
import { BrowserRouter, Route} from 'react-router-dom'
import { MenuUnfoldOutlined , MenuOutlined} from '@ant-design/icons';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import {load_user,checkAuthenticated} from '../../actions/User'
import Al from '../../Main/components/Article/Al'
// import { useState } from 'react'; 
import {Button} from 'antd'
const Layout = ({load_user,checkAuthenticated, children}) => {
    const [toggle3, settoggle3] = useState(true)
    const [toggle, settoggle] = useState(true)
    
    useEffect(() => {
        checkAuthenticated();
        load_user();    
        }, [])
    
    
    let toggleCollapsed = () => {
        settoggle3(!toggle3);
        console.log(toggle3);
      };
    
    return (
        <Fragment >
            <div style={{backgroundColor:' #cdd4db',minHeight:'45rem'}}>

            
            <Header toggle3={toggle3}toggleCollapsed={toggleCollapsed}>
               
            </Header>
           
            <div className={!toggle3?" col-11   rtl":'col-lg-10 col-8  rtl'}> 
            
            {children}
            </div>
            <Al toggle3={toggle3}toggleCollapsed={toggleCollapsed}></Al>

        
            
            
            </div>
        </Fragment>
        
    )
}

export default connect(null,{load_user,checkAuthenticated})(Layout)
