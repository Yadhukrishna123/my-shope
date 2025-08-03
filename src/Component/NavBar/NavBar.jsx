import React, { useContext, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./navBar.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
// import { StateContext } from '../../Context/Appprovider';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const totalProduct = useSelector((state) => state.userAuth.userCartItems)
  const [expanded, setExpanded] = useState(false);
     const user = useSelector((state) => state.userAuth.user)
     console.log(user)

  const handleCloseNav = () => {
    setExpanded(false)
  }

  const totalItemOfCart =totalProduct && totalProduct.length
  // console.log(totalItemOfCart);
  const isLoggedIn = useSelector((state) => state.userAuth.isAuthentication)

  return (
    <Navbar expand="lg" className="nav-bar p-4" expanded={expanded} onToggle={setExpanded}>
      <Container fluid>
        <Navbar.Brand className='text-light fs-2'>FluxShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />



        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto mt-1 ">
            <Nav.Link className='text-light' onClick={handleCloseNav}  as={Link} to="/">Home</Nav.Link>
            {/* <Nav.Link className='text-light' onClick={handleCloseNav} as={Link} to="/account">account</Nav.Link> */}
           
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className='fs-6 text-light' onClick={handleCloseNav} as={Link} to="/search">Search</Nav.Link>
            <Nav.Link className='fs-6 text-light' onClick={handleCloseNav} as={Link} to="/about">About</Nav.Link>
            <Nav.Link className='fs-6 text-light' onClick={handleCloseNav} as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link className='fs-6 text-light' onClick={handleCloseNav} as={Link} to="/cart"><FaShoppingCart size={25} /></Nav.Link>
            <div className='item-length position-relativ'>
              <span>{totalItemOfCart}</span>
            </div>
            {isLoggedIn === true ? (                            
              <Nav.Link className='fs-6 text-light' onClick={handleCloseNav} as={Link} to={`/account/${user._id}`}><FaUserCircle size={25} /> </Nav.Link>
            ) : (
              <Nav.Link className='fs-6 text-light' onClick={handleCloseNav} as={Link} to="/login">loggin</Nav.Link>

            )}





          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar