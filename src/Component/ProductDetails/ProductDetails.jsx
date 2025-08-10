import React, { useContext, useState } from 'react'
import "./ProductDetails.css"
import { BsPercent } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { AllProductContexts } from '../AllProductContext/AllProductContext';
import { BiDollar } from "react-icons/bi";
import CardProduct from '../CardProduct/CardProduct';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userCart } from '../ReduxStore/userSlice';
// import { DispatchContext } from '../../Context/Appprovider';

const ProductDetails = () => {

    // let[ similarProduct, setSimilarProduct] = useState("")
    const isLoggedIn = useSelector((state)=>state.userAuth.isAuthentication)
    const { productDetails, similarProduct, handleItemToCart } = useContext(AllProductContexts)
    const dispatch  = useDispatch()
    let similarProducts = similarProduct.map((product, index) => {
        return (
            <CardProduct key={index} product={product} />
        )
    })

    const handleAddtocart = () => {
        if(isLoggedIn === true) {
             dispatch(userCart({userCartItem:productDetails}))
        }else{
            alert("Please loge in !")
        }
       
       
    }
   


    return (
        <div style={{height:"1100px"}}>
            <div className='product-details-container'>
                <div className='product-details-sub'>
                    <img src={productDetails.thumbnail} alt="" />

                </div>
                <div className='product-details-sub-1'>
                    <h2>{productDetails.title}</h2>
                    <div className='d-flex price-secssion'>
                        <h3 className='fs-4'><BiDollar size={25} className='mb-1' />{productDetails.price}</h3>
                        <p className='text-success ms-5 mt-1'>{productDetails.discountPercentage}<BsPercent size={20} color='green' />off</p>
                        <p className='ms-4 mt-1'>Free shipping</p>
                        <p className='ms-5 mt-1'><FaStar color='green' className='mb-1' />{productDetails.rating}</p>
                        <p className='ms-5 mt-1  text-secondary'>{productDetails.tags ? productDetails.tags.join(" , ") : null}</p>
                    </div>
                   <div className='description'>
                     <p className='w-75'>{productDetails.description}</p>
                   </div>
                    <div className='d-flex mb-2 otherDetails'>
                        <div className='d-flex '>
                            <p>{productDetails.brand}</p>
                            <p className='ms-3'>{productDetails.category}</p>
                            <p className='ms-3'>Weigth: {productDetails.weight} </p>
                        </div>
                        <div className='d-flex  me-5 text-secondary'>
                            <p className='ms-3'>{productDetails.shippingInformation}</p>
                            <p className='ms-3'>{productDetails.returnPolicy}</p>
                        </div>
                    </div>

                    <div className='d-flex mt-5 back-addCart-btn'>
                        <Link to="/">
                            <button >Back</button>
                        </Link>
                        <button onClick={()=>handleAddtocart()}>Add To Cart</button>
                    </div>
                </div>


            </div>

            <div >
                <h2 className='text-center fw-bold mt-5 text-decoration-underline'>Similar Products</h2>
                <div className='row mt-5 me-3  justify-content-center align-items-center'>

                    {similarProducts}

                </div>
            </div>
        </div>
    )
}

export default ProductDetails




