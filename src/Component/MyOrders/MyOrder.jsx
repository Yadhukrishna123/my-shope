import React from 'react'
import "./Myorder.css"
import { Image } from 'react-bootstrap'

const MyOrder = () => {
    return (
        <div className='order-parent'>
            <div className="order-content ">
                <div className='order-content-sub '>
                    <div className='m-5 order-img'>
                        <Image className='order-img ' src="https://thumbs.dreamstime.com/b/innovative-medical-device-featuring-eye-image-illustrating-advanced-tracking-technology-generated-ai-358374352.jpg" rounded />
                    </div>
                    <div className='  order-title'>
                        <p>titledefergergeghhd</p>
                    </div>
                    <div className='order-price'>
                        <p>price: ewfrwege</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MyOrder