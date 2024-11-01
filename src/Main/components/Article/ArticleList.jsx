import React from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom' 

import {getAllArticles} from '../../../actions/Articles'
import { useSelector, useDispatch } from "react-redux";
import {useEffect,Fragment,useState} from 'react'
import {PaginateProduct} from '../../utils/PaginateProduct'
import  Pagination  from '../Paginate';
import { Helmet } from 'react-helmet';
import Articlecard from './Articlecard';
// import {getArticles} from '../../../services/ArticleSevice'

const ArticleList = () => {
    // const classes = useStyles();
    // console.log(getArticles);
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
        <>
         <Helmet>
            <title>
                وب شاک|مقالات 
            </title>
        </Helmet>
        {/* <Header></Header> */}
            <div class="container mt-5">
                <div class="row d-flex justify-content-center">
                    {PageArticle.map(Article=>(
                        <Articlecard Article={Article}></Articlecard>
                    
                    ))}
                </div>
                <div className="d-flex justify-content-center">

                <Pagination
                            total={Articles.length}
                            currentPage={currentPage}
                            perPage={perPage}
                            onPageChange={handlePageChange}
                        />
            
                </div>
            </div>
            
        </>
        
       
        )

    }
    export default ArticleList
