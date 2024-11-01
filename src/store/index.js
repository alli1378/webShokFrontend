import { applyMiddleware, compose, createStore } from "redux";
import { Redusers } from "../reducers/index";
import thunk from 'redux-thunk'
import { getAllProducts } from "../actions/Products";
import {getAllArticles} from './../actions/Articles'
const CartFormLocalStorege=localStorage.getItem('CartItems')?
JSON.parse(localStorage.getItem('CartItems')):[]
const initState={Cart:{CartItems:CartFormLocalStorege}}
export const store = createStore(
    Redusers,
    initState,

    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

//Initialize
// store.dispatch(getAllProducts());
// store.dispatch(getAllArticles());

//subscribe
store.subscribe(() => console.log(store.getState()));
