import React from 'react'
import F from  '../../assets/image/logo.png' 

export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="pt-4 my-3 pt-md-5 border-top rtl">
                <div className="row">
                    <div className="col-12 col-md">
                    <img className="mb-2" style={{height:'5rem',width:'5rem'}} src={F} alt="" width="24" height="24"/>
                    {/* <small className="d-block mb-3 "style={{color:'#52734D'}}>© 2021</small> */}
                    </div>
                    <div className="col-6 col-md">
                    <h5 style={{color:'#52734D'}}>درباره</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className=""style={{color:'#52734D'}} href="#">تیم ما</a></li>
                        <li><a className=""style={{color:'#52734D'}} href="#">قوانین </a></li>
                        <li><a className=""style={{color:'#52734D'}} href="#">ذر باره سایت</a></li>
                        <li><a className=""style={{color:'#52734D'}} href="#">حریم خوصوصی</a></li>
                        {/* <li><a className=""style={{color:'#52734D'}} href="#">Another one</a></li>
                        <li><a className=""style={{color:'#52734D'}} href="#">Last time</a></li> */}
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5 style={{color:'#52734D'}}>خدمات مشتریان</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className=""style={{color:'#52734D'}} href="#">پاسخ به پرسش‌های متداول</a></li>
                        <li><a className=""style={{color:'#52734D'}} href="#">شرایط استفاده</a></li>
                        <li><a className=""style={{color:'#52734D'}} href="#">رویه‌های بازگرداندن کالا</a></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5 style={{color:'#52734D'}}>سفارش</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className=""style={{color:'#52734D'}} href="#">نحوه ثبت سفارش</a></li>
                        <li><a className=""style={{color:'#52734D'}} href="#">رویه ارسال سفارش</a></li>
                        <li><a className=""style={{color:'#52734D'}} href="#">شیوه‌های پرداخت</a></li>
                    </ul>
                    </div>
                    
                </div>
                </footer>
                <div className="d-flex justify-content-center">
                        <i style={{color:'#c13584',fontSize:'2rem'}} className='ml-2 bx bxl-instagram'></i>
                        <i style={{color:'#08a0e9',fontSize:'2rem'}} className='ml-2 bx bxl-twitter'></i>
                        <i style={{color:'#0088cc',fontSize:'2rem'}} className='ml-2 bx bxl-telegram'></i>
                        <i style={{color:'#25d366',fontSize:'2rem'}} className='ml-2 bx bxl-whatsapp-square'></i>
                        <i style={{color:'#0077b5',fontSize:'2rem'}} className='ml-2 bx bxl-linkedin'></i>
                    </div>
            </div>
            <footer className=" d-flex justify-content-center align-items-center  rtl" style={{height:'3rem',background:'rgb(254, 255, 222)'}} >
                <p className=''style={{fontSize:'1.1rem',color:'#52734D'}}>تمامی حقوق مادی و معنوی مربوط به شرکت وب شاک است.</p>
            </footer>
         
        </>
    )
}
// export default Footer
