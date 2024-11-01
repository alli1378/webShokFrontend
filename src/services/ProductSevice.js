import http from './httpService' 
import config from './config.json'
import axios from "axios"

export const getProducts=()=>{
    // console.log(http.get(`${config.localapi}/api/products/`));
    return http.get(`${config.localapi}/api/products`)
}
export const getProductSpecial=(productId)=>{
    // console.log(http.get(`${config.localapi}/api/products/`));
    return http.get(`${config.localapi}/api/product/special/${productId}`)
}
export const getProduct=(productId)=>{
    // console.log(http.get(`${config.localapi}/api/products/`));
    return http.get(`${config.localapi}/api/product/${productId}`)
}
export const getProductsPants=()=>{
    console.log(http.get(`${config.localapi}/api/products/pants`));
    return http.get(`${config.localapi}/api/products/pants`)
}
export const getProductsShose=()=>{
    console.log(http.get(`${config.localapi}/api/products/shose`));
    return http.get(`${config.localapi}/api/products/shose`)
}
export const getProductsShirt=()=>{
    console.log(http.get(`${config.localapi}/api/products/shirt`));
    return http.get(`${config.localapi}/api/products/shirt`)
}
export const getProductsMan=()=>{
    console.log(http.get(`${config.localapi}/api/products/man`));
    return http.get(`${config.localapi}/api/products/man`)
}
export const getProductsWoman=()=>{
    console.log(http.get(`${config.localapi}/api/products/woman`));
    return http.get(`${config.localapi}/api/products/woman`)
}
export const getBrand=()=>{
    console.log(http.get(`${config.localapi}/api/brand/`));
    return http.get(`${config.localapi}/api/brand/`)
}
export const getBrandDetail=(BrandId)=>{
    console.log(http.get(`${config.localapi}/api/brand/`));
    return http.get(`${config.localapi}/api/brand/${BrandId}`)
}
export const getBrandProducts=(BrandId)=>{
    // console.log(http.get(`${config.localapi}/api/brand/`));
    return http.get(`${config.localapi}/api/products/brand/${BrandId}`)
}
//     path('products/brand/<int:pk>',BrandProductList.as_view(),name='brand-pro'),
