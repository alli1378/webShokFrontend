// http://localhost:8000/api/dashbord/article-list/
import http from './httpService'
import config from './config.json'
export const articleList=()=>{
    return http.get(`http://localhost:8000/api/dashbord/article-list/`)
}
// Authorization:`JWT ${localStorage.getItem('token')}`