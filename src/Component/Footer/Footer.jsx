import React from 'react'
import "./Footer.css"

const Footer = () => {
  return ( 
   <div>
     <div className='d-flex mt-5 footer-parent'>
        <div className="subSession">
            <h2 className='text-center'>Quick Links</h2>
            <div className='ms-auto text-center mt-4'>
                <p>Home</p>
                <p>About</p>
                <p>My Account</p>
                <p>Cart</p>
                <p>Contact</p>
            </div>
        </div>
          <div className="subSession">
              <h2 className='text-center'>For her</h2>
            <div className='ms-auto text-center mt-4'>
                <p>Women Jeans</p>
                <p>Women Accessories</p>
                <p>My Account</p>
                <p>Women Jackets</p>
                <p>Heels and Flats</p>
            </div>
        </div>
          <div className="subSession">
               <h2 className='text-center'>For Him</h2>
            <div className='ms-auto text-center mt-4'>
                <p>Men Jeans</p>
                <p>Men Shirts</p>
                <p>Men Shoes</p>
                <p>Men Accessories</p>
                <p>Men Jackets</p>
            </div>
        </div>
          <div className="last-session">
                <img className='w-25' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png" alt="" />
        </div>
    </div>
    <p className='text-center mt-4'>copyright 2025 All rights reserved</p>
   </div>
  )
}

export default Footer