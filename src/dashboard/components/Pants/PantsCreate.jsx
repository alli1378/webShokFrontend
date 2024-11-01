import React,{useState,useEffect} from 'react'
import Editorr from '../../utils/Editor'
import { useSelector, useDispatch } from "react-redux";
import {getUsersMain,getAllCategory,getPantsCreate,getSpecialPants} from '../../../actions/Dashboard'
import {} from '../../../actions/Dashboard'
// import'../../../../public/boxicons-2.0.9/css/boxicons.css'
function PantsCreate({history}) {
    // 'category','title','slug','description','thumbnail','publish','created','updated'
    const dispatch = useDispatch();
  // console.log(user.is_superuser);
    const user = useSelector(state => state.UserList);
    const user2 = useSelector(state => state.User);
    const usermain = useSelector(state => state.User.user)
    const categorylist = useSelector(state => state.CategoryList);
    const speciallist = useSelector(state => state.Special);
    
    useEffect(() => {
        dispatch(getUsersMain())
        dispatch(getAllCategory())
        dispatch(getSpecialPants())
    
      }, [])

         
    // console.log(user);
    // const [category, setcategory] = useState([])
    const [sizepants, setsizepants] = useState()
    const [count, setcount] = useState(0)
    // const [status, setstatus] = useState()
    const [seller_2, setseller_2] = useState()
    const [product, setproduct] = useState()
    // const [publish, setpublish] = useState('')
    // const [created, setcreated] = useState('')
    // const [updated, setupdated] = useState('')
    const [price, setprice] = useState()
    if(user2.is_Autenticated===true){
        if (user2.user.is_superuser===false && user2.user.is_seller===false  ) {
            console.log(123);
                history.push('/')
        }
      }
      if(user2.is_Autenticated === false){
        history.push('/')
    
    }
    const handleSubmit=event=>{
        event.preventDefault();
        try{
            // setseller_2(usermain)
            // console.log(usermain);
            // console.log(user);
            let data= new FormData()
            data.append("count", Number.parseInt(count));
            data.append("product", product);
            data.append("seller_2", seller_2);
            data.append("sizepants", sizepants);

            data.append("price", price);
            // data.append("description", description);
            // data.append("thumbnail", event.target.imageUrl.files[0]);
            // console.log(data);
            
            // const data={sizepants,seller_2,product,count}
            dispatch(getPantsCreate(data))   
            console.log(data);
            // console.log(category);
        }catch(ex){
            console.log("aa");
        }
    }
    
    // console.log(seller_2);
    // const [username, setusername] = useState('')
    // console.log(category)
    return (
        <div>
            <form className='row mt-2' onSubmit={handleSubmit}>
                <div class="form-group col-12  " >
                    <div className=' ' style={{backgroundColor:'#007bff', height:'3rem',borderRadius:'.3rem'}}> <h3 className='ml-3 '>ویژگی شلوار</h3></div>
                </div>
                
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">سایز</label>
                    <select name="status" class="select form-control" required="" id="id_status"value={sizepants}onChange={e=>{setsizepants(e.target.value)}}>
                        <option value="" selected="">---------</option>
                        <option value="m">مدیوم</option>
                        <option value="l">لارج</option>
                        <option value="xl">ایکس لارج</option>
                        <option value="xll">دو ایکس لارج</option>
                        <option value="xxxl">سه ایکس لارج</option>
                    </select>
                </div>
                {/* <div class="form-group col-6">
                    <label for="exampleInputPassword1">آدرس محصول</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder=""value={product} onChange={e=>{setproduct(e.target.value)}}/>
                </div> */}
                
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">قیمت کالا</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value={price} onChange={e=>{setprice(e.target.value)}}/>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">محصول</label>

                    <select name="brand " class="select form-control " required="" id="id_brand"value={product}onChange={e=>{setproduct(e.target.value);console.log(user)}}>
                        <option value="" selected="">---------</option>
                        {speciallist.map(product=>(
                            <option value={product.id}>{product.title}</option>    
                        ))}

                    </select>
                </div>
                {usermain.is_superuser?
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">فروشنده</label>

                    <select name="brand " class="select form-control " required="" id="id_brand"value={seller_2}onChange={e=>{setseller_2(e.target.value);console.log(user)}}>
                        <option value="" selected="">---------</option>
                        {user.map(seller_2=>(
                            <option value={seller_2.id}>{seller_2.username}</option>    
                        ))}

                    </select>
                </div>
                :
                     <select name="brand " class="select form-control  " required="" id="id_brand"value={seller_2}onChange={e=>{setseller_2(e.target.value)}}>
                        <option value="" selected="">---------</option>
                        
                         <option value={usermain.id}>{usermain.username}</option>    
                        
                    </select>
                    
                
                // <h1 value={seller_2} onChange={e=>setseller_2(e.target.value)}></h1>
            }
                <div class="form-group col-6">
                    <label for="exampleInputPassword1">تعداد محصول</label>
                    <div className="mt-2" style={{display:'block'}}>
                        <i class='bx bx-plus' onClick={()=>{setcount(count+1)}}></i>
                        <span className='btn btn-info mx-2'>{count}</span>
                        <i class='bx bx-minus'onClick={()=>{if(count!=0){ setcount(count-1)}}}></i>
                    </div>
                </div>
                
                <button
                    type="submit"
                    className="btn btn-success "
                    style={{ margin: "1em" }}
                >
                ثبت محصول
                </button>
            </form>            
        </div>
    )
}

export default PantsCreate

