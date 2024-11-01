import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getAllShose} from '../../../actions/Dashboard'
import  {PaginateProduct}  from '../../../Main/utils/PaginateProduct';
import  Pagination  from '../../../Main/components/Paginate'

const ShoseList = ({history}) => {
  const dispatch = useDispatch();
  // console.log(user.is_superuser);
  const shose = useSelector(state => state.ShoseList);
  const user2 = useSelector(state => state.User);
  useEffect(() => {
      dispatch(getAllShose())
  }, [])
  const [perPage,setPerPage]=useState(2)
  const [currentPage,setCurrentPage]=useState(1)
  const handlePageChange=page=>{
    setCurrentPage(page)
  }
  if(user2.is_Autenticated===true){
    if (user2.user.is_superuser===false && user2.user.is_seller===false ) {
        console.log(123);
            history.push('/')
    }
  }
  if(user2.is_Autenticated === false){
    history.push('/')

}
  const PageProduct=PaginateProduct(shose,currentPage,perPage)
  
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
                      PageProduct.map(shose=>(
                        <tr>
                        <td>{shose.product.title}</td>
                        <td>
                            {shose.count}
                        </td>
                        <td>{shose.category}</td>
                        <td>{shose.sizeshose}</td>
                        <td>{shose.seller_2.username}</td>
                        </tr>
                    
                        
                      ))}
                      
          
                  </tbody>
                </table>
              </div>
            </div>
          
            <div className="d-flex justify-content-center">

              <Pagination
                          total={shose.length}
                          currentPage={currentPage}
                          perPage={perPage}
                          onPageChange={handlePageChange}
                      />
          
              </div>
      
    
  </section>
  
//  </div>

  )
           
   
}

export default ShoseList
