import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='d-flex footer-parent'>

            <div className='footer-sub ms-4'>
                <h3 className='text-center'>Quick Links</h3>
               <div className='text-center'>
                 <ul style={{ display: "flex", flexDirection: "column", listStyle: "none" }}>
                    <li className='mt-2'>
                        Home
                    </li >
                    <li className='mt-2'>
                        About
                    </li>
                    <li className='mt-2'>
                        My Account
                    </li>
                    <li className='mt-2'>
                        Cart
                    </li>
                    <li className='mt-2'>
                        Contact
                    </li>
                </ul>
               </div>
            </div>
            <div className='footer-sub ms-4'>
                <h3 className='text-center'>For her</h3>
             <div className='text-center'>
                   <ul style={{ display: "flex", flexDirection: "column", listStyle: "none" }}>
                    <li className='mt-2'>
                        Women Jeans
                    </li >
                    <li className='mt-2'>
                        Tops and Shirts
                    </li>
                    <li className='mt-2'>
                        Women Jackets
                    </li>
                    <li className='mt-2'>
                        Heels and Flats
                    </li>
                    <li className='mt-2'>
                        Women Accessories
                    </li>
                </ul>
             </div>
            </div>
             <div className='footer-sub ms-4'>
                <h3 className='text-center'>For Him</h3>
              <div className='text-center'>
                  <ul style={{ display: "flex", flexDirection: "column", listStyle: "none" }}>
                    <li className='mt-2'>
                        Men Jeans
                    </li >
                    <li className='mt-2'>
                        Men Shirts
                    </li>
                    <li className='mt-2'>
                        Men Shoes
                    </li>
                    <li className='mt-2'>
                       Men Accessories
                    </li>
                    <li className='mt-2'>
                        Men Jackets
                    </li>
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Footer