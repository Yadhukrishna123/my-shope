import React, { useContext } from 'react'
import "./Mycart.css"
// import { FaStar } from 'react-icons/fa'
import { Rating } from '@mui/material'
import { LiaRupeeSignSolid } from 'react-icons/lia'
import { AllProductContexts } from '../AllProductContext/AllProductContext'
import { TiDelete } from "react-icons/ti";
import { Link } from 'react-router-dom'
import { DispatchContext, StateContext } from '../../Context/Appprovider'

const Mycart = () => {
    const { state } = useContext(StateContext)
    const {dispatch} = useContext(DispatchContext)
    console.log(state.userCart);

    const totalAmount = state.userCart.reduce((acc, price)=>acc+price.price, 0)
   console.log(totalAmount);
   

    let cartProduct = state.userCart.length > 0 ? (
        state.userCart.map((pro) => {
            return (
                <div className='container-p'>

                    <div className='d-flex sub-1'>
                        <div className='sub-1-sub-1'>
                            <img src={pro.thumbnail} alt="" />
                        </div >
                        <div className='sub-1-sub-2'>
                            <h4 >{pro.title}</h4>
                            <div className='d-flex '>
                                <Rating className='text-secondary mt-1' name="size-small" defaultValue={325} size="small" readOnly />
                                <p className='ms-5'>{pro.tags ? pro.tags.join(" ,") : null}</p>
                                <p style={{ cursor: "pointer" }} className='ms-5 fw-bold text-danger' onClick={()=>dispatch({type:"remove_product", payload:pro})}> Remove product</p>

                                <LiaRupeeSignSolid size={30} className='ms-auto' />
                                <p>{pro.price}</p>

                            </div>
                        </div>
                    </div>

                </div>
            )

        })
    ) : <p className='text-center my-5'>youe cart is empty</p>


    return (
        <div className='all-parent'>


            {cartProduct}

            <div className='d-flex justify-content-end mt-4 me-5'>
                <div className='me-5 cart-btn'>
                    <h4 className='me-5'>Total amount : {totalAmount}</h4>
                    <Link to="/">
                        <button>Back to Home</button>
                    </Link>
                    <button className='ms-4'>Checkout</button>
                </div>
            </div>
        </div>

    )
}

export default Mycart