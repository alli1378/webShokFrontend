import http from "./httpService";
import config from './config.json';

export const getArticles=()=>{
    return http.get(`${config.localapi}/api/articles/`)
}
export const getArticlesCategory=(CategoryId)=>{
    return http.get(`${config.localapi}/api/articles/category/${CategoryId}`)
}
// category/<int:pk></int:pk>
