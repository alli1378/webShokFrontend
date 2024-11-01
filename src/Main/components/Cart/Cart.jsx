import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, RemoveFromCart } from '../../../actions/Cart'
import{Link}from'react-router-dom'
import { Helmet } from 'react-helmet'
// import {useLocation} from 'react-router-dom'
function Cart({match,location}) {
    const qty2 = location.search?Number(location.search.split('?')[1]):1
    // console.log(qty);
    const [qty, setqty] = useState(0)
    const dispatch=useDispatch()
    const cart = useSelector(state => state.Cart.CartItems)

    console.log(cart);
    useEffect(() => {
        if (match.params.id) {
            
            dispatch(AddToCart(match.params.id,qty2))
        }
    }, [dispatch,match.params.id,qty2])
    const removeFromCarthandler=(id)=>{
        dispatch(RemoveFromCart(id))
    }
    return (
        <div class="  mt-5">
             <Helmet>
            <title>
                وب شاک|سبد خرید 
            </title>
        </Helmet>
        <div className="container">
        <div className="row rtl">

        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h2>{cart.reduce(
                        (acc,item)=>acc+item.qty,0
                    )}</h2>
                    <h2>قیمت:{cart.reduce(
                        (acc,item)=>acc+(item.qty*item.price),0
                        )}
                        تومان
                    </h2>
                    <div className="btn btn-info"disabled={cart.length===0}>ادامه خرید</div>
                </div>
            </div>
        </div>   
        <div class="col-8 ">
            <div class="card">
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>عنوان کالا</th>
                      <th> برند</th>
                      <th>رنگ</th>
                      <th>تصویر</th>
                      <th>تعداد</th>
                      <th>قیمت</th>
                      <th>سایز</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(CartItem=>(
                      <tr>

                        <td>
                          
                          <Link to={`/product/${CartItem.product.id}`}>{CartItem.product.title}</Link>
                          
                        </td>
                        <td><img src={`${CartItem.product.brand.thumbnail}`} style={{width:'4rem',height:'4rem',borderRadius:'50%'}}/></td>
                        <td>{CartItem.product.color}</td>
                        <td><img src={`${CartItem.product.thumbnail}`} style={{width:'10rem',height:'7rem',borderRadius:'20%'}}/></td>
                        <td>{CartItem.price}</td>
                        <td>{CartItem.qty}
                        </td>
                        <td>{CartItem.sizepants}{CartItem.sizeshose}{CartItem.sizeshirt}</td>
                        <td>
                            {/* <input type="text" value={qty} id={CartItem.id}  />
                            <button value={qty2} > kfkgk</button> */}
                        </td>
                        <td onClick={()=>{removeFromCarthandler(CartItem.id)}}>
                            <i class='bx bx-trash' ></i>
                        </td>
                    </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
            {/* <h3>محتوا برای نمایش وجود ندارد.</h3> */}
        </div>
        </div>
        </div>

      </div>
    )
}

export default Cart
