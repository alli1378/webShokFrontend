import React,{useState,useEffect} from 'react'
import Editorr from '../../utils/Editor'
import { useSelector, useDispatch } from "react-redux";
import {getUsersMain,getAllCategory,getArticleCreate, handleArticleUpdate} from '../../../actions/Dashboard'
import {} from '../../../actions/Dashboard'
function ArticleUpdate({match,article,history}) {
    // 'category','title','slug','description','thumbnail','publish','created','updated'
    const dispatch = useDispatch();
  // console.log(user.is_superuser);
    const user = useSelector(state => state.UserList);
    const user2 = useSelector(state => state.User);
    const categorylist = useSelector(state => state.CategoryList);
    const [category, setcategory] = useState()
    const [title, settitle] = useState()
    const [slug, setslug] = useState()
    const [status, setstatus] = useState()
    const [author, setauthor] = useState()
    const [description, setdescription] = useState()
    const [thumbnail, setthumbnail] = useState()
    useEffect(() => {
        dispatch(getUsersMain())
        dispatch(getAllCategory())
        for (let index = 0; index < article.length; index++) {
            if(article[index].id==match.params.id) {   
                const elem=article[index]
                setcategory(elem.category)
                // setbrand(elem.brand)
                settitle(elem.title)
                setslug(elem.slug)
                setstatus(elem.status)
                // setcolor(elem.color)
                // settype(elem.type)
                setauthor(elem.author.id)
                setdescription(elem.description)
                // setgender(elem.gender)
                setthumbnail(elem.thumbnail)
            }
        }
      }, [article])
      if(user2.is_Autenticated===true){
        if (user2.user.is_superuser===false && user2.user.is_author===false  ) {
            console.log(123);
                history.push('/')
        }
      }
      if(user2.is_Autenticated === false){
        history.push('/')
  
    }
      console.log(article[2]);
    // console.log(user);
    // const [created, setcreated] = useState('')
    // const [updated, setupdated] = useState('')
    const handleSubmit=event=>{
        event.preventDefault();
        try{
            const data = new FormData();
            for (let index = 0; index < category.length; index++) {
                data.append("category", category[index]);
               }
            // var index = 0; 
            // for(var pair of category){ var category = pair[key];
            //     Data.append("category[" + index + "].Id", category.Id); index++; }
            // data.append("category", category[0]);
            // data.append("category", category[1]);
            data.append("title", title);
            data.append("slug",slug );
            data.append("status", status);
            data.append("author", author);
            data.append("description", description);
            data.append("thumbnail", event.target.thumbnail.files[0]);
            // console.log(data.getcategory());
            // thumbnail=event.target.thumbnail.files[0]
            // category=[1]
            // const data={title,slug,description,author,status}
            console.log(description);
            dispatch(handleArticleUpdate(data,match.params.id))   
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
                    <label for="exampleInputEmail1">عنوان مقاله</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value={title} onChange={e=>{settitle(e.target.value)}}/>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputPassword1">آدرس مقاله</label>
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
                    <select name="brand " class="select form-control " required="" id="id_brand" multiple value={category}onChange={e=>{setcategory(Array.from(e.target.selectedOptions,Option=>Option.value))}}>
                    
                        {categorylist.map(category=>(
                            <option value={category.id}>{category.title}</option>
                        ))}
                    </select>
                </div>
                <div class="form-group col-6">
                    {/* <label for="exampleInputEmail1">دسته بندی محصول</label> */}
                    {/* <div className="d-flex">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div> */}
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    <label for="exampleInputEmail1">دسته بندی مقاله</label>
                    
                    <div class="form-group d-flex">

                    <input
                            type="file"
                            name="thumbnail"
                            style={{ marginBottom: 3 }}
                            className="form-control mb-2"
                            aria-describedby="thumbnail"
                        />
                    </div>
                </div>

                <div class="form-group col-6">
                    <label for="exampleInputEmail1">نویسنده</label>

                    <select name="brand " class="select form-control " required="" id="id_brand"value={author}onChange={e=>{setauthor(e.target.value);console.log(user)}}>
                        <option value="" selected="">---------</option>
                        {user.map(author=>(
                            <option value={author.id}>{author.username}</option>    
                        ))}

                    </select>
                </div>
                
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">نویسنده</label>
                    <select name="status" class="select form-control" required="" id="id_status"value={status}onChange={e=>{setstatus(e.target.value)}}>
                        <option value="" selected="">---------</option>

                        <option value="d">پیش نویس</option>

                        <option value="p">منتشر شده</option>

                        <option value="i">در حال برسی</option>

                        <option value="b">برگشت داده شده</option>

                    </select>
                </div>
                {/* <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button> */}
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

export default ArticleUpdate
