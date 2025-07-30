import React, { useContext, useEffect, useState } from 'react'
// import { CiSearch } from "react-icons/ci";
import "./Catagories.css"
import { AllProductContexts } from '../AllProductContext/AllProductContext'
import CardProduct from '../CardProduct/CardProduct'
import Pagination from '../Pagination/Pagination'


const Catogaries = () => {

    let [catagory, setCatagory] = useState([])
    let [catagorisedProduct, setCatagorisedProduct] = useState([])
    let [activeCatagory, setActiveCatagory] = useState('')
    let [currentPage, setCurrentPage] = useState(1)
    let [itemPerPage, setItemPerPage] = useState(10)
    const {allProduct} = useContext(AllProductContexts)






    const getAllCatagory = async () => {
        let api = "https://dummyjson.com/products/categories"
        let res = await fetch(api)
        let data = await res.json()
        setCatagory(data)
    }




    useEffect(() => {
        getAllCatagory()
    }, [])

    const handleFilterdCatagory = (cato) => {
        setActiveCatagory(cato)
        let filterds = allProduct.filter((prod) => {
            return prod.category === cato
        }).map((product, index) => {
            return (
                <CardProduct key={index} product={product} />


            )
        })
        setCatagorisedProduct(filterds)
    }

    let indexOfLastPage = currentPage * itemPerPage
    let indexOfFirstPage = indexOfLastPage - itemPerPage

    let productShowNow = catagorisedProduct.slice(indexOfFirstPage, indexOfLastPage)

    return (
        <div className='text-center mt-3 catagory-parent'>
            {catagory.map((catagory, index) => {
                return (
                    <button onClick={() => handleFilterdCatagory(catagory.slug)} key={index} className={catagory.slug === activeCatagory ? "cato-btn-focouse" : "cato-btn"}>{catagory.slug}</button>

                )
            })}


            <div>
                <div className='row mt-5 me-3  justify-content-center align-items-center'>

                    {productShowNow}

                </div>
            </div>

            <div className='text-center mt-5'>
                <Pagination products={catagorisedProduct}
                    itemPerPage={itemPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage} />
            </div>

        </div>
    )
}

export default Catogaries