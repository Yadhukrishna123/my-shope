import React from 'react'
import "./Checkout.css"
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { LuPercent } from "react-icons/lu";

const Checkout = () => {
    const address = useSelector((state) => state.userAuth.user)
    const products = useSelector((state) => state.userAuth.userCartItems)
    let totalAmount = products.reduce((acc, price) => acc + price.price, 0)
    const totalItemOfCart = products.length
    const navigate = useNavigate()


    const handleCheckout = () => {
        if (address.addresses && address.addresses.length === 0) {
            alert("Address is required!")
        } else {
            navigate("/payment")
        }
    }








    return (
        <div className='checkout-parent'>
            <div className='right-session'>
                {address.addresses.map((a, index) => {
                    return (
                        <div key={index} className='checkout-address-session'>
                            <p>Deliver to <span className='fw-bold'>{a.fullName}</span></p>
                            <p>{`${a.address},${a.city_district_town},${a.state}, ${a.landMark}`}</p>
                            <p>{a.phone}</p>
                        </div>
                    )
                })}


                <div className='mt-5'>

                    {
                        products && products.map((p, index) => {
                            return (
                                <div key={index} className='checkout-product-details'>
                                    <div className='checkout-product-details-img'>
                                        <img src={p.thumbnail} alt="" />
                                    </div>
                                    <div className='checkout-product-details-oth-de'>
                                        <h5>{p.title}</h5>
                                        <div className='d-flex'>
                                            <div><LiaRupeeSignSolid /><span>{p.price}</span></div>
                                            <div className='ms-2'>{p.discountPercentage} <LuPercent color='green' />
                                                <span className='text-success'>off</span></div>
                                            <div className='ms-auto me-5'><p>Delevery in two days</p></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div className='btn-session'>
                    <button onClick={handleCheckout}>Place order</button>
                </div>
            </div>

            <div className='left-session'>

                <div className='left-price-session'>
                    <div className='left-price-session-head'>
                        <h5>Price details</h5>
                    </div>
                    <div className='d-flex mt-3 left-price-session-head-one'>
                        <div>
                            <p>Price ({`${totalItemOfCart}, item`})</p>
                            <p>Discount</p>
                            <p>Platform fee</p>
                        </div>
                        <div className='ms-auto'>
                            <LiaRupeeSignSolid /> <span> {totalAmount}</span>
                            <p className='text-success mt-3 ms-auto'>- 0</p>
                            <p className=' mt-3 ms-auto'>0</p>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div>
                            <h4>Total price</h4>
                        </div>
                        <div className='ms-auto'>
                            <LiaRupeeSignSolid className='mb-2' size={25} /> <span className='fs-4'>{totalAmount}</span>
                        </div>
                    </div>

                </div>

                <div className='d-flex  mt-5'>
                    <h5 className='text-secondary w-75 ms-auto me-3'>Safe and Secure Payments.Easy returns.100% Authentic products.</h5>
                </div>
            </div>
        </div>
    )
}

export default Checkout