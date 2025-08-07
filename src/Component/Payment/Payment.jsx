import React, { useState } from 'react'
import "./Payment.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { myOrder } from '../ReduxStore/userSlice'
import { LiaRupeeSignSolid } from 'react-icons/lia'


const Payment = () => {
    const address = useSelector((state) => state.userAuth.user)
    const products = useSelector((state) => state.userAuth.userCartItems)
    let totalAmount = products.reduce((acc, price) => acc + price.price, 0)
    const totalItemOfCart = products.length
    const [selectedPayment, setSelectedPayment] = useState()
    const [isClickedOption, setIsClickedOptio] = useState(false)
    const dispatch = useDispatch()
    let [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleContinueOrder = () => {
        dispatch(myOrder({ myOrders: products }))
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            navigate("/success")
        }, 3000)

    }

    const handleOption = (e) => {
        const clickedValue = e.target.value;
        setSelectedPayment(clickedValue);


    }


    return (


        <div className='payment-parent'>
            <div className='payment-right-session'>
                {address.addresses.map((a, index) => {
                    return (
                        <div key={index} className='checkout-address-session'>
                            <p>Deliver to <span className='fw-bold'>{a.fullName}</span></p>
                            <p>{`${a.address},${a.city_district_town},${a.state}, ${a.landMark}`}</p>
                            <p>{a.phone}</p>
                        </div>
                    )
                })}

                <div className='payment-opt-head'>
                    <h3>Payment options</h3>
                </div>

                <div className='payment-options'>
                    <div style={{ height: "80px" }} className='payment-options-it'>
                        <input type="radio" name="paymentOption" value="UPI" className='ms-5' onChange={handleOption} />
                        <h5 className='mt-2 ms-5'>UPI (Pay by any UPI)</h5>
                    </div>
                    <div className='payment-options-it'>
                        <input type="radio" name="paymentOption" value="Card" className='ms-5' onChange={handleOption} />
                        <div className='mt-4'>
                            <h5 className='mt-2 ms-5'>Credit/ Debit/ ATM card</h5>
                            <p className='fs-6 ms-5'>Add and secure cards as per RBI guidelines</p>
                        </div>
                    </div>
                    <div className='payment-options-it'>
                        <input type="radio" name="paymentOption" value="NB" className='ms-5' onChange={handleOption} />
                        <div className='mt-4'>
                            <h5 className='mt-2 ms-5'>Net banking</h5>
                            <p className='fs-6 ms-5'>This ingstrument has low success, use upi or card for better experience</p>
                        </div>
                    </div>
                    <div style={{ height: "80px" }} className='payment-options-it'>
                        <input type="radio" name="paymentOption" value="EMI" className='ms-5' onChange={handleOption} />
                        <div >
                            <h5 className='mt-2 ms-5'>EMI (Easy installment)</h5>

                        </div>
                    </div>
                    <div style={{ height: "80px" }} className='payment-options-it'>
                        <input type="radio" name="paymentOption" value="COD" className='ms-5' onChange={handleOption} />
                        <div >
                            <h5 className='mt-2 ms-5'>Cash on delivery</h5>

                        </div>
                    </div>
                </div>
            </div>


            <div className='payment-left-session'>
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

                <div className='payment-btn'>

                    {selectedPayment && <button onClick={handleContinueOrder}
                        disabled={!selectedPayment}
                    >
                        {loading ? (
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        ) : ("Pay")} <LiaRupeeSignSolid /> <span>{totalAmount}</span></button>}






                </div>
            </div>
        </div>
    )
}

export default Payment