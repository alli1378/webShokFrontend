import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./re";
import '../../assets/css/card-article2.css'
import {LeftOutlined} from '@ant-design/icons'

const AA = () => {
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
            <div className="card-grid-space ">
          <a className="card-spechial-hover" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{backgroundImage:'url(https://roocket.ir/public/images/2020/9/10/laravel-thum.jpg)',backgroundSize:'100% 100%',width:'100%',height:'100%'}}>
            <div className='hover-text'>
              <h1 style={{color:'white'}}>HTML Syntax</h1>
              <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
              
            </div>
          </a>
          <h1 style={{color:'red'}}>HTML Syntax</h1>

        </div>
                    </Carousel>
    )
}

export default AA
