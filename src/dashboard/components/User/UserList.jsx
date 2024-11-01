import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getAllUser} from '../../../actions/Dashboard'
import  {PaginateProduct}  from '../../../Main/utils/PaginateProduct';
import  Pagination  from '../../../Main/components/Paginate'
const UserList = () => {
  const dispatch = useDispatch();
  // console.log(user.is_superuser);
const user = useSelector(state => state.UserList);
  useEffect(() => {
    dispatch(getAllUser())
    // dispatch(getAllUser())

  }, [])
  console.log(user);
  const [perPage,setPerPage]=useState(2)
  const [currentPage,setCurrentPage]=useState(1)
  const handlePageChange=page=>{
    setCurrentPage(page)
  }
  const PageProduct=PaginateProduct(user,currentPage,perPage)
  
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
                    // 'first_name','last_name','username','is_author','is_seller'
                      PageProduct.map(user=>(
                        <tr>
                        <td>{user.first_name}</td>
                        <td>
                            {user.last_name}
                        </td>
                        <td>{user.username}</td>
                        <td>{user.is_author}</td>
                        <td>{user.is_seller}</td>
                        </tr>
                    
                        
                      ))}
                      
          
                  </tbody>
                </table>
              </div>
            </div>
          
            <div className="d-flex justify-content-center">

              <Pagination
                          total={user.length}
                          currentPage={currentPage}
                          perPage={perPage}
                          onPageChange={handlePageChange}
                      />
          
              </div>
      
    
  </section>
  
//  </div>

  )
          
   
}

export default UserList
