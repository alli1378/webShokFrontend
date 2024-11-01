import {getArticlesCategory} from '../services/ArticleService'


export const getAllArticlesCategory=(CategoryId)=>{
    return async dispatch=>{
        const {data}=await getArticlesCategory(CategoryId);
        await dispatch({type:'ARTICLES_CATEGORY',payload:data})
    }
}