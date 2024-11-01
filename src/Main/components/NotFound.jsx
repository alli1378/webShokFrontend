import React from 'react'
import A from '../../assets/image/Balloon Lost-big.png'
import B from '../../assets/image/404-SVG-Animated-Page-Concept.png'
const NotFound = props => {
    return (
        <>
        <div className='d-flex justify-content-center'>
            <img src={A} alt=""  style={{height:'25rem',width:'25rem'}}/>            
        </div>
        <div className='d-flex justify-content-center '>
            <img src={B} alt=""  style={{height:'15rem',width:'25rem'}}/>            
        </div>
        </>
    )
}


export default NotFound
