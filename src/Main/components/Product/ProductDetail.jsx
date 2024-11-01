import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductSpecial, getProductDetail } from '../../../actions/Products';
// import React from 'react'
import '../../../assets/css/productDetail.css'

const ProductDetail = ({match,history}) => {
    const [key, setkey] = useState()
    const [qty, setqty] = useState(1)
    const Product = useSelector(state => state.Products);
    const special = useSelector(state => state.SpecialList);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllProductSpecial(match.params.id))
        dispatch(getProductDetail(match.params.id));
        // console.log(match);
    }, []);
    // console.log(key);
    const addToCartHandler=()=>{
        // console.log(key);
        history.push(`/Cart/${key}?${qty}`)
    }    
    return (
        <div className="container">
             <Helmet>
            <title>
                وب شاک|محصول 
            </title>
        </Helmet>
            <div className="row">

            {/* <div className="">jrjr</div> */}
            <div className="col-12   d-flex justify-content-center mt-3 ">

            <img className=" mt-5 card-img-lg"  src={`${Product.thumbnail}`}/>
                <div className="card rtl card-main-product">
                <img className="  card-img-top card-img-top-style" src={`${Product.thumbnail}`}/>
                    <div className="card-body">
                    <h5 class="card-title mt-3">{Product.title}</h5>
                        <p>آماده ارسال</p>
                        <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
                        <div class="d-flex  mt-2 ">
                        <span class=" mx-3  ">رنگ:</span>
                        <span class=" mr-3 mb-2 color-circle">{Product.color}</span>
                        </div>
                        <span class=" mx-3  mb-1">سایز:</span>
                        <div class=" ml-5 ">
                            {special.map(spe=>(
                                <>
                                    <button class=" btn  mr-1 color-btn"value={spe.id} onClick={e=>{setkey(e.target.value)}}>{spe.sizeshose}{spe.sizepants}{spe.sizeshirt}</button>

                                </>
                            ))}
                                                    <div className="mt-2" style={{display:'block'}}>
                        <i class='bx bx-plus' value={qty} onClick={ ()=>{setqty(qty+1)}}></i>
                        <span className='btn btn-info mx-2'>{qty}</span>
                        <i class='bx bx-minus'value={qty} onClick={()=>{if(qty!==0)setqty(qty-1)}}></i>
                    </div>
                                {/* <button class=" btn  mr-1 color-btn">19</button>
                                <button class=" btn  mr-1 color-btn">19</button>
                                <button class=" btn  mr-1 color-btn">19</button>
                                <button class="btn btn-light mr-1">42</button>
                                <button class="btn btn-light mr-1">40</button>
                                <button class="btn btn-light mr-1">41</button>
                                <button class="btn btn-light mr-1">43</button> */}
                        </div>
                        <div className="d-flex mb-3 justify-content-center">
                            <h5>قیمت:</h5>
                            <p className='ml-4 '>300000 تومان </p>
                        </div>
                        <div className="d-flex justify-content-center">
                        <button className='btn btn-lg  ' style={{background: 'linear-gradient(to top, rgb(254, 255, 222), rgb(0, 176, 155))'}} onClick={addToCartHandler}> افزودن به سبد خرید</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default ProductDetail
