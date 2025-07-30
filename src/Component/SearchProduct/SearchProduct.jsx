import React, { useContext, useEffect, useState } from 'react'
import "./SearchProduct.css"
import Catogaries from '../Catogaries/Catogaries'
import { CiSearch } from "react-icons/ci";
import { AllProductContexts } from '../AllProductContext/AllProductContext';
import CardProduct from '../CardProduct/CardProduct';

const SearchProduct = () => {
    let [search, setSearch] = useState()
    let [show, shetShow] = useState(false)
    console.log(search)
    const { allProduct } = useContext(AllProductContexts)

    const searchProduct = search ? allProduct.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    ) : []

    let searchProducts = search && (

        searchProduct.length > 0 ? (
            searchProduct.map((product, index) => {
                return (
                    <CardProduct key={index} product={product} />
                )
            })
        ) : (<p className='text-center'>No product found for "{search}"</p>)

    )
    const handleInput = (e) => {
        setSearch(e.target.value)
        shetShow(true)
    }

    return (
        <div>
            <div className='text-center mt-4 position-relative'>
                <CiSearch size={30} className='icon ' />
                <input type="text"
                    className='input'
                    placeholder='Search your product'
                    value={search}
                    onChange={handleInput} />

            </div>

            <div className='row mt-5 me-3  justify-content-center align-items-center'>
                {show === true ? searchProducts : <Catogaries />}
            </div>

        </div>
    )
}

export default SearchProduct