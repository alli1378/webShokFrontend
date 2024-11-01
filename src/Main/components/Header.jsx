import React,{Fragment} from 'react'
import { Link,NavLink } from 'react-router-dom'
import{Button,Nav,Navbar,NavDropdown,Form,FormControl,Col} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import '../../assets/css/header.css'
import A from '../../assets/image/logo.png'
import {connect,useSelector} from 'react-redux'
import {logout} from '../../actions/User'
function Header({logout}) {
  // mapStateToProps()
  const user = useSelector(state => state.User.user)  
  const isAutenticated=useSelector(state=>state.User.is_Autenticated)
  // const user_name=user.username
  console.log(user);
  const guestLinks=()=>(
    <Fragment>
      <Link className='color-main mt-2' to='/login'>ورود</Link>/<Link className='color-main mt-2' to='/register'>ثبت نام</Link>
    </Fragment>
  )
  const authLinks=()=>(
      <Fragment className=''>
        <Link className='color-main mt-2 ' to='/Profile'>
          <i class='bx bxs-user rtl ' style={{fontSize:'1.2rem'}}>
            <span className='' style={{fontSize:'.8rem',fontFamily:'Byekan'}}>
              {user?user.first_name :''}
              {user?user.last_name :''}
              {/*  */}
            </span>
          </i>
        </Link>
        <Link className='color-main mt-2 ml-3' to=''onClick={logout}><i style={{fontSize:'1.2rem'}} class='bx bx-log-out'></i></Link>
      </Fragment>
  )
  
  return (
      <Navbar className='rtl' style={{backgroundColor:'#FEFFDE'}} expand="lg">
        <Navbar.Brand href="#" className='color-main'><img src={A} alt=""  style={{height:'4rem'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">جستجو</Button>
          </Form> */}
          <Nav
            className="mr-auto my-5 my-lg-0 rtl "
            
            navbarScroll
          >
          {/* <div className="col-4"></div> */}
          <div className=""style={{marginRight:'28rem'}}></div>
          <Nav.Link className='color-main mt-2'><Link className='color-main mt-2' to='/articles'>مقالات</Link></Nav.Link>
          <Nav.Link className='color-main mt-2' ><Link className='color-main mt-2' to=''>محصولات مورد علاقه</Link></Nav.Link>
          <Nav.Link className=''><Link className="btn color-main  " style={{backgroundColor:'#91C788'}} to='/'>وب شاک</Link></Nav.Link>
          {/* <Nav.Link className='' href="#action1"></Nav.Link> */}' 

          <Nav.Link className='color-main mt-2' ><Link className='color-main mt-2' to={`/products/woman`}>زنانه</Link></Nav.Link>
          <Nav.Link className='color-main mt-2' ><Link className='color-main mt-2' to='/products/man'>مردانه</Link></Nav.Link>
          <Nav.Link className='color-main mt-2' ><Link className='color-main mt-2' to=''>کودکانه</Link></Nav.Link>
          <div className=""style={{marginRight:'24rem'}}></div>
          <Nav.Link className='color-main mt-2' ><Link className='color-main mt-2' to=''></Link></Nav.Link>
          <Nav.Link className='color-main mt-2' >{isAutenticated?authLinks():guestLinks()}</Nav.Link>

          {/* <div className="col-6"></div> */}
          
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Brand href="#" className='color-main'>وب شاک</Navbar.Brand> */}

      </Navbar>
    )
}
const mapStateToProps=state=>({
  isAutenticated:state.User.is_Autenticated,
  user:state.User.user 
})
export default  connect(null,{logout})(Header);
