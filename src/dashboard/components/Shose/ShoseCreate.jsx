import React,{useState,useEffect} from 'react'
import Editorr from '../../utils/Editor'
import { useSelector, useDispatch } from "react-redux";
import {getUsersMain,getAllCategory,getShoseCreate,getSpecialShose} from '../../../actions/Dashboard'
import {} from '../../../actions/Dashboard'
// import'../../../../public/boxicons-2.0.9/css/boxicons.css'
function ShoseCreate({history}) {
    // 'category','title','slug','description','thumbnail','publish','created','updated'
    const dispatch = useDispatch();
    // console.log(user.is_superuser);
    const user2 = useSelector(state => state.User);
    const user = useSelector(state => state.UserList);
    const usermain = useSelector(state => state.User.user)
    const categorylist = useSelector(state => state.CategoryList);
    const speciallist = useSelector(state => state.Special);

    useEffect(() => {
        dispatch(getUsersMain())
        dispatch(getAllCategory())
        dispatch(getSpecialShose())
        
      }, [])

      if(user2.is_Autenticated===true){
        if (user2.user.is_superuser===false && user2.user.is_seller===false ) {
            console.log(123);
                history.push('/')
        }
      }
      if(user2.is_Autenticated === false){
        history.push('/')
    
    }
    // console.log(user);
    // const [category, setcategory] = useState([])
    const [sizeshose, setsizeshose] = useState()
    const [count, setcount] = useState(0)
    // const [status, setstatus] = useState()
    const [seller_2, setseller_2] = useState()
    const [product, setproduct] = useState()
    const [price, setprice] = useState()
    // const [publish, setpublish] = useState('')
    // const [created, setcreated] = useState('')
    // const [updated, setupdated] = useState('')
    const handleSubmit=event=>{
        event.preventDefault();
        try{
            // setseller_2(usermain)
            // console.log(usermain);
            // console.log(user);
            // let data= new FormData()
            // data.append("count", Number.parseInt(count));
            // data.append("product", product);
            // data.append("seller_2", seller_2);
            // data.append("sizeshose", sizeshose);
            // data.append("author", author);
            // data.append("description", description);
            // data.append("thumbnail", event.target.imageUrl.files[0]);
            // console.log(data);
            
            const data={sizeshose,seller_2,product,count,price}
            dispatch(getShoseCreate(data,history))   
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
                    <div className=' ' style={{backgroundColor:'#007bff', height:'3rem',borderRadius:'.3rem'}}> <h3 className='ml-3 '>ویژگی کفش</h3></div>
                </div>
                
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">سایز</label>
                    <select name="status" class="select form-control" required="" id="id_status"value={sizeshose}onChange={e=>{setsizeshose(e.target.value)}}>
                        <option value="" selected="">---------</option>
                        
                        <option value="32">۳۲</option>
                        <option value="33">۳۳</option>

                        <option value="34">۳۴</option>

                        <option value="35">۳۵</option>

                        <option value="36">۳۶</option>
                        <option value="37">۳۷</option>
                        <option value="38">۳۸</option>

                        <option value="39">۳۹</option>

                        <option value="40">۴۰</option>

                        <option value="41">۴۱</option>
                        <option value="42">۴۲</option>
                        <option value="43">۴۳</option>

                        <option value="44">۴۴</option>

                        <option value="45">۴۵</option>

                        <option value="46">۴۶</option>
                        
                    </select>
                </div>
                
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
     
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">فروشنده</label>
                {usermain.is_superuser?

                    <select name="brand " class="select form-control " required="" id="id_brand"value={seller_2}onChange={e=>{setseller_2(e.target.value);console.log(user)}}>
                        <option value="" selected="">---------</option>
                        {user.map(seller_2=>(
                            <option value={seller_2.id}>{seller_2.username}</option>    
                        ))}

                    </select>
                :
                <select name="brand " class="select form-control  " required="" id="id_brand"value={seller_2}onChange={e=>{setseller_2(e.target.value)}}>
                        <option value="" selected="">---------</option>
                        
                         <option value={usermain.id}>{usermain.username}</option>    
                        
                    </select>
                    
                    
                    // <h1 value={seller_2} onChange={e=>setseller_2(e.target.value)}></h1>
                }
                </div>
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

export default ShoseCreate

