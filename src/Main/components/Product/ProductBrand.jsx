import React from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {useEffect,Fragment,useState} from 'react'
import {getAllBrandProducts, getAllProducts, getBrandDetail2} from '../../../actions/Products'
// import {getProducts} from '../../../services/ProductSevice'
import {PaginateProduct} from '../../utils/PaginateProduct'
import Pagination from '../Paginate'
import ProductCardMain from './ProductCardMain';
import { Helmet } from 'react-helmet';
const ProductBrandList = ({match}) => {
    // const classes = useStyles();
    // console.log(getProducts);
    // console.log(Products);
    const [perPage, setperPage] = useState(2)
    const [CurrentPage, setCurrentPage] = useState(1)
    const handlePageChange=(page)=>{
        setCurrentPage(page)
    }
    const Products = useSelector(state => state.ProductBrandList);
    const brandDetail = useSelector(state => state.BrandDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBrandProducts(match.params.id));
        dispatch(getBrandDetail2(match.params.id));
        // console.log(match);
    }, []);
    console.log(Products);
    const paginate=(PaginateProduct(Products ,CurrentPage,perPage))
    return (
        <>
            <Helmet>
            <title>
                وب شاک|محصولات برند 
            </title>
        </Helmet>
        {/* <Header></Header> */}
            <div class="">
                <div class="d-flex justify-content-center rtl" style={{background: 'linear-gradient(to top, #FFFFFF, rgb(254, 255, 222))'}}>
                    <img src={brandDetail.thumbnail} alt="" className='' style={{width:'30rem',height:'25rem',border:'solid .03rem #8080804a',borderRadius:'50%'}}/>
                </div>
            </div>
            <h2 class="d-flex justify-content-center rtl mt-5" style={{color:'#527357'}}> پیراهن</h2>
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
    export default  ProductBrandList 

