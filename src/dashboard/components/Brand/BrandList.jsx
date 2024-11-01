import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getAllbrand} from '../../../actions/Dashboard'
import  {PaginateProduct}  from '../../../Main/utils/PaginateProduct';
import  Pagination  from '../../../Main/components/Paginate'
const BrandList = ({history}) => {
  const dispatch = useDispatch();
  // console.log(user.is_superuser);
  const brand = useSelector(state => state.brandList);
  const user2 = useSelector(state => state.User);
  useEffect(() => {
      dispatch(getAllbrand())
  }, [])
  const [perPage,setPerPage]=useState(2)
  const [currentPage,setCurrentPage]=useState(1)
  const handlePageChange=page=>{
    setCurrentPage(page)
  }
  if(user2.is_Autenticated===true){
    if (user2.user.is_superuser===false  ) {
        console.log(123);
            history.push('/')
    }
  }
  if(user2.is_Autenticated === false){
    history.push('/')

}
  const PageProduct=PaginateProduct(brand,currentPage,perPage)
  
  return (
      <section className="content col-5 "style={{color:'wheat'}} >
            <h3 className='mt-5' style={{color:'#0b212f'}}>محصولات</h3>
            <div className="card  " style={{marginTop:'3rem'}}>
              <div className="card-body table-responsive p-0">
                
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>عنوان دسته</th>
                      <th>والد</th> 
                      <th>آدرس</th> 
                      <th>حالت</th>
                      <th>وضعیت </th>
                    </tr>
                  </thead>
                  <tbody>
                  {PageProduct.length===0?
                      <p></p>
                    :
                      PageProduct.map(brand=>(
                            <tr>
                            <td>
                                {brand.title}
                           </td>
                            {/* <td>{brand.parent}</td> */}
                           
                            <td>{brand.slug}</td>
                            <td>{brand.description}</td>
                            <td>{brand.employe}</td>
                           
                          </tr>
                        
                      ))}
                      
          
                  </tbody>
                </table>
              </div>
            </div>
          
            <div className="d-flex justify-content-center">

              <Pagination
                          total={brand.length}
                          currentPage={currentPage}
                          perPage={perPage}
                          onPageChange={handlePageChange}
                      />
          
              </div>
      
    
  </section>
  
//  </div>

  )

};
export default BrandList