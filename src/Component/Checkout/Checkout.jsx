import React from 'react'
import "./Checkout.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const address = useSelector((state) => state.userAuth.user)
    const products = useSelector((state) => state.userAuth.userCartItems)
    console.log(products);
    let totalAmount = products.reduce((acc, price) => acc + price.price, 0)
    const totalItemOfCart = products.length





    return (
        <div className='parent-parent'>
            <div className='checkout-parent'>
                <div className='checkoutSession'>
                    <h2 className='ms-5 text-secondary'>Delivery address</h2>
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

                    {
                        products.map((product) => {
                            return (
                                <div className='checkout-parent'>
                                    <div className='checkout-image'>
                                        <img src={product.thumbnail} alt="" />
                                    </div>
                                    <div className='checkout-product-details'>
                                        <h2>{product.title}</h2>
                                    </div>
                                    <div className='checkout-price'>
                                        <p>{product.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                    <div className='text-center'>
                        <Link to="/payment">
                            <button className='continue-button ms-auto'>Continue</button>

                        </Link>
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



                </div>
            </div>
        </div>
    )
}

export default Checkout