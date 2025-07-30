import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Header/Home/Home'
import { AllProductContext } from './AllProductContext'
import NavBar from '../NavBar/NavBar'
import SearchProduct from '../SearchProduct/SearchProduct'
// import Footer from '../Footer/Footer'
import ProductDetails from '../ProductDetails/ProductDetails'
import Mycart from '../Mycart/Mycart'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'
import ProtectedRoutes from '../Utils/ProtectedRoutes'
import {Appprovider} from '../../Context/Appprovider'
import { useSelector } from 'react-redux'
// import NotificationMessage from '../NotificationMessage/NotificationMessage'


const Api = () => {

    const isAuthenticated = useSelector((state)=>state.userAuth.isAuthentication)
    return (

        <Appprovider>
            <AllProductContext>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/search' element={<SearchProduct />} />
                        <Route path='/details/:id' element={<ProductDetails />} />
                        <Route path='/cart' element={ <ProtectedRoutes isAuthenticated={isAuthenticated}><Mycart /></ProtectedRoutes>} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                         {/* <Route path='/toast' element={<NotificationMessage />} /> */}



                    </Routes>
                    {/* <Footer /> */}
                </BrowserRouter>
            </AllProductContext>
        </Appprovider>

    )
}

export default Api