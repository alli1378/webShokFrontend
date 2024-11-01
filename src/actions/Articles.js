import {getArticles} from './../services/ArticleService'


export const getAllArticles=()=>{
    return async dispatch=>{
        const {data}=await getArticles()
        await dispatch({type:"ARTICLES",payload:data})
    }
}