// import React from 'react'
import React from 'react'
import Sidebar from './Sidebar'
import S from './S'
import { MenuUnfoldOutlined , MenuOutlined} from '@ant-design/icons';
import { useState } from 'react'; 
import {Button} from 'antd'
import Dashord from '../Dashboard';
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Header= ({collapsed,toggleCollapsed}) => {
    // const []
    console.log(collapsed);
    return (
        // <div >
                           
        //     <nav className=" rtl navbar navbar-expand-lg fix-top "style={{  backgroundColor: '#333333'}}>
            
        //     <a className="navbar-brand" href="#">Navbar</a>
                            
        // </nav>
        

          
        // </div>
        <Navbar bg="dark" className='rtl'sticky="top"  variant=""style={{  backgroundColor: '#44647c'}}>
    {/* <Container> */}
        {/* <div className=' side-Hamberger rtl'> */}
        <Button type='text' onClick={toggleCollapsed} style={{color:'wheat',marginBottom:'1rem'}}>
                                {(collapsed ? <MenuUnfoldOutlined /> : <MenuOutlined />)}
        </Button>
            {/* </div> */}
            
    <Link to='/' style={{color:'white',fontSize:'1.2rem'}}>وب شاک</Link>
    {/* <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
    {/* </Container> */}
  </Navbar>
    )
}

// class Header extends React.Component{
    
        
//     render() {
//     // const [colapsed]
    
//     }
// }

export default Header
