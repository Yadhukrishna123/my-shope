import React from 'react'
import "./Payment.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { myOrder } from '../ReduxStore/userSlice'

const Payment = () => {
    const address = useSelector((state) => state.userAuth.user)
    const products = useSelector((state) => state.userAuth.userCartItems)
    let totalAmount = products.reduce((acc, price) => acc + price.price, 0)
    const totalItemOfCart = products.length
    const dispatch = useDispatch()

    const handleContinueOrder = () => {
        dispatch(myOrder({ myOrders: products }))
    }
    return (
        <div style={{ height: "750px" }} className='checkout-parent'>
            <div className='checkoutSession'>
                <h2 className='ms-5 text-secondary'>Payment</h2>
                <div className=' m-3 address-parent'>

                    {address.addresses.map((add) => {
                        return (
                            <div className=' m-3 address-parent'>


                                <div className='create-address '>

                                    <div className='d-flex'>
                                        <h5 className='ms-4'>{add.fullName}</h5>

                                        <h5 className='ms-4'>{add.phone}</h5>
                                    </div>
                                    <div>
                                        <p className='ms-4'>{`${add.address},${add.city_district_town},${add.state}, ${add.landMark}`}</p>

                                        <h5 className='ms-4'>{add.pincode}</h5>
                                    </div>



                                </div>
                            </div>
                        )
                    })}




                    <div className='payment-type-parent ms-5 mt-3'>
                        <div className='d-flex'>
                            <input className='mt-' type="radio" />
                            <h5 className='ms-3'>upi</h5>
                        </div>
                        <div>
                            <p className='ms-4'>Pay by any upi</p>
                        </div>
                    </div>

                    <div className='payment-type-parent ms-5 '>
                        <div className='d-flex'>
                            <input className='mt-' type="radio" />
                            <h5 className='ms-3'>Credit/ Debit/ ATM cart</h5>
                        </div>
                        <div>
                            <p className='ms-4'>Add and secure cards as per RBI guidelines</p>
                        </div>
                    </div>

                    <div className='payment-type-parent ms-5 '>
                        <div className='d-flex'>
                            <input className='mt-' type="radio" />
                            <h5 className='ms-3'>Net banking</h5>
                        </div>
                        <div>
                            <p className='ms-4'>This ingstrument has low success, use UPI or cards for better experience</p>
                        </div>
                    </div>

                    <div className='payment-type-parent ms-5 '>
                        <div className='d-flex'>
                            <input className='mt-' type="radio" />
                            <h5 className='ms-3'>EMI (easy installment)</h5>
                        </div>
                        <div>
                            <p className='ms-4'>.</p>
                        </div>
                    </div>

                    <div className='payment-type-parent ms-5 '>
                        <div className='d-flex'>
                            <input className='mt-' type="radio" />
                            <h5 className='ms-3'>Cash on delivery</h5>
                        </div>
                        <div>
                            <p className='ms-4'>.</p>
                        </div>
                    </div>

                </div>




            </div>
            <div className='price-session'>
                <h2 className='text-center mt-2 text-secondary'>Price-details</h2>


                <div className='price-parent'>

                    <div className='price-section-parent'>
                        <div className='price-of'>
                            <p>{`price of (${totalItemOfCart} items)`}</p>
                            <p className='ms-auto'>{totalAmount}</p>
                        </div>

                        <div className='platfom-fee mt-3'>
                            <p>{`Platform fee (${totalItemOfCart} items)`}</p>
                            <p className='ms-auto'>0</p>
                        </div>

                        <div className='total-Payable mt-4'>
                            <p>Total payable</p>
                            <p className='ms-auto'>{totalAmount}</p>
                        </div>
                    </div>






                </div>

                <div className='mt-5 text-center'>
                    <Link to="/success">
                        <button onClick={handleContinueOrder} style={{ padding: "5px 10px", border: "none" }} className='w-50 bg-primary  text-light fs-5'>CONTINUE </button>
                    </Link>

                </div>


            </div>
        </div>
    )
}

export default Payment