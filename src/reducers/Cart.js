import{CART_REMOVE_ITEM,CART_ADD_ITEM} from '../actions/types'


const initialState={
    CartItems:[]
}

export const CartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CART_ADD_ITEM:
            const item=action.payload
            const existItem=state.CartItems.find(x=>x.id===item.id)
            if (existItem) {
                return{
                    ...state,
                    CartItems:state.CartItems.map(x=>x.id===existItem.id?item:x)
                }
             } else {
                return{
                    ...state,
                    CartItems:[...state.CartItems,item]
                }
            }
            
        case CART_REMOVE_ITEM:
        
            return{
                ...state,
                CartItems:state.CartItems.filter(x=>x.id !== action.payload)
            }
        
        default:
            return state
    }
}