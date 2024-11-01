import React from 'react'
import { Link } from 'react-router-dom'

const ProductCardMain = ({brand,product}) => {
    return (
        <div class="a-box">
            <div class="img-container">
                <div class="img-inner">
                <div class="inner-skew">
                    <img src={`${product.thumbnail}`}/>
                </div>
                </div>
            </div>
            <div class="text-container">
                <div className="rtl">
                    {console.log(product.price)}
                    {/* <img className='' style={{position:'absolute',height:'3rem',width:'3rem',borderRadius:'50%',marginTop:'-2.5rem',border:'solid rgb(145, 199, 136) .09rem'}} src={`${brand.thumbnail}`} alt="" /> */}
                </div>
                <Link to={`/product/${product.id}`}>
                    <h3 className=''style={{color:'rgb(145, 199, 136)'}}>{product.title}</h3>
                </Link>
                <div>
                    <div className="d-flex  ">
                        <p className='ml-3 rtl'>
                        
                        {product.price}
                        تومان </p>
                        <p className='ml-5'>:قیمت</p>
                    </div>
                {/* This a demo experiment to skew image container. It looks good. */}
                </div>
            </div>        
        </div>
    )
}

export default ProductCardMain
