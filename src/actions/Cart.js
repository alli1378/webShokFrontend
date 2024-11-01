import axios from 'axios'
import {CART_ADD_ITEM,CART_REMOVE_ITEM}from './types'


export const AddToCart=(id,qty)=>async (dispatch,getState)=>{
    try {
        const {data}=await axios.get(`http://localhost:8000/api/special/${id}`)
        dispatch({
                type:CART_ADD_ITEM,
                payload:{
                    qty,
                    sizepants: data.sizepants,
                    id:data.id,
                    sizeshose: data.sizeshose,
                    sizeshirt: data.sizeshirt,
                    price: data.price,
                    count: data.count,
                    product: {
                        id: data.product.id,
                        thumbnail: data.product.thumbnail,
                        title: data.product.title,
                        brand: {
                            id: data.product.brand.id,
                            thumbnail: data.product.brand.thumbnail,
                            title:data.product.brand.title
                        },
                        color: data.product.color
                    }      
                                }
            })
        localStorage.setItem('CartItems',JSON.stringify(getState().Cart.CartItems))
    } catch (error) {
        console.log('k');
    }
}
export const RemoveFromCart=(id)=> (dispatch,getState)=>{
    try {
        dispatch({
                type:CART_REMOVE_ITEM,
                payload:id,
            })
        localStorage.setItem('CartItems',JSON.stringify(getState().Cart.CartItems))
    } catch (error) {
        console.log('k');
    }
}