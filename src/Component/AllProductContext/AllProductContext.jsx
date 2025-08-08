import React, { useEffect, useState } from 'react'
import Loading from '../Header/Loading/Loading'
import { useNavigate } from 'react-router-dom'


export const AllProductContexts = React.createContext()

export const AllProductContext = (props) => {

    let [loading, setLoading] = useState(false)
    let [allProduct, setAllProduct] = useState([])
    let [productDetails, setProductDetails] = useState([])
    let [similarProduct, setSimilarProduct] = useState([])
    let [loggedIn, setLoggedIn] = useState(false)
    let [closepoPup, setClosePupup] = useState(false)
    let[currentAddresss, setCurrentAddresss] = useState()


    const allMenu = async () => {
        setLoading(true)
        let api1 = "https://dummyjson.com/products?limit=100&skip=0"
        let resOne = await fetch(api1)
        let dataOne = await resOne.json()


        let api2 = "https://dummyjson.com/products?limit=100&skip=100"
        let resTwo = await fetch(api2)
        let datatwo = await resTwo.json()

        let products = [...dataOne.products, ...datatwo.products]
        setAllProduct(products)
        setLoading(false)

    }
    // console.log("products", similarProduct);





    useEffect(() => {
        allMenu()
    }, [])

    const dataToProductDetails = (d) => {
        setProductDetails(d)
        let similarProduct = allProduct.filter((item) => {
            return (
                item.category === d.category
            )
        })

        setSimilarProduct(similarProduct)
        window.scrollTo({ top: 0 });
    }

    const handleClosePopup = (r) => {
        setClosePupup(r)

    }


    return (
        <AllProductContexts.Provider value={{
            allProduct,
            dataToProductDetails,
            productDetails,
            similarProduct,
            setLoggedIn,
            loggedIn,
            handleClosePopup,
            closepoPup,
            setCurrentAddresss,
            currentAddresss
        }}>
            {!loading ? props.children : <Loading />}
        </AllProductContexts.Provider>
    )
}

