export const ArticleListReducer=(state=[],action)=>{
    switch (action.type) {
        case 'ARTICLESDASHBOARD':
            
            return [...action.payload];
        case 'ARTICLECREATEDASHBOARD':
        
            return [...action.payload];
        
        default:
            return state;
    }
}
// export const ArticleCreateReducer=(state=[],action)=>{
//     switch (action.type) {
//         case 'ARTICLECREATEDASHBOARD':
            
//             return [...action.payload];
    
//         default:
//             return state;
//     }
// }
export const ProductListReducer=(state=[],action)=>{
    switch (action.type) {
        case 'PRODUCTDASHBOARD':
            
            return [...action.payload];
        case 'PRODUCTCREATEDASHBOARD':
            
            return [...action.payload];
        
        default:
            return state;
    }
}
export const CategoryListReducer=(state=[],action)=>{
    switch (action.type) {
        case 'CATEGORYDASHBOARD':
            return [...action.payload];
        case  'CATEGORYCREATEDASHBOARD':
            return [...action.payload];
        default:
            return state;
    }
}
export const CategoryReducer=(state=[],action)=>{
    switch (action.type) {
        case 'CATEGORYUPDATEDASHBOARD':
            return [...action.payload];
        default:
            return state;
    }
}
export const brandListReducer=(state=[],action)=>{
    switch (action.type) {
        case 'BRANDDASHBOARD':
            
            return [...action.payload];
    
        case 'BRANDCREATEDASHBOARD':
        
            return [...action.payload];
        case 'BRANDUPDATEDASHBOARD':
    
            return [...action.payload];
                
        default:
            return state;
    }
}
export const brandUpdateReducer=(state=[],action)=>{
    switch (action.type) {
        case 'GETBRANDUPDATEDASHBOARD':
            
            return {...action.payload};
            
        default:
            return state;
    }
}
export const ShoseListReducer=(state=[],action)=>{
    switch (action.type) {
        case 'SHOSEDASHBOARD':
            
            return [...action.payload];
        case  'SHOSECREATEDASHBOARD':
            return [...action.payload];
        default:
            return state;
    }
}
export const PantsListReducer=(state=[],action)=>{
    switch (action.type) {
        case 'PANTSDASHBOARD':
            
            return [...action.payload];
        case  'PANTSCREATEDASHBOARD':
            return [...action.payload];
        default:
            return state;
    }
}
export const ShirtListReducer=(state=[],action)=>{
    switch (action.type) {
        case 'SHIRTDASHBOARD':
            
            return [...action.payload];
        case 'SHIRTCREATEDASHBOARD':
        
            return [...action.payload];
        
        default:
            return state;
    }
}
export const UserListReducer=(state=[],action)=>{
    switch (action.type) {
        case 'USERDASHBOARD':
            
            return [...action.payload];
    
        case 'USERMAINDASHBOARD':
            
                return [...action.payload];
        default:
            return state;
    }
}
export const SpecialReducer=(state=[],action)=>{
    switch (action.type) {
        case 'SPACIALSHOSE':            
            return [...action.payload];
        case  'SPACIALPANTS':
            return [...action.payload];
        case  'SPACIALSHIRT':
            return [...action.payload];
        default:
            return state;
    }
}
// export const ArticleCategoryReducer=(state=[],action)=>{
//     switch (action.type) {
//         case 'ARTICLES_CATEGORY':
            
//             return [...action.payload];
    
//         default:
//             return state;   
//     }
// }