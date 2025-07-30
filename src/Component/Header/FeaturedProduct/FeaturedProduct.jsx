import React, { useState } from 'react'
import "./Featured.css"
import CardProduct from '../../CardProduct/CardProduct'

const FeaturedProduct = ({ allProduct }) => {

    let numberOfProduct = 10
    let featuredProducts = allProduct.slice(0, numberOfProduct)
    let product = featuredProducts.map((product, index) => {
        return (
            <CardProduct key={index} product={product} />
        )
    })


    return (
        <div className='mt-5'>
            <h2 className='text-center'>Featured products</h2>
            <div className='row justify-content-center align-items-center g-3 mt-4'>

                {product}

            </div>
        </div>
    )
}

export default FeaturedProduct