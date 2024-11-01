import React from 'react'
import '../../assets/css/bootstrap-rtl.min.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./re";
import '../../assets/css/card-article.css'
import {LeftOutlined} from '@ant-design/icons'
 const ArticleSlide = () => {
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
export default ArticleSlide