import { combineReducers } from "redux";
import {ProductsReducer,
        ProductsBrandReducer,
        ProductsBrandDetail,
        ProductSpecial} from './Products'
import {ProductReducer} from './Product'
import {UserReducer} from './User'
import {ArticleReducer,ArticleCategoryReducer} from './Articles'
import {ArticleListReducer
        ,ProductListReducer
        ,ShirtListReducer
        ,ShoseListReducer
        ,PantsListReducer
        ,brandListReducer
        ,brandUpdateReducer
        ,CategoryListReducer
        ,CategoryReducer
        ,UserListReducer
        ,SpecialReducer} from './Dashboard'
import { CartReducer } from "./Cart";
export const Redusers=combineReducers({
    Products: ProductsReducer,
    Product: ProductReducer,
    User: UserReducer,
    Articles:ArticleReducer,
    ArticlesCategory:ArticleCategoryReducer,
    ArticleList:ArticleListReducer,
    ProductList:ProductListReducer,
    SpecialList:ProductSpecial,
    ProductBrandList:ProductsBrandReducer,
    BrandDetail:ProductsBrandDetail,
    CategoryList:CategoryListReducer,
    CategoryUpdate:CategoryReducer,
    brandList:brandListReducer,
    brandUpdate:brandUpdateReducer,
    ShoseList:ShoseListReducer,
    PantsList:PantsListReducer,
    ShirtList:ShirtListReducer,
    UserList:UserListReducer,
    Special:SpecialReducer,
    Cart:CartReducer
})