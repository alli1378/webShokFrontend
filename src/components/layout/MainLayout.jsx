import {React,Fragment,useState,useEffect} from 'react'
import Sidebar from '../../dashboard/sidebar/Sidebar'
import S from '../../dashboard/sidebar/S'
import Routes from '../Routes'
import Header from '../../Main/components/Header'
import LayoutList from './LayoutList'
import ArticleList from '../../dashboard/components/ArticleList'
import { BrowserRouter, Route} from 'react-router-dom'
import { MenuUnfoldOutlined , MenuOutlined} from '@ant-design/icons';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import {load_user,checkAuthenticated} from '../../actions/User'

// import { useState } from 'react'; 
import {Button} from 'antd'
import Footer   from './../../Main/components/Footer'
import Property from '../../Main/components/Property'
const MainLayout = ({  load_user,checkAuthenticated, children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
    checkAuthenticated();
    load_user();    
    }, [])

    return (
        <Fragment >
            <div>

            
            <Header >

               
            </Header>
            {children}
            <Property/>
            <Footer></Footer>
            </div>
        </Fragment>
        
    )
}

export default connect(null,{checkAuthenticated,load_user})(MainLayout)
