import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./../re";
import React, { useEffect, useState } from 'react';
import '../../../assets/css/style3.css'
import {LeftOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../actions/Products";
import ProductCardMain from "./ProductCardMain";
// con
const ProductCarousel = () => {
    
    const [perPage, setperPage] = useState(2)
    const [CurrentPage, setCurrentPage] = useState(1)
    const handlePageChange=(page)=>{
        setCurrentPage(page)
    }
    const Products = useSelector(state => state.Products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        // console.log(match);
    }, []);
    // const paginate=(PaginateProduct(Products ,CurrentPage,per
    return (
<Carousel
// style={{width:'30rem'}}
responsive={responsive}
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
    {Object.values(Products).map(product=>(
        // <div class="a-box">
        // <div class="img-container">
        //     <div class="img-inner">
        //     <div class="inner-skew">
        //         <img src={`${product.thumbnail}`}/>
        //     </div>
        //     </div>
        // </div>
        // <div class="text-container">
        //     <div className="rtl">

        //         <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${product.brand.thumbnail}`} alt="" />
        //     </div>
        //     <h3 className=''style={{color:'rgb(145, 199, 136)'}}>{product.title}</h3>
        //     <div>
        //     <div className="d-flex  ">
        //         <p className='ml-3 rtl'>
                
        //         {product.price}
        //         تومان </p>
        //         <p className='ml-5'>:قیمت</p>
        //     </div>
        // </div>
        // </div>        
        // </div>
        <ProductCardMain brand={product.brand} product={product} />
    ))}
       <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
            <div class="inner-skew">
                <img src="https://static.roocket.ir/images/cover/2021/7/21/W7oj8bz2IY730BgYw9Q4oG8EOktvI7UbaBBLvk94.png"/>
            </div>
            </div>
        </div>
        <div class="text-container">
            <h3>A blue bird</h3>
            <div>
            This a demo experiment to skew image container. It looks good.
        </div>
        </div>        
        </div>
        <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
            <div class="inner-skew">
                <img src="https://static.roocket.ir/images/cover/2021/7/21/W7oj8bz2IY730BgYw9Q4oG8EOktvI7UbaBBLvk94.png"/>
            </div>
            </div>
        </div>
        <div class="text-container">
            <h3>A blue bird</h3>
            <div>
            This a demo experiment to skew image container. It looks good.
        </div>
        </div>        
        </div>
        <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
            <div class="inner-skew">
                <img src="https://static.roocket.ir/images/cover/2021/7/21/W7oj8bz2IY730BgYw9Q4oG8EOktvI7UbaBBLvk94.png"/>
            </div>
            </div>
        </div>
        <div class="text-container">
            <h3>A blue bird</h3>
            <div>
            This a demo experiment to skew image container. It looks good.
        </div>
        </div>        
        </div>
        <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
            <div class="inner-skew">
                <img src="https://static.roocket.ir/images/cover/2021/7/21/W7oj8bz2IY730BgYw9Q4oG8EOktvI7UbaBBLvk94.png"/>
            </div>
            </div>
        </div>
        <div class="text-container">
            <h3>A blue bird</h3>
            <div>
            This a demo experiment to skew image container. It looks good.
        </div>
        </div>        
        </div>
</Carousel>
)

    }
    export default ProductCarousel
    