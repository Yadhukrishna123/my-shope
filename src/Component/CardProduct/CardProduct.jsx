import React, { useContext } from 'react'
import "./CardProduct.css"
import { Card } from 'react-bootstrap'
import { VscPercentage } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { AllProductContexts } from '../AllProductContext/AllProductContext';
import { Rating } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeWishList, userWishLists } from '../ReduxStore/userSlice';
import { FaHeart } from "react-icons/fa";



const CardProduct = ({ product }) => {

    const { dataToProductDetails } = useContext(AllProductContexts)
    const dispatch = useDispatch()
    const wishLishedProduct = useSelector((state) => state.userAuth.userWishList)
    const wishListproduct = wishLishedProduct.find((item) => item.id === product.id)



    const handleWishList = (product) => {
        dispatch((userWishLists({ wishList: product })))
    }

    return (

        <div className='row position-relative  mt-5 ms-4 cards'>

            <Card style={{ width: '18rem' }} >
                {wishListproduct ? <FaHeart onClick={()=>dispatch(removeWishList({userId:product.id}))} color='red' className='position-absolute heart-icon' /> : <FaRegHeart onClick={() => handleWishList(product)} className='position-absolute heart-icon' />}


                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <div>
                        <div className='d-flex'>
                            <p className='text-secondary pro-title'>{product.title}</p>
                            <p className='ms-auto text-success '><VscPercentage /> {product.discountPercentage}</p>
                        </div>
                        <div className='d-flex position-relative rating-parent'>
                            {/* <CiStar color='green' /> */}
                            <Rating className='text-success' name="size-small" defaultValue={product.rating} size="small" readOnly />
                            {/* <p className='position-absolute'></p> */}
                        </div>
                        <div style={{ border: "none" }} className='d-flex mt-2 position-relative price-parent '>
                            <LiaRupeeSignSolid />
                            <p className='position-absolute price'>{product.price}</p>

                        </div>

                    </div>
                    <Link to={`/details/${product.id}`}>
                        <button onClick={() => dataToProductDetails(product)} className='w-100 mt-2 p-1 bg-primary text-light outline-none fw-bold buy-btn'>Buy</button>

                    </Link>
                </Card.Body>
            </Card>
        </div>



    )
}

export default CardProduct