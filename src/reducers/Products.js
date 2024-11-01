export const ProductsReducer=(state=[],action)=>{
    switch (action.type) {
        case "INIT":
            
            return [...action.payload];
        case "WOMAN":
        
            return [...action.payload];
        case "MAN":
    
            return [...action.payload];
        case "SHIRT":
        
            return [...action.payload];
        case "SHOSE":
        
            return [...action.payload];            
        case "PANTS":
        
            return [...action.payload];            
        case "BRANDMAIN":
        
            return [...action.payload];            
        case "DETAIL":
    
            return {...action.payload};            
                
        default:
            return state;
    }
    // if (action.type === "INIT") {
    //     return [...action.payload];
        
    // }
    // return state
}

export const ProductSpecial=(state=[],action)=>{
    switch (action.type) {
        case "PRODUCTSPECHIAL":
            
            return [...action.payload];
        default:
            return state;
    }
}
export const ProductsBrandDetail=(state=[],action)=>{
    switch (action.type) {
        case "BRANDDETAIL":
            
            return {...action.payload};
        default:
            return state;
    }
}
export const ProductsBrandReducer=(state=[],action)=>{
    switch (action.type) {
        case "BRANDPRODUCTS":
            
            return [...action.payload];
        default:
            return state;
    }
}