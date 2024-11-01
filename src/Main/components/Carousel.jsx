

import '../../assets/css/bootstrap-rtl.min.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./re";
import React, { useEffect, useState } from 'react';
import '../../assets/css/style3.css'
import {LeftOutlined} from '@ant-design/icons'
import { getAllArticles } from '../../actions/Articles';
import { useDispatch, useSelector } from 'react-redux';
import Articlecard from './Article/Articlecard';
import { PaginateProduct } from '../utils/PaginateProduct';
    
const Slideshow = () => {
    const [perPage,setPerPage]=useState(12)
    const [currentPage,setCurrentPage]=useState(1)
    const handlePageChange=page=>{
        setCurrentPage(page)
    }
    const Articles = useSelector(state => state.Articles);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticles());
        // console.log(match);
    }, []);
    
    const PageArticle=PaginateProduct(Articles,currentPage,perPage)
    
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


{PageArticle.map(Article=>(
<div class="article-card-graid   ">

                    <div class='article-card' >
                    
                    <img src={`${Article.thumbnail}`}  alt="" />
                    <div class="articel-description">
                        <button class=" article-button "> {Article.title}</button>
                        <p className='rtl'  >
                                                {
                                                    Article.description.length >= 30 ?
                                                        Article.description
                                                    :
                                                        Article.description
        
                                                    
                                                }                                 </p>
                                        
                        
                    </div> 
                    </div>
                </div>
                    
                    ))}

</Carousel>
)

    }
    export default Slideshow
    