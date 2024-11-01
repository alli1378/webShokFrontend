// import { Menu } from 'antd';
// import {} from '@ant-design/icons';
import React from 'react'
import '../../assets/css/s.css'
import '../../assets/css/bootstrap-rtl.min.css'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { StarOutlined, StarFilled, StarTwoTone,PieChartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import loin from './loin.jpg' 
import loinn from './place2.jpg'
import { MenuUnfoldOutlined , MenuOutlined} from '@ant-design/icons';
// import { useState } from 'react'; 
import {Button} from 'antd'

const { SubMenu } = Menu;

class S extends React.Component {
    
     
    

  render() {
    const { Panel } = Collapse;
    return (
     
        
         
            

            <div className="  " >
                <section className="section  d-flex justify-content-center">
                    <article className='article'>       
                        <img className='img' alt="" src={loinn}/>
                        
                    </article>
                <u></u>
                </section> 
            {/* <h3 className='rtl text-wheat my-3'>Alireza</h3>     */}
            
            <Collapse defaultActiveKey={['']}  className=' mt-3'>
                <Panel  header={<PieChartOutlined className='size--icon panel'/>} key="1" className='mb-1 ml-lg-2 panell'>
                <div className='mb-1 rtl btn panel-item '><a href="#" className='d-flex size--icon'><PieChartOutlined /><p className='mr-3'></p></a></div>
                <div className='mb-1 rtl btn panel-item  '><a href="#" className='d-flex size--icon'><PieChartOutlined /><p className='mr-3'></p></a></div>
                <div className='mb-1 rtl btn  panel-item '><a href="#" className='d-flex size--icon'><PieChartOutlined /><p className='mr-3'></p></a></div>

                </Panel>
                <Panel header={<PieChartOutlined className='size--icon panel' />} key="2" className=' mb-1 ml-lg-2 panell'>
                    
                </Panel>
                <Panel header={<PieChartOutlined className='size--icon panel' />} key="3" className=' mb-1 ml-lg-2 panell'>
                    
                </Panel>
                
            </Collapse>
           
            </div>  
  
        
    );
  }
}

export default S;
