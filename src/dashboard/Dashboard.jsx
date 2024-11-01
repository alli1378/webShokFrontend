import React from 'react'
import Sidebar from '../dashboard/sidebar/Sidebar'
import S from '../dashboard/sidebar/S'
// import Layout from 'antd/lib/layout/layout'
import ArticleList from './components/ArticleList'
import Layout from '../components/layout/Layout'
import {Switch,Route, BrowserRouter} from  'react-router-dom'
import ProductList from './components/Product/ProductList'
import ProductCreate from './components/Product/ProductCreate'
import PantsList from './components/Pants/PantsList'
import ShirtList from './components/Shirt/ShirtList'
import ShoseList from './components/Shose/ShoseList'
import UserList from './components/User/UserList'
import CategoryList from './components/Category/CategoryList'
import Demo from './components/Brand/BrandList'
import BrandCreate from './components/Brand/BrandCreate'
const Dashord = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/dashboard/article-list' component={ArticleList}></Route>
                    <Route path='/dashboard/pants-list' component={PantsList}></Route>
                    <Route path='/dashboard/shose-list' component={ShoseList}></Route>
                    <Route path='/dashboard/shirt-list' component={ShirtList}></Route>
                    <Route path='/dashboard/user-list' component={UserList}></Route>
                    <Route path='/dashboard/category-list' component={CategoryList}></Route>
                    <Route path='/dashboard/brand-list' component={Demo}></Route>
                    <Route path='/dashboard/brand-create' component={BrandCreate}></Route>
                    <Route path='/dashboard/product-create'  component={ProductCreate}></Route>
                    <Route path='/'  component={ProductList}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Dashord
