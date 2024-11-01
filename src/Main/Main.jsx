import React,{useEffect} from 'react'
import jwt from 'jsonwebtoken'
import Sidebar from '../dashboard/sidebar/Sidebar'
import S from '../dashboard/sidebar/S'
// import Layout from 'antd/lib/layout/layout'
// import ArticleList from './components/ArticleList'
import MainLayout from '../components/layout/MainLayout'
import {Switch,Route, BrowserRouter,useLocation} from  'react-router-dom'
import ProductList from './components/Product/ProductList'
import ArticleList from './components/Article/ArticleList'
import CategoryList from './components/Article/CategoryList'
import { useSelector,useDispatch } from 'react-redux'
import { PaginateProduct } from './utils/PaginateProduct'
import Login from '../registration/Login'
import Register from '../registration/Register'
import ResetPassword from '../registration/ResetPassword'
import ResetPasswordConfirm from '../registration/ResetPasswordConfirm'
import Activate from '../registration/Activate'
import Profile from '../registration/Profile'
import ProductSevice, { getProductsShirt } from '../services/ProductSevice'
import Home from './components/Home'
import { Redirect } from 'react-router-dom'
// import {addUser} from '../actions/User'
import { ToastContainer } from 'react-toastify'
import { isEmpty } from 'lodash'
import  Layout  from '../components/layout/Layout'
import Al from './components/Article/Al'
import  ArticleListd from '../dashboard/components/ArticleList'
import  PantsList from '../dashboard/components/Pants/PantsList'
import  ShoseList from '../dashboard/components/Shose/ShoseList'
import  ShirtList from '../dashboard/components/Shirt/ShirtList'
import  UserList from '../dashboard/components/User/UserList'
import  CategoryListd from '../dashboard/components/Category/CategoryList'
import  BrandList from '../dashboard/components/Brand/BrandList'
import  BrandCreate from '../dashboard/components/Brand/BrandCreate'
// import  BrandUpdate from '../dashboard/components/Brand/BrandEdite'
import  ProductCreate from '../dashboard/components/Product/ProductCreate'
import  ProductListd from '../dashboard/components/Product/ProductList'
import ArticleCreate from '../dashboard/components/Article/ArticleCreate'
import ShirtCreate from '../dashboard/components/Shirt/ShirtCreate'
import ShoseCreate from '../dashboard/components/Shose/ShoseCreate'
import PantsCreate from '../dashboard/components/Pants/PantsCreate'
import CategoryCreate from '../dashboard/components/Category/CategoryCreate'
import CategoryUpdate from '../dashboard/components/Category/CategoryUpdate'
import BrandUpdate from '../dashboard/components/Brand/BrandEdite'
import { getAllarticleList, getAllbrand,getAllCategory,getAllPants, getAllProduct, getAllShirt, getAllShose } from '../actions/Dashboard'
import PantsUpdate from '../dashboard/components/Pants/PantsUpdate'
import ShirtUpdate from '../dashboard/components/Shirt/ShirtUpdate'
import ShoseUpdate from '../dashboard/components/Shose/ShoseUpdate'
import ProductUpdate from '../dashboard/components/Product/ProductUpdate'
import ArticleUpdate from '../dashboard/components/Article/ArticleUpdate'
import { getAllArticles } from '../actions/Articles'
import ProductBrandList from './components/Product/ProductBrand'
import ProductMan from './components/Product/ProductMan'
import ProductWoman from './components/Product/ProductWoman'
import ProductShose from './components/Product/ProductShose'
import ProductPants from './components/Product/ProductPants'
import ProductShirt from './components/Product/ProductShirt'
import ProductDetail from './components/Product/ProductDetail'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound'



