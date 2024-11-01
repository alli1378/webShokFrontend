import React from 'react'
import J from  '../../assets/image/1234.png' 
import H from  '../../assets/image/567.png' 
import I from  '../../assets/image/dely.png' 
import K from  '../../assets/image/del.png' 

const Property = () => {
    return (
        <div className="brand-control  "style={{marginTop:'5rem'}}>
        <h4 className="rtl mr-3"style={{color:'#52734D'}}>ویژگی</h4>
        <hr />
        <div className="container">

        <div className="row  rtl">
            <div className="col-3">
            <img className='img-logo  ' style={{height:'5rem',width:'5rem'}} src={J} alt=""  />
            <p className='mt-5 ' >قابلیت بازگرداندن کالا</p >

            </div>
            <div className="col-3">

            <img className='img-logo  ' style={{height:'5rem',width:'5rem'}} src={H} alt=""  />
            <p className='mt-5 ' >ضمانت اصل بودن کالا</p >
            </div>
            <div className="col-3">

            <img className='img-logo  ' style={{height:'5rem',width:'5rem'}} src={I} alt=""  />
            <p className='mt-5 ' >حمل ونقل رایگان</p >
            </div>
            <div className="col-3">

            <img className='img-logo mt-3 ' style={{height:'4rem',width:'4rem'}} src={K} alt=""  />
            <p className='mt-5 ' >پرداخت درب منزل</p >
            </div>
           
            
            
            
        </div>
        </div>
</div>

    )
}

export default Property
