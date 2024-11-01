import React, { useEffect } from 'react'
import '../../../assets/css/bootstrap-rtl.min.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import responsive from "./re";
import '../../../assets/css/card-article.css'
import {LeftOutlined} from '@ant-design/icons'
import BrandResponsive from './BrandRe';
import { getAllbrand } from '../../../actions/Dashboard';
import { useDispatch, useSelector } from 'react-redux';

 const BrandSlide = () => {
    const dispatch = useDispatch();
    // console.log(user.is_superuser);
  const brand = useSelector(state => state.brandList);
    useEffect(() => {
        dispatch(getAllbrand())
    }, [])
    console.log(brand);
    // const [perPage,setPerPage]=useState(2)
    // const [currentPage,setCurrentPage]=useState(1)
    // const handlePageChange=page=>{
    //   setCurrentPage(page)
    // }
    // const PageProduct=PaginateProduct(brand,currentPage,perPage)
  
    return (
        <Carousel
        // style={{width:'30rem'}}
        responsive={BrandResponsive}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
            {brand.map(br=>(
                <div className=" ml-2">
                    <img className='brand-img-mainn'style={{}} src={`${br.thumbnail}`} alt="some"/>
                    <p className=''style={{marginLeft:'2.5rem',color:'#52734D'}}>{br.slug}</p>
                 </div>
                
            ))}
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div>
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div>
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div>
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div>
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div>
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div>
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div>
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div>
            <div className=" ml-2">
                <img className='brand-img-mainn'style={{}} src="https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg" alt="some"/>
                <p className=''style={{marginLeft:'2.5rem'}}>hkkljj</p>
            </div> 
        </Carousel>
    )
}
export default BrandSlide