import React, { useContext } from 'react'
import "./CardProduct.css"
import { Card } from 'react-bootstrap'
import { VscPercentage } from "react-icons/vsc";
import { CiStar } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { AllProductContexts } from '../AllProductContext/AllProductContext';
import { Rating } from '@mui/material';



const CardProduct = ({ product }) => {

const {dataToProductDetails} = useContext(AllProductContexts)

    return (

        <div className='row  mt-5 ms-4 cards'>
            <Card style={{ width: '18rem' }} >

                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <div>
                        <div className='d-flex'>
                            <p className='text-secondary pro-title'>{product.title}</p>
                            <p className='ms-auto text-success '><VscPercentage /> {product.discountPercentage}</p>
                        </div>
                        <div className='d-flex position-relative rating-parent'>
                            {/* <CiStar color='green' /> */}
                             <Rating className='text-success' name="size-small" defaultValue={product.rating} size="small" readOnly  />
                            {/* <p className='position-absolute'></p> */}
                        </div>
                        <div className='d-flex mt-2 position-relative price-parent '>
                            <LiaRupeeSignSolid />
                            <p className='position-absolute price'>{product.price}</p>

                        </div>

                    </div>
                    <Link to={`/details/${product.id}`}>
                        <button onClick={()=>dataToProductDetails(product)} className='w-100 mt-2 p-1 bg-primary text-light outline-none fw-bold buy-btn'>Buy</button>

                    </Link>
                </Card.Body>
            </Card>
        </div>



    )
}

export default CardProduct