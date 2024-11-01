import http from './httpService'
import config from './config.json'

// export const loginUser = user=>{
//     return http.post(
//         `http://localhost:8000/api/auth/jwt/create/`,JSON.stringify(user)
//     )
// }

export const registerUser =user=>{
    return http.post(`http://localhost:8000/api/auth/users/`, JSON.stringify(user))
}