const Main = () => {
    const Products=useSelector(state=>state.Products)
    const user=useSelector(state=>state.User.user)
    const dispatch = useDispatch()
    const brand = useSelector(state => state.brandList);
    const category = useSelector(state => state.CategoryList);
    const pants = useSelector(state => state.PantsList);
    const shirt = useSelector(state => state.ShirtList);
    const shose = useSelector(state => state.ShoseList);
    const product = useSelector(state => state.ProductList);
    const article = useSelector(state => state.ArticleList);
    let loc= useLocation()
    // console.log(loc.pathname.startsWith('/dashboard/brand-update/'));

    useEffect(() => {
        if(loc.pathname.startsWith('/dashboard/brand-update/')){
            
            dispatch(getAllbrand())
            }
        if(loc.pathname.startsWith('/dashboard/category-update/')){
        dispatch(getAllCategory())
        }
        if(loc.pathname.startsWith('/dashboard/pants-update/')){
            dispatch(getAllPants())
            }
        if(loc.pathname.startsWith('/dashboard/shirt-update/')){
            dispatch(getAllShirt())
            }
        if(loc.pathname.startsWith('/dashboard/shose-update/')){
            dispatch(getAllShose())
            }
        if(loc.pathname.startsWith('/dashboard/product-update/')){
            dispatch(getAllProduct())
            }

        if(loc.pathname.startsWith('/dashboard/article-update/')){
            dispatch(getAllarticleList())
            }
            }, [])
        
    // const dispatch = useDispatch()

    // const brand = useSelector(state => state.brandList)
    // dispatch(getAllbrand())
    
    console.log(user);
    const IndexProducts=PaginateProduct(Products, 1, 4)
    const H=()=>(isEmpty(user)===false?<Redirect to='/'></Redirect>:<Profile></Profile>)
    return (
            <Switch>

                <Route path={['/dashboard']} >
                    <Layout >
                        <Switch >
                            <Route path='/dashboard/article-list' component={ArticleListd}></Route>
                            <Route path='/dashboard/article-update/:id' render={({match,history})=><ArticleUpdate match={match} history={history} article={article}></ArticleUpdate>}></Route>
                            <Route path='/dashboard/article-create' component={ArticleCreate}></Route>
                            <Route path='/dashboard/pants-list' component={PantsList}></Route>
                            <Route path='/dashboard/pants-create' component={PantsCreate}></Route>
                            <Route path='/dashboard/pants-update/:id' render={({match,history})=><PantsUpdate match={match} history={history} pants={pants}></PantsUpdate>}></Route>
                            <Route path='/dashboard/shose-list' component={ShoseList}></Route>
                            <Route path='/dashboard/shose-create' component={ShoseCreate}></Route>
                            <Route path='/dashboard/shose-update/:id' render={({match,history})=><ShoseUpdate match={match} history={history} shose={shose}></ShoseUpdate>}></Route>
                            <Route path='/dashboard/shirt-list' component={ShirtList}></Route>
                            <Route path='/dashboard/shirt-create' component={ShirtCreate}></Route>
                            <Route path='/dashboard/shirt-update/:id' render={({match,history})=><ShirtUpdate match={match} history={history} shirt={shirt}></ShirtUpdate>}></Route>
                            <Route path='/dashboard/user-list' component={UserList}></Route>
                            <Route path='/dashboard/category-list' component={CategoryListd}></Route>
                            <Route path='/dashboard/category-create' component={CategoryCreate}></Route>
                            <Route path='/dashboard/category-update/:id'render={({match,history})=><CategoryUpdate match={match} history={history}  category={category} />}></Route>
                            <Route path='/dashboard/brand-list' component={BrandList}></Route>
                            <Route path='/dashboard/brand-create' component={BrandCreate}></Route>
                            <Route path='/dashboard/brand-update/:id'render={({match,history})=><BrandUpdate match={match} history={history}  brand={brand} />}></Route>
                            <Route path='/dashboard/product-create'  component={ProductCreate}></Route>
                            <Route path='/dashboard/product-update/:id' render={({match,history})=><ProductUpdate match={match} history={history} product={product}></ProductUpdate>}></Route>
                            <Route path='/dashboard'  component={ProductListd}></Route>

                        </Switch>
                    </Layout>
                    <ToastContainer></ToastContainer>

                </Route>
                <Route path={['/']}>
                    <MainLayout>
                        <Switch>
                            
                            <Route path='/login'  component={Login}></Route>
                            <Route path='/Profile'  component={Profile}></Route>
                            <Route path='/register'  component={Register}></Route>
                            <Route path='/reset-password'  component={ResetPassword}></Route>
                            <Route path='/password/reset/confirm/:uid/:token'  component={ResetPasswordConfirm}></Route>
                            <Route path='/activate/:uid/:token'  component={Activate}></Route>
                            <Route path='/articles/category/:id'  component={CategoryList}></Route>
                            <Route path='/articles'  render={()=><ArticleList/>}></Route>
                            <Route path='/products/brand/:id'  component={ProductBrandList}></Route>
                            <Route path='/products/man'  component={ProductMan}></Route>
                            <Route path='/product/:id'  component={ProductDetail}></Route>
                            <Route path='/products/woman'  component={ProductWoman}></Route>
                            <Route path='/products/shirt'  component={ProductShirt}></Route>
                            <Route path='/products/shose'  component={ProductShose}></Route>
                            <Route path='/products/pants'  component={ProductPants}></Route>
                            <Route path='/products'  render={()=><ProductList Products={IndexProducts}/>}></Route>
                            <Route path='/Cart/:id?'  component={Cart}></Route>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='*' exact component={NotFound}></Route>
                        </Switch>
                    </MainLayout>
                    <ToastContainer></ToastContainer>
                </Route>
            </Switch>
        // </BrowserRouter>
    )
}

export default Main
