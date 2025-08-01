import React from 'react'
import "./Home3.css"
import { useSelector } from 'react-redux'

const Home3 = () => {
    
    // const address = useSelector((state)=>state.userAuth.usersAddress)
    // address.map((a)=>{
    //     console.log(a);
        
    // })
    
    return (
        <div className='hone-three-parent position-relative mt-5'>
            <div className='position-absolute home-three-sub g-3 text-white'>
                <h4>Limited Time Offer</h4>
                <h2>Limited Time Offer
                    Special Edition</h2>
                <p className='w-50'>Limited Time Offer
                    Special Edition
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <h3 className='fs-5'>Buy This T-shirt At 20% Discount, Use Code OFF20
                </h3>
                 <button >Shope Now</button>
            </div>
           
        </div>
    )
}

export default Home3