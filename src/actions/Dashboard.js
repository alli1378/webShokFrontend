import {articleList} from '../services/Dashbord'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { successMessage } from '../dashboard/utils/message'
// export const getAllarticleList=()=>{
//     return async dispatch=>{
//         const {data,status}=await articleList()
//         console.log(status);
//         await dispatch({type:"ARTICLESDASHBOARD", payload : data })
//     }
// }
export const getAllarticleList=()=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res =await axios.get(`http://localhost:8000/api/dashbord/article-list/` ,config)
            dispatch({type:"ARTICLESDASHBOARD", payload : res.data })
        } catch (error) {
            console.log('he');
        }
    } else {
        console.log('he');        
    }
}
export const getArticleCreate=(data)=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'multipart/form-data',
                // 'Content-Type': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            // const body=JSON.stringify(data)
            const res =await axios.post(`http://localhost:8000/api/dashbord/article-create/`,data ,config)
            dispatch({type:"ARTICLECREATEDASHBOARD", payload : res.data })
        } catch (error) {
            console.log('hee');
        }
    } else {
        console.log('he');        
    }
}
export const handleArticleUpdate=(data,articleId)=> async (dispatch) =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }

        }
        
   
       try {
            const res =await axios.put(`http://localhost:8000/api/dashbord/article-update/${articleId}`,data ,config)
            dispatch({type:"ARTICLEUPDATEDASHBOARD", payload : res.data })
        } catch (error) {
            // await dispatch({ type: "BRANDUPDATEDASHBOARD", payload: res.data });
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
// export const createNewCourse = (course) => {
//     return async (dispatch, getState) => {
//         const { data, status } = await newCourse(course);
//         if (status === 201) successMessage("دوره با موفقیت ساخته شد");
//         await dispatch({
//             type: "ADD_COURSE",
//             payload: [...getState().courses, data.course],
//         });
//     };
// };

export const getAllProduct=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/product-list/',config)
            dispatch({type:'PRODUCTDASHBOARD',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
export const postProductCreate=(data)=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'multipart/form-data',
                // 'Content-Type': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            // const body=JSON.stringify(data)
            const res =await axios.post(`http://localhost:8000/api/dashbord/product-create/`,data ,config)
            dispatch({type:"PRODUCTCREATEDASHBOARD", payload : res.data })
        } catch (error) {
            console.log('hee');
        }
    } else {
        console.log('he');        
    }
}
export const handleProductUpdate=(data,productId)=> async (dispatch) =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }

        }
        
   
       try {
            const res =await axios.put(`http://localhost:8000/api/dashbord/product-update/${productId}`,data ,config)
            dispatch({type:"PRODUCTUPDATEDASHBOARD", payload : res.data })
        } catch (error) {
            // await dispatch({ type: "BRANDUPDATEDASHBOARD", payload: res.data });
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const getAllCategory=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/category-list/',config)
            dispatch({type:'CATEGORYDASHBOARD',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
export const postCategoryCreate=(data)=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            // const body=JSON.stringify(data)
            const res =await axios.post(`http://localhost:8000/api/dashbord/create-cat/`,data ,config)
            dispatch({type:"CATEGORYCREATEDASHBOARD", payload : res.data })
        } catch (error) {
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const handleCategoryUpdate=(data,categoryId)=> async (dispatch) =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }

        }
        
   
       try {
            const res =await axios.put(`http://localhost:8000/api/dashbord/update-category/${categoryId}`,data ,config)
            dispatch({type:"CATEGORYUPDATEDASHBOARD", payload : res.data })
        } catch (error) {
            // await dispatch({ type: "BRANDUPDATEDASHBOARD", payload: res.data });
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const getAllbrand=()=>async dispatch=>{
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                // 'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/brand/',config)
            dispatch({type:'BRANDDASHBOARD',payload:res.data})
        } catch (error) {
            console.log();
        }
    } 
export const getBrandCreate=(data)=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            // const body=JSON.stringify(data)
            const res =await axios.post(`http://localhost:8000/api/dashbord/create-brand/`,data ,config)
            dispatch({type:"BRANDCREATEDASHBOARD", payload : res.data })
        } catch (error) {
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const handleBrandUpdate=(data,brandId)=> async (dispatch,getState) =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }

        }
        
   
       try {
            const res =await axios.put(`http://localhost:8000/api/dashbord/brand-update/${brandId}`,data ,config)
            dispatch({type:"BRANDUPDATEDASHBOARD", payload : res.data })
        } catch (error) {
            // await dispatch({ type: "BRANDUPDATEDASHBOARD", payload: res.data });
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const getBrandUpdate=(id)=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }

        }
        
        try {
            // const body=JSON.stringify(data)
            const res =await axios.get(`http://localhost:8000/api/dashbord/brand-update/${id}`,config)
            dispatch({type:"GETBRANDUPDATEDASHBOARD", payload : res.data })
        } catch (error) {
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const getAllShose=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/shose-list/',config)
            dispatch({type:'SHOSEDASHBOARD',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
export const getShoseCreate=(data,history)=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            // const body=JSON.stringify(data)
            const res =await axios.post(`http://localhost:8000/api/dashbord/shose-create/`,data ,config)
            console.log(res.status);
            successMessage("ویژگی کفش با موفقیت ایجاد شد")
            // if(res.data==201){

            // }
            history.push('/dashboard/shose-list')

            dispatch({type:"SHOSECREATEDASHBOARD", payload : res.data })
        } catch (error) {
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const handleShoseUpdate=(data,shoseId,history)=> async (dispatch) =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }

        }
        
   
       try {
            const res =await axios.put(`http://localhost:8000/api/dashbord/shose-update/${shoseId}`,data ,config)
            successMessage("ویژگی کفش با موفقیت ایجاد شد")
            
            history.push('/dashboard/shose-list')

            dispatch({type:"SHOSEUPDATEDASHBOARD", payload : res.data })
        } catch (error) {
            // await dispatch({ type: "BRANDUPDATEDASHBOARD", payload: res.data });
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const getAllPants=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/pants-list/',config)
            dispatch({type:'PANTSDASHBOARD',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
export const getPantsCreate=(data)=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            // const body=JSON.stringify(data)
            const res =await axios.post(`http://localhost:8000/api/dashbord/pants-create/`,data ,config)
            dispatch({type:"PANTSCREATEDASHBOARD", payload : res.data })
        } catch (error) {
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const handlePantsUpdate=(data,pantsId)=> async (dispatch) =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }

        }
        
   
       try {
            const res =await axios.put(`http://localhost:8000/api/dashbord/pants-update/${pantsId}`,data ,config)
            dispatch({type:"PANTSUPDATEDASHBOARD", payload : res.data })
        } catch (error) {
            // await dispatch({ type: "BRANDUPDATEDASHBOARD", payload: res.data });
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const getAllShirt=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/shirt-list/',config)
            dispatch({type:'SHIRTDASHBOARD',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
export const getShirtCreate=(data)=> async dispatch =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const body=JSON.stringify(data)
            const res =await axios.post(`http://localhost:8000/api/dashbord/shirt-create/`,body ,config)
            console.log(res.status);
            dispatch({type:"SHIRTCREATEDASHBOARD", payload : res.data })
        } catch (error) {
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const handleShirtUpdate=(data,shirtId)=> async (dispatch,getState) =>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                // 'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }

        }
        
   
       try {
            const res =await axios.put(`http://localhost:8000/api/dashbord/shirt-update/${shirtId}`,data ,config)
            dispatch({type:"SHIRTUPDATEDASHBOARD", payload : res.data })
        } catch (error) {
            // await dispatch({ type: "BRANDUPDATEDASHBOARD", payload: res.data });
            // console.log('h');
        }
    } else {
        console.log('he');        
    }
}
export const getAllUser=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/user-list/',config)
            dispatch({type:'USERDASHBOARD',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
export const getUsersMain=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/AuthorOrSeller-main/',config)
            dispatch({type:'USERMAINDASHBOARD',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
// special
export const getSpecialShose=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/special-shose/',config)
            dispatch({type:'SPACIALSHOSE',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
export const getSpecialPants=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/special-pants/',config)
            dispatch({type:'SPACIALPANTS',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}
export const getSpecialShirt=()=>async dispatch=>{
    if (localStorage.getItem('access')) {
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`
            }
        }
        try {
            const res=await axios.get('http://localhost:8000/api/dashbord/special-shirt/',config)
            dispatch({type:'SPACIALSHIRT',payload:res.data})
        } catch (error) {
            console.log();
        }
    } else {
        console.log();
    }
}