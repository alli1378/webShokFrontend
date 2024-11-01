import React from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {useEffect,Fragment,useState} from 'react'
import {getAllProducts, getAllProductsPants} from '../../../actions/Products'
// import {getProducts} from '../../../services/ProductSevice'
import {PaginateProduct} from '../../utils/PaginateProduct'
import Pagination from '../Paginate'
import ProductCardMain from './ProductCardMain';
import A from '../../../assets/image/pantss.jfif'
import { Helmet } from 'react-helmet';
const ProductPants = () => {
    const [perPage, setperPage] = useState(2)
    const [CurrentPage, setCurrentPage] = useState(1)
    const handlePageChange=(page)=>{
        setCurrentPage(page)
    }
    const Products = useSelector(state => state.Products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsPants());
    }, []);
    const paginate=(PaginateProduct(Products ,CurrentPage,perPage))
    return (
        <>
         <Helmet>
            <title>
                وب شاک|شلوار 
            </title>
        </Helmet>
            <div class="">
                <div class="d-flex justify-content-center rtl" style={{background: 'linear-gradient(to top, #FFFFFF, rgb(254, 255, 222))'}}>
                    <img src={A} alt="" className='' style={{width:'28rem',height:'26rem',border:'solid .03rem #8080804a',borderRadius:'1rem 9rem'}}/>
                </div>
            </div>
            <h2 class="d-flex justify-content-center rtl mt-5" style={{color:'#527357'}}> شلوار</h2>
            <hr />
            <div class="container mt-3">
                <div class="row d-flex justify-content-center">
                    {paginate.map(Product=>(
                       <ProductCardMain product={Product}/>
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination 
                        total={Products.length}
                        currentPage={CurrentPage}
                        perPage={perPage}
                        onPageChange={handlePageChange}

                    />
                </div>
            </div>
        </>
        
       
        )

    }
    export default ProductPants
