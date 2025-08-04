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
// import { Appprovider } from '../../Context/Appprovider'
import { useSelector } from 'react-redux'
import UserPage from '../UserPage/UserPage'
import MyOrder from '../MyOrders/MyOrder'
import Checkout from '../Checkout/Checkout'
import Payment from '../Payment/Payment'
import OrderPlaced from '../OrderPlaced/OrderPlaced'
import About from '../About/About'
import Contact from '../ContactUs/Contact'
import Footer from '../Footer/Footer'
// import UserAddress from '../UserAddress/UserAddress'
// import UserAddress from '../UserAddress/UserAddress'
// import NotificationMessage from '../NotificationMessage/NotificationMessage'


const Api = () => {

    const isAuthenticated = useSelector((state) => state.userAuth.isAuthentication)
    return (

        // <Appprovider>
        <AllProductContext>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<SearchProduct />} />
                    <Route path='/details/:id' element={<ProductDetails />} />
                    <Route path='/cart' element={<ProtectedRoutes isAuthenticated={isAuthenticated}><Mycart /></ProtectedRoutes>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/account/:id/*' element={<ProtectedRoutes isAuthenticated={isAuthenticated}><UserPage /></ProtectedRoutes>} />
                    <Route path='/checkout' element={<ProtectedRoutes isAuthenticated={isAuthenticated}><Checkout /></ProtectedRoutes>} />
                    <Route path='/payment' element={<ProtectedRoutes isAuthenticated={isAuthenticated}><Payment /></ProtectedRoutes>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />

                    <Route path='/success' element={<ProtectedRoutes isAuthenticated={isAuthenticated}><OrderPlaced /></ProtectedRoutes>} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </AllProductContext>
        // </Appprovider>

    )
}

export default Api