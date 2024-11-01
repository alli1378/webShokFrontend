import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import A from  '../../assets/image/man23.jpg' 
import B from  '../../assets/image/pak.jpg' 
import C from  '../../assets/image/agaei.jpg' 
import D from  '../../assets/image/tarlan-parvaneh-raad-1.jpg' 
import E from  '../../assets/image/kodak.jpg' 
import '../../assets/css/in.css'
import '../../assets/css/productDetail.css'
import Slidesho from './A'
import Header from './Header';
import BrandSlide from './Brand/BrandCarousel';
import ProductCarousel from './Product/ProductCarousel';
import { Helmet } from 'react-helmet';
import Slideshow from './Carousel';

const Home = () => {
    return (
    <div className="">
        <Helmet>
            <title>
                وب شاک
            </title>
        </Helmet>
      <div className="slide-container   justify-content-center ">
          <div className="container-fluid">

           <div className="row rtl "style={{backgroundColor:'rgb(254, 255, 222)',boxShadow: 'rgb(254 255 222) 0rem 4rem 2rem 0rem'}}>

           <div className="rtl mb-2  col-lg-6 " >
            <img className='img-main-man' src={A} alt="" />
           </div>
           <div className="ma-ma col-lg-4 col-12   mb-2">
           <div class="search-box ">
                <h1 className='d-flex justify-content-center'style={{color:'#52734D'}}>  وب شاک</h1>
                <button class="btn-search " style={{outline:'0rem'}}><i class='bx bx-search'></i></button>
                <input type="text" class="input-search " placeholder="دنبال چی میگردی..."/>
                <p className='p-special'>با ما متفاوت باشید .شیک پوش بودن را همراه با ما تجربه کنید. این تخصص ماست.با ما متفاوت باشید .شیک پوش بودن را همراه با ما تجربه کنید. این تخصص ماست.با ما متفاوت باشید .شیک پوش بودن را همراه با ما تجربه کنید. این تخصص ماست.</p>

            </div>
           </div>
           </div>
          </div>

        <div className="brand-control  "style={{marginTop:'5rem'}}>
        <h4 className="rtl mr-3"style={{color:'#52734D'}}>برند های برتر</h4>
        <hr />
<section className="hexagon-gallery d-flex  justify-content-center mt-5 " >
    <div className="  col-12">
        <BrandSlide></BrandSlide>
    </div>
                    
</section>
</div>
 <div className="brand-control  "style={{marginTop:'5rem'}}>
        <h4 className="rtl mr-3"style={{color:'#52734D'}}>محصولات جدید</h4>
        <hr />
<div className="  col-12">
<ProductCarousel></ProductCarousel>
    </div>
</div>
{/* </div> */}
<div className="brand-control  "style={{marginTop:'5rem'}}>
        <h4 className="rtl mr-3"style={{color:'#52734D'}}>برترین برند ایرانی</h4>
        <hr />
<div className="  col-12 rtl ">
    <div className="row ">

{/* <ProductCarousel></ProductCarousel> */}
<div className="col-lg-5   col-12">
    <img className='img-logo tarlan' src={D} alt=""  />
</div>
<div className=" col-lg-4   col-5 ">

<img className='img-logo agaei ' src={C} alt=""  />
    <img className='img-logo agaei mt-3' src={E} alt=""  />

</div>
<div className="col-lg-3 col-6">
    <img className='img-logo pakdel' src={B} alt=""  />
    <div className="card mt-3 pakdel"style={{background:'linear-gradient(135deg, rgb(254, 255, 222), #00b09b)',border: 'solid .009rem white'}}>
        <div className="card-body" >
            <h3 className='d-flex justify-content-center mm-mm'style={{color:'#52734D'}}>خانه مد ایران</h3>
            <p className='mt-5 mtn-brad' style={{color:'#52734D'}}>این یک برند ساختگی است که به عنوان برترین برند  ایرانی ماه سایت انتخابشده  وبعدا با برند واقعی جا به جا میشود.این از دست مواردی است که نیاز به راه اندازی وب سایت دارد.</p>
            <div className="btn btn-lg  mt-5 button-special-brand" style={{width:'19rem',background:'rgb(145, 199, 136)',cursor:'pointer'}}> مشاهده</div>
        </div>
    </div>
    </div>
    </div>
    </div>
</div>
<div className="   d-flex justify-content-center">
{/* <ProductCarousel></ProductCarousel> */}
<div className="col-9 my-5">
<h4 className="rtl mr-3"style={{color:'#52734D'}}>برترین مقالات</h4>
        <hr className='mb-4' />
    <Slideshow></Slideshow>
</div>
    </div>
</div>
      </div>
      
    // </div>
    )
}
export default Home
