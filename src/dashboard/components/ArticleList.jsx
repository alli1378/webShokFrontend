import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getAllarticleList} from '../../actions/Dashboard'
import  {PaginateProduct}  from '../../Main/utils/PaginateProduct';
import Header from '../sidebar/header'
import '../../assets/css/bootstrap-rtl.min.css'
import Dashord from '../Dashboard'
import { Link } from 'react-router-dom';
import  Pagination  from '../../Main/components/Paginate'
// import { useEffect } from 'react'
const ArticleList = ({history}) => {
    const Articles = useSelector(state => state.ArticleList);
    const user2 = useSelector(state => state.User);
    const [perPage,setPerPage]=useState(2)
    const [currentPage,setCurrentPage]=useState(1)
    const handlePageChange=page=>{
      setCurrentPage(page)
    }
    const PageArticle=PaginateProduct(Articles,currentPage,perPage)
    const dispatch = useDispatch();
    // console.log(user.is_superuser);
    useEffect(() => {
        dispatch(getAllarticleList())
    }, [])
    
    if(user2.is_Autenticated===true){
      if (user2.user.is_superuser===false && user2.user.is_author===false  ) {
          console.log(123);
              history.push('/')
      }
    }
    if(user2.is_Autenticated === false){
      history.push('/')

  }
    return (
      
        <section className="content  " >
              <h3 className='mt-5'>مقالات</h3>
              <div className="card " style={{marginTop:'3rem'}}>
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>عنوان مقاله</th>
                        <th>دسته بندی</th>
                        <th>نویسنده</th>
                        <th>تصویر</th>
                        <th>آدرس</th>
                        <th>توضیحات</th>
                        <th>زمان انتشار</th>
                        <th>وضعیت انتشار</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                        {PageArticle.map(Article=>(
                          <tr>
                          <td>
                              {Article.title}
                              {/* <a href="/account/update-article/4">md</a> */}
                            {/* <Link to=''></Link> */}
                          </td>
                          <td>{Article.category}</td>
                          <td>{Article.author.username}</td>
                          <td>
                            <img src={`${Article.thumbnail}`} style={{width:'125px'}}/>
                          </td>
                          <td>{Article.slug}</td>
                          <td>{Article.description}</td>
                          <td>{Article.publish}</td>
                          <td>
                            {Article.status==='P'?
                            <span className="badge badge-danger">پیشنویس</span>
                            :
                            <span className="badge badge-success"> منتشر شده</span>

                          }

                            
                            

                            {/* <a target="_blank" className="badge badge-info" href="/preview/4">پیش نمایش مقاله در سایت</a> */}
                            
                            
                            </td>
                        </tr>
                      
                        ))}
                        

                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-flex justify-content-center">

                <Pagination
                            total={Articles.length}
                            currentPage={currentPage}
                            perPage={perPage}
                            onPageChange={handlePageChange}
                        />
            
                </div>
        
      
    </section>
    
// </div>

    )
              
   
}

export default ArticleList
