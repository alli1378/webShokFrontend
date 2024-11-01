import React from 'react'
import '../../assets/css/sidbar.css'
import '../../assets/css/bootstrap-rtl.min.css'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { TwitterOutlined,InstagramOutlined,StarOutlined, StarFilled, StarTwoTone,PieChartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import loin from './loin.jpg' 
import loinn from './place2.jpg'
import { useState } from 'react'; 
// import '../../../public/fonts/fontawesome-webfont.svg'
// import { Icons } from 'rc-steps/lib/interface';
// import { Icon } from 'antd';
// import Icon from '@ant-design/icons'
// import MessageSvg from 'path/to/message.svg'
const { Panel } = Collapse;
function Sidebar() {
    // const [status,setstatus]=useState(true)  
    return (
        
            
                
                <div className="   " >
                
                <section className="hexagon-gallery d-flex  justify-content-center  " >

                    <div className="hex ml-2 mt-3"><img className='img-logo' src={loin} alt="some"/></div>

                </section> 
                            {/* <TwitterOutlined fill='wheat' class='sosial'></TwitterOutlined> 
                            <InstagramOutlined slass='sosial'></InstagramOutlined>            */}
                <h3 className='rtl d-flex justify-content-center mt-2'style={{color:'wheat'}}>Alireza</h3>    
                <Collapse defaultActiveKey={['']}  className='sidebar-aa mt-3'>
                    <Panel style={{borderRadius:'.8rem'}} header={<div className=' 'style={{fontSize:'1.1rem'}}><i  class='bx bx-log-out'></i>محصولات</div>} key="1" className='mb-1 '>
                        <div className='mb-1 rtl btn  a '><a href="#" className='d-flex size-icon'><PieChartOutlined /><p className='mr-3'>افزودن مقالات</p></a></div>
                        <div className='mb-1 rtl btn  a'>a</div>
                        <div className=' rtl btn  a'>a</div>
                    </Panel>
                    <Panel header="محصولات" key="2" className=' mb-1'>
                        <div className='mb-1 rtl btn  a'>a</div>
                        <div className='mb-1 rtl btn  a'>a</div>
                        <div className=' rtl btn  a'>a</div>
                    </Panel>
                    <Panel header="محصولات" key="3" className=' mb-1'>
                        <div className='mb-1 rtl btn  a'>a</div>
                        <div className='mb-1 rtl btn  a'>a</div>
                        <div className=' rtl btn  a'>a</div>
                    </Panel>
                    
                </Collapse>
               
                </div>  
               
    )
}

export default Sidebar
