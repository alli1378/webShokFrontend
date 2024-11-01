import React from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom' 

import {getAllArticlesCategory} from '../../../actions/ArticlesCategory'
import { useSelector, useDispatch } from "react-redux";
import {useEffect,Fragment} from 'react'
import { Helmet } from 'react-helmet';
// import {getArticles} from '../../../services/ArticleSevice'
const CategoryList = ({match}) => {
    // const classes = useStyles();
    // console.log(getArticles);
    const ArticlesCategory = useSelector(state => state.ArticlesCategory);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticlesCategory(match.params.id));
        console.log(match);
    }, []);
    
    return (
        <>
         <Helmet>
            <title>
                وب شاک|دسته بندی مقاله 
            </title>
        </Helmet>
        {/* <Header></Header> */}
            <div class="container mt-3">
                <div class="row d-flex justify-content-center">
                    {ArticlesCategory.map(Article=>(

                    <div key={Article.id} className="  col-md-3  col-sm-6    ">
                                
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

                                            
                                        }           
                                    </p>
                                    {/* <footer>
                                    {Article.category.map(categor=>(
                                            
                                            <div className="" key={categor.id}>
                                                #{categor.title}
                                            </div>
                                            
                                                                                ))}
                                    </footer> */}
                                </div> 
                            </div>


                        </div>

                    </div>
                   
                    ))}
                </div>
            </div>
        </>
        
       
        )

    }
    export default CategoryList
