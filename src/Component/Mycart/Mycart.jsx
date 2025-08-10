import React, { useContext } from 'react'
import "./Mycart.css"
// import { FaStar } from 'react-icons/fa'
import { Rating } from '@mui/material'
import { LiaRupeeSignSolid } from 'react-icons/lia'
import { AllProductContexts } from '../AllProductContext/AllProductContext'
import { TiDelete } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../ReduxStore/userSlice'
import CardProduct from '../CardProduct/CardProduct'
import { IoMdClose } from "react-icons/io";
// import { DispatchContext, StateContext } from '../../Context/Appprovider'

const Mycart = () => {

    const userCartProduct = useSelector((state) => state.userAuth.userCartItems)
    console.log("userCartProduct", userCartProduct)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlecheckout = () => {
        if (userCartProduct.length === 0) {
            alert("Please add alteast one item")
        } else {
            navigate("/checkout")
        }
    }


    let cartProduct = userCartProduct.length > 0 ? (
        userCartProduct.map((item, index) => {
            return (
                // <div key={index} className='d-flex sub-1'>
                //     <div className='sub-1-sub-1'>
                //         <img src={item.thumbnail} alt="" />
                //     </div >
                //     <div className='sub-1-sub-2'>
                //         <h4 >{item.title}</h4>
                //         <div className='d-flex '>
                //             <Rating className='text-secondary mt-1' name="size-small" defaultValue={325} size="small" readOnly />
                //             <p className='ms-5'>{item.tags ? item.tags : null}</p>
                //             <p style={{ cursor: "pointer" }} className='ms-5 fw-bold text-danger' onClick={() => dispatch(removeProduct({ userId: item.id }))}> Remove product</p>

                //             <LiaRupeeSignSolid size={30} className='ms-auto' />
                //             <p>{item.price}</p>

                //         </div>
                //     </div>
                // </div>







                <div key={index} className='cart-parent'>

                    <div className='cart-parent-cont'>
                        <img src={item.thumbnail} />
                    </div>
                    <div style={{ marginRight: "100px", marginTop: "30px" }} className='cart-parent-cont'>
                        <h4>{item.title}</h4>
                        <Rating className='text-success mt-1' name="size-small" defaultValue={item.discountPercentage} size="small" readOnly />
                        <p>{item.tags ? item.tags : null}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", }} className='cart-parent-cont'>
                        <LiaRupeeSignSolid size={30} />
                        <h6>{item.price}</h6>
                    </div>
                    <div className='remove-icon'>
                        <div className="remove-icon-sub">
                            {/* <IoMdClose size={32} color='red'  /> */}
                            <p style={{color:"red", cursor:"pointer"}} onClick={() => dispatch(removeProduct({ userId: item.id }))}>Remove</p>

                        </div>
                    </div>
                </div>

            )
        })
    ) : <p className='text-center my-5'>youe cart is empty</p>



    let totalAmount = userCartProduct.reduce((acc, price) => acc + price.price, 0)
    // console.log(totalAmount)

    return (
        // <div style={{height:"750px"}} className='all-parent'>
        //     <div className='container-p'>
        //         {/* {cartProduct} */}
        //     </div>

        //     <div className='d-flex justify-content-end mt-4 me-5'>
        //         <div className='me-5 cart-btn'>
        //             <h4 className='me-5'>Total amount : {totalAmount}</h4>
        //             <Link to="/">
        //                 <button>Back to Home</button>
        //             </Link>

        //                 <button onClick={handlecheckout} className='ms-4'>Checkout</button>


        //         </div>
        //     </div>
        // </div>

        <div style={{ maxHeightL: "450px" }}>

            {cartProduct}

            <div className='cart-buttons'>
                <div className='cart-buttons-sub ms-auto'>
                    <Link to="/">
                        <button>Back to Home</button>
                    </Link>
                    <button onClick={handlecheckout}>Continue</button>
                </div>

            </div>
        </div>
    )
}

export default Mycart