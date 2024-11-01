import React,{useState,useEffect} from 'react'
import Editorr from '../../utils/Editor'
import { useSelector, useDispatch } from "react-redux";
import {getUsersMain,getAllCategory,postProductCreate,getAllbrand, handleProductUpdate} from '../../../actions/Dashboard'
import {} from '../../../actions/Dashboard'
function ProductUpdate({match,product,history}) {
    // 'category','title','slug','description','thumbnail','publish','created','updated'
    const dispatch = useDispatch();
    // console.log(user.is_superuser);
    const user = useSelector(state => state.UserList);
    const categorylist = useSelector(state => state.CategoryList);
    const brandlist = useSelector(state => state.brandList);
    const user2 = useSelector(state => state.User);
    const [category, setcategory] = useState()
    const [brand, setbrand] = useState()
    const [title, settitle] = useState()
    const [slug, setslug] = useState()
    const [status, setstatus] = useState()
    const [color, setcolor] = useState()
    const [type, settype] = useState()
    const [seller, setseller] = useState()
    const [description, setdescription] = useState()
    const [gender, setgender] = useState()
    const [thumbnail, setthumbnail] = useState()
    useEffect(() => {
        dispatch(getUsersMain())
        dispatch(getAllCategory())
        dispatch(getAllbrand())
        for (let index = 0; index < product.length; index++) {
            if(product[index].id==match.params.id) {   
                const elem=product[index]
                setcategory(elem.category)
                setbrand(elem.brand)
                settitle(elem.title)
                setslug(elem.slug)
                setstatus(elem.status)
                setcolor(elem.color)
                settype(elem.type)
                setseller(elem.seller.id)
                setdescription(elem.description)
                setgender(elem.gender)
                setthumbnail(elem.thumbnail)
            }
        }
      }, [product])
      if(user2.is_Autenticated===true){
        if (user2.user.is_superuser===false && user2.user.is_seller===false  ) {
            console.log(123);
                history.push('/')
        }
      }
      if(user2.is_Autenticated === false){
        history.push('/')
  
    }
    console.log(user2.is_Autenticated);
      console.log(product[1]);

    // fields=('category','title','slug','description','thumbnail','publish','created','updated')

    // const [created, setcreated] = useState('')
    // const [updated, setupdated] = useState('')
    const handleSubmit=event=>{
        event.preventDefault();
        try{
            const formdata = new FormData();
            for (let index = 0; index < category.length; index++) {
                formdata.append("category", category[index]);
               }
            // for (let index = 0; index < brand.length; index++) {
            //   formdata.append("brand", brand[index]);
            // } 
            formdata.append("title", title);
            formdata.append("gender", gender);
            formdata.append("type", type);
            formdata.append("brand",brand );
            formdata.append("color", color);
            // formdata.append("price", price);
            formdata.append("slug",slug );
            formdata.append("status", status);
            formdata.append("seller", 1);
            formdata.append("description", description);
            formdata.append("thumbnail", event.target.thumbnail.files[0]);
            // console.log(formdata.getcategory());
            // thumbnail=event.target.thumbnail.files[0]
            // category=[1]
            // const formdata={title,slug,description,seller,status}
            console.log(formdata);
            dispatch(handleProductUpdate(formdata,match.params.id))   
            // console.log(formdata);
            console.log(category);
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
                    <div className=' ' style={{backgroundColor:'#001b47',color:'wheat', height:'3rem',borderRadius:'.3rem',textAlign:'center',fontSize:'1.6rem'}}> به روزکردن محصول</div>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">عنوان کالا</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value={title} onChange={e=>{settitle(e.target.value)}}/>
                </div>
                {/* <div class="form-group col-6">
                    <label for="exampleInputEmail1">قیمت کالا</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value={price} onChange={e=>{setprice(e.target.value)}}/>
                </div> */}
                <div class="form-group col-6">
                    <label for="exampleInputPassword1">آدرس محصول</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder=""value={slug} onChange={e=>{setslug(e.target.value)}}/>
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
                  
                    <label for="exampleInputEmail1">دسته بندی محصول</label>
                    <select name="brand " class="select form-control " required="" id="id_brand" multiple value={category}onChange={e=>{setcategory(Array.from(e.target.selectedOptions,Option=>Option.value))}}>
                    
                        {categorylist.map(category=>(
                            <option value={category.id}>{category.title}</option>
                        ))}
                    </select>
                </div>
                
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">فروشنده</label>

                    <select name="brand " class="select form-control " required="" id="id_brand"value={seller}onChange={e=>{setseller(e.target.value);console.log(user)}}>
                        <option value="" selected="">---------</option>
                        {user.map(seller=>(
                            <option value={seller.id}>{seller.username}</option>    
                        ))}

                    </select>
                </div>
                
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">وضعیت</label>
                    <select name="status" class="select form-control" required="" id="id_status"value={status}onChange={e=>{setstatus(e.target.value)}}>
                        <option value="" selected="">---------</option>

                        <option value="d">پیش نویس</option>

                        <option value="p">منتشر شده</option>

                        {/* <option value="i">در حال برسی</option>

                        <option value="b">برگشت داده شده</option> */}

                    </select>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">برند</label>
                    <select name="status" class="select form-control" required="" id="id_status"value={brand}onChange={e=>{setbrand(e.target.value)}}>
                        <option value="" selected="">---------</option>

                        {brandlist.map(brand=>(
                            <option value={brand.id}>{brand.title}</option>    
                        ))}

                    </select>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">جنسیت</label>
                    <select name="status" class="select form-control" required="" id="id_status"value={gender}onChange={e=>{setgender(e.target.value)}}>
                        <option value="" selected="">---------</option>
                        <option value="male">مرد</option>

                        <option value="female">زن</option>

                        {/* <option value="i">در حال برسی</option>

                        <option value="b">برگشت داده شده</option> */}

                    </select>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">رنگ</label>
                    <select name="status" class="select form-control" required="" id="id_status"value={color}onChange={e=>{setcolor(e.target.value)}}>
                        <option value="" selected="">---------</option>
                        <option value="red">قرمز</option>
                        <option value="blue">آبی</option>
                        <option value="yellow">زرد</option>
                        <option value="green">سبز</option>
                        <option value="black">سیاه</option>
                        <option value="gray">خاکستری</option>
                        <option value="white">سفید</option>
                    </select>
                </div>
                <div class="form-group col-6">
                    <label for="exampleInputEmail1">نوع محصول</label>
                    <select name="status" class="select form-control" required="" id="id_status"value={type}onChange={e=>{settype(e.target.value)}}>
                        <option value="" selected="">---------</option>
                        <option value="shose">کفش</option>
                        <option value="pants">شلوار</option>
                        <option value="shirt">پیراهن</option>
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
                    ثبت محصول
                </button>
            </form>            
        </div>
    )
}

export default ProductUpdate
