import {getProducts,
        getProductsWoman,
        getProductsShose,
        getBrand,
        getProductsMan,
        getProductsPants,
        getProductsShirt,
        getBrandProducts,
        getBrandDetail,
        getProduct, 
        getProductSpecial
    } from "./../services/ProductSevice"

export const getAllProducts=()=>{
    return async dispatch=>{
        const {data}=await getProducts();
        await dispatch({type:"INIT", payload : data })
    }
}
export const getAllProductSpecial=(productId)=>{
    return async dispatch=>{
        const {data}=await getProductSpecial(productId);
        await dispatch({type:"PRODUCTSPECHIAL", payload : data })
    }
}
export const getProductDetail=(productId)=>{
    return async dispatch=>{
        const {data}=await getProduct(productId);
        await dispatch({type:"DETAIL", payload : data })
    }
}
export const getAllProductsWoman=()=>{
    return async dispatch=>{
        const {data}=await getProductsWoman();
        await dispatch({type:"WOMAN", payload : data })
    }
}
export const getAllProductsMan=()=>{
    return async dispatch=>{
        const {data}=await getProductsMan();
        await dispatch({type:"MAN", payload : data })
    }
}
export const getAllProductsShirt=()=>{
    return async dispatch=>{
        const {data}=await getProductsShirt();
        await dispatch({type:"SHIRT", payload : data })
    }
}
export const getAllProductsShose=()=>{
    return async dispatch=>{
        const {data}=await getProductsShose();
        await dispatch({type:"SHOSE", payload : data })
    }
}
export const getAllProductsPants=()=>{
    return async dispatch=>{
        const {data}=await getProductsPants();
        await dispatch({type:"PANTS", payload : data })
    }
}
export const getAllBrand=()=>{
    return async dispatch=>{
        const {data}=await getBrand();
        await dispatch({type:"BRANDMAIN", payload : data })
    }
}
export const getBrandDetail2=(BrandId)=>{
    return async dispatch=>{
        const {data}=await getBrandDetail(BrandId);
        await dispatch({type:"BRANDDETAIL", payload : data })
    }
}
export const getAllBrandProducts=(BrandId)=>{
    return async dispatch=>{
        const {data}=await getBrandProducts(BrandId);
        await dispatch({type:"BRANDPRODUCTS", payload : data })
    }
}