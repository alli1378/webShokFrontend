import React,{useState,useEffect} from 'react'
import Editorr from '../../utils/Editor'
import { useSelector, useDispatch } from "react-redux";
import {getUsersMain,getAllCategory,postCategoryCreate} from '../../../actions/Dashboard'
import {} from '../../../actions/Dashboard'
function CategoryCreate({history}) {
    const dispatch = useDispatch();
  // console.log(user.is_superuser);
    const user = useSelector(state => state.UserList);
    const user2 = useSelector(state => state.User);
    const categorylist = useSelector(state => state.CategoryList);
    useEffect(() => {
        dispatch(getUsersMain())
        dispatch(getAllCategory())
    
      }, [])
    // console.log(user);   title
//     slug
//     status
//   position
    const [parent, setparent] = useState()
    const [position, setposition] = useState(1)
    const [slug, setslug] = useState()
    const [status, setstatus] = useState(false)
    const [title, settitle] = useState()
    if(user2.is_Autenticated===true){
        if (user2.user.is_superuser===false && user2.user.is_seller===false  && user2.user.is_author===false ) {
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
            let data= new FormData()
            data.append("parent", parent);
            data.append("title", title);
            data.append("slug", slug);
            data.append("status", status);
            data.append("position", Number.parseInt(position));
            dispatch(postCategoryCreate(data))   
            // console.log(data);
            // console.log(category);
        }catch(ex){
            console.log("aa");
        }
    }
    // const [username, setusername] = useState('')
    // console.log(category)
    return (
        <div>
            <form className='row mt-2' onSubmit={handleSubmit}>
                <div class="form-group col-12  " >
                    <div className=' ' style={{backgroundColor:'#007bff', height:'3rem',borderRadius:'.3rem'}}> <h3 className='ml-3 '>ایجادمقاله</h3></div>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">عنوان کالا</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value={title} onChange={e=>{settitle(e.target.value)}}/>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputPassword1">آدرس محصول</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder=""value={slug} onChange={e=>{setslug(e.target.value)}}/>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">نویسنده</label>
                    <select name="brand " class="select form-control " required="" id="id_brand" multiple value={parent}onChange={e=>{setparent(Array.from(e.target.selectedOptions,Option=>Option.value))}}>
                    
                        {categorylist.map(category=>(
                            <option value={category.id}>{category.title}</option>
                        ))}
                    </select>
                </div>
                <div class="form-group col-3 mt-5">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value={status} onChange={e=>{setstatus(!e.target.value)}}/>
                    <label for="vehicle1"> آیا این دسته بندی نمایش داده شود؟</label><br/>
                </div>
  
                
                <button
                    type="submit"
                    className="btn btn-success "
                    style={{ margin: "1em" }}
                >
                    ثبت مقاله
                </button>
            </form>            
        </div>
    )
}

export default CategoryCreate


