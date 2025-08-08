import React, { useState } from 'react'
import "./Checkout.css"
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { LuPercent } from "react-icons/lu";
import AllAddressPopup from '../AllAddressPopup/AllAddressPopup';

const Checkout = () => {
    const address = useSelector((state) => state.userAuth.user)
    const products = useSelector((state) => state.userAuth.userCartItems)
    let totalAmount = products.reduce((acc, price) => acc + price.price, 0)
    const totalItemOfCart = products.length
    const navigate = useNavigate()
    let [popup, setPopup] = useState(false)
    let [currentAddress, setCurrentAddress] = useState(0)

    console.log(products)
    const handleCheckout = () => {
        if (address.addresses && address.addresses.length === 0) {
            alert("Address is required!")
        } else {
            navigate("/payment")
        }
    }



    const handleChangeAddress = () => {
        setPopup(true)
    }






    return (
        <div className='checkout-parent'>
            {popup && <AllAddressPopup  setPopup={setPopup} setCurrentAddress={setCurrentAddress}/>}

            <div className='right-session'>
                {/* {address.addresses.map((a, index) => {
                    return (
                       
                    )
                })} */}
                {address.addresses && address.addresses.length > 0 && (
                    <div className='checkout-address-session'>
                        <div>
                            <p>Deliver to <span className='fw-bold'>{address.addresses[currentAddress].fullName}</span></p>
                            <p>{`${address.addresses[currentAddress].address},${address.addresses[currentAddress].city_district_town},${address.addresses[currentAddress].state}, ${address.addresses[currentAddress].landMark}`}</p>
                            <p>{address.addresses[currentAddress].phone}</p>
                        </div>
                        <div className='ms-auto mt-5 me-4' >
                            <button onClick={handleChangeAddress} style={{ border: "none" }}>Change</button>
                        </div>

                    </div>
                )}



                <div className='mt-5 '>

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
                                            <div className='ms-2 text-success'>{p.discountPercentage} <LuPercent color='green' />
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