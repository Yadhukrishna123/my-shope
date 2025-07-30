import React from 'react'
import { GiWorld } from "react-icons/gi";
import { LuPin } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import "./Featurs.css"

const Featurs = () => {
    return (
        <div className='row g-3 justify-content-center align-items-center mt-5 text-center featurs'>
            <div className='sub-sectionss'>
                <GiWorld size={60} />
                <h2 className='fs-5'>Worldwide Shipping</h2>
            </div>
            <div className='sub-sectionss'>
                <LuPin size={60} />
                <h2 className='fs-5'>Best Quality</h2>

            </div>
            <div className='sub-sectionss'>
                <MdOutlineLocalOffer size={60} />
                <h2 className='fs-5'>Best Offers</h2>

            </div>
            <div className='sub-sectionss'>
                <MdOutlinePayment size={60} />
                <h2 className='fs-5'>Secure Payments</h2>

            </div>
        </div>
    )
}

export default Featurs