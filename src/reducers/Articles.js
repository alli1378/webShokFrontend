export const ArticleReducer=(state=[],action)=>{
    switch (action.type) {
        case 'ARTICLES':
            
            return [...action.payload];
    
        default:
            return state;
    }
}
export const ArticleCategoryReducer=(state=[],action)=>{
    switch (action.type) {
        case 'ARTICLES_CATEGORY':
            
            return [...action.payload];
    
        default:
            return state;   
    }
}