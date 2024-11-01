import React,{useState,useEffect} from 'react'
import Editorr from '../../utils/Editor'
import { useSelector, useDispatch } from "react-redux";
import {getUsersMain,getAllCategory,getBrandCreate} from '../../../actions/Dashboard'
import {} from '../../../actions/Dashboard'
function BrandCreate({history}) {
    // 'category','title','slug','description','thumbnail','publish','created','updated'
    const dispatch = useDispatch();
  // console.log(user.is_superuser);
    const user = useSelector(state => state.UserList);
    const user2 = useSelector(state => state.User);
    // console.log(user);
    // const [category, setcategory] = useState([])
    const [title, settitle] = useState()
    const [slug, setslug] = useState()
    // const [status, setstatus] = useState()
    const [employe, setemploye] = useState()
    const [description, setdescription] = useState()
    // const [publish, setpublish] = useState('')
    // const [created, setcreated] = useState('')
    useEffect(() => {
        dispatch(getUsersMain())
        
    }, [])
    if(user2.is_Autenticated===true){
        if (user2.user.is_superuser===false  ) {
            console.log(123);
                history.push('/')
        }
      }
      if(user2.is_Autenticated === false){
        history.push('/')
    
    }
    // dispatch()
    // const [updated, setupdated] = useState('')
    const handleSubmit=event=>{
        event.preventDefault();
        try{
            let data= new FormData()
            // // data.append("category", category);
            data.append("title", title);
            data.append("slug", slug);
            // // data.append("status", status);
            data.append("employe", employe);
            data.append("description", description);
            data.append("thumbnail", event.target.thumbnail.files[0]);
            // console.log(data);
            // const data={title,slug,employe,description}
            // console.log(title);
            dispatch(getBrandCreate(data))   
            console.log(data);
            // console.log(category);
        }catch(ex){
            console.log("aa");
        }
    }
    // console.log(title);
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
                <div class=" col-6">
                  <label for="exampleInputEmail1">تصویر محصول</label>
                  <div class=" d-flex">
                  <input
                      type="file"
                      name="thumbnail"
                      style={{ marginBottom: 3 }}
                      className=" mb-2"
                      aria-describedby="thumbnail"
                  />
                    </div>
                </div>

                <div class="form-group col-6">
                    <label for="exampleInputPassword1">آدرس محصول</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder=""value={slug} onChange={e=>{setslug(e.target.value)}}/>
                </div>
                <div class="form-group col-12 " >
                    <div className=""style={{direction:'ltr', backgroundColor:'#fff'}}>
                    {/* <Editorr value={description} onChange={e=>{setdescription(e.target.value);console.log(description);}}></Editorr> */}
                    <textarea
                            name="description"
                            placeholder="توضیحات دوره"
                            className="form-control"
                            style={{ marginBottom: 3 }}
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                        />

                    </div>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">نویسنده</label>

                    <select name="brand " class="select form-control " required="" id="id_brand"value={employe}onChange={e=>{setemploye(e.target.value);console.log(user)}}>
                        <option value="" selected="">---------</option>
                        {user.map(employe=>(
                            <option value={employe.id}>{employe.username}</option>    
                        ))}

                    </select>
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

export default BrandCreate

