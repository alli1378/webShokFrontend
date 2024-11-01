import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getAllProduct} from '../../../actions/Dashboard'
import  {PaginateProduct}  from '../../../Main/utils/PaginateProduct';
import  Pagination  from '../../../Main/components/Paginate'

// import '../../assets/css/bootstrap-rtl.min.css'
// import Dashord from '../Dashboard'
const ProductList = ({history}) => {
  const dispatch = useDispatch();
    // console.log(user.is_superuser);
  const user2=useSelector(state=>state.User)

  const Products = useSelector(state => state.ProductList);
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])
    if(user2.is_Autenticated===true){
      if (user2.user.is_superuser===false && user2.user.is_seller===false  ) {
          console.log(123);
              history.push('/')
      }
    }
    if(user2.is_Autenticated === false){
      history.push('/')

  }
    const [perPage,setPerPage]=useState(2)
    const [currentPage,setCurrentPage]=useState(1)
    const handlePageChange=page=>{
      setCurrentPage(page)
    }
    const PageProduct=PaginateProduct(Products,currentPage,perPage)
    
    return (
        <section className="content "style={{color:'wheat'}} >
              <h3 className='mt-5' style={{color:'#0b212f'}}>محصولات</h3>
              <div className="card  " style={{marginTop:'3rem'}}>
                <div className="card-body table-responsive p-0">
                  
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>عنوان محصول</th>
                        <th>دسته بندی</th>
                        <th>فروشنده</th>
                        <th>تصویر</th>
                        <th>آدرس</th>
                        <th>توضیحات</th>
                        <th>زمان انتشار</th>
                        <th>وضعیت انتشار</th>
                      </tr>
                    </thead>
                    <tbody>
                    {PageProduct.length===0?
                        <p></p>
                      :
                        PageProduct.map(Product=>(
                              <tr>
                              <td>
                                  {Product.title}
                                  {/* <a href="/account/update-Product/4">md</a> */}
                                {/* <Link to=''></Link> */}
                              </td>
                              <td>{Product.category}</td>
                              <td>{Product.seller.username}</td>
                              <td>
                                <img src={`${Product.thumbnail}`} style={{width:'125px'}}/>
                              </td>
                              <td>{Product.slug}</td>
                              <td>{Product.description}</td>
                              <td>{Product.publish}</td>
                              <td>
                                {Product.status==='P'?
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
                            total={Products.length}
                            currentPage={currentPage}
                            perPage={perPage}
                            onPageChange={handlePageChange}
                        />
            
                </div>
        
      
    </section>
    
//  </div>

    )
              
   
}

export default ProductList
