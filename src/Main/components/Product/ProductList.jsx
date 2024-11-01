import React from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {useEffect,Fragment,useState} from 'react'
import {getAllProducts} from '../../../actions/Products'
// import {getProducts} from '../../../services/ProductSevice'
import {PaginateProduct} from '../../utils/PaginateProduct'
import Pagination from '../Paginate'
import ProductCardMain from './ProductCardMain';
import A from '../../../assets/image/agaei.jpg'
import { Helmet } from 'react-helmet';
const ProductList = () => {
    const [perPage, setperPage] = useState(2)
    const [CurrentPage, setCurrentPage] = useState(1)
    const handlePageChange=(page)=>{
        setCurrentPage(page)
    }
    const Products = useSelector(state => state.Products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    const paginate=(PaginateProduct(Products ,CurrentPage,perPage))
    return (
        <>
             <Helmet>
            <title>
                وب شاک|محصولات  
            </title>
        </Helmet>
            <div class="container mt-3">
                <div class="row d-flex justify-content-center">
                    {paginate.map(Product=>(
                       <ProductCardMain product={Product}/>
                    ))}
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                    <div class="a-box">
                        <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                                <img src={A}/>
                            </div>
                            </div>
                        </div>
                        <div class="text-container">
                            <div className="rtl">

                                {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" /> */}
                            </div>
                            <h3 className=''style={{color:'rgb(145, 199, 136)'}}>hello</h3>
                            <div>
                                <div className="d-flex  ">
                                    <p className='ml-3 rtl'>
                                    
                                    30000
                                    تومان </p>
                                    <p className='ml-5'>:قیمت</p>
                                </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination 
                        total={Products.length}
                        currentPage={CurrentPage}
                        perPage={perPage}
                        onPageChange={handlePageChange}

                    />
                </div>
            </div>
        </>
        
       
        )

    }
    export default ProductList
